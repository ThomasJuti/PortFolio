import { content, defaultLang, detectLang, isLang, type Lang } from './content';

const STORAGE_KEY = 'thomas-portfolio:lang';

function readStoredLang(): Lang | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isLang(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStoredLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // storage may be unavailable (private mode) — persisting is a nice-to-have
  }
}

function resolvePath(dict: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dict);
}

function applyStaticTranslations(lang: Lang) {
  const dict = content[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n;
    if (!path) return;
    const value = resolvePath(dict, path);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    spec.split('|').forEach((pair) => {
      const [attr, path] = pair.split(':');
      if (!attr || !path) return;
      const value = resolvePath(dict, path);
      if (typeof value === 'string') el.setAttribute(attr, value);
    });
  });

  document.documentElement.setAttribute('data-i18n-ready', '');
}

// Runs once, the first time any component's client script imports this
// module — before that script's own top-level code runs — so every listener
// registered below always sees a page already translated into the right
// language, regardless of which component happens to load first.
let currentLang: Lang = readStoredLang() ?? detectLang(navigator.language) ?? defaultLang;

const listeners = new Set<(lang: Lang) => void>();

export function getCurrentLang(): Lang {
  return currentLang;
}

export function onLangChange(fn: (lang: Lang) => void) {
  listeners.add(fn);
}

export function changeLang(lang: Lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  writeStoredLang(lang);
  applyStaticTranslations(lang);
  listeners.forEach((fn) => fn(lang));
}

applyStaticTranslations(currentLang);

export { content };
export type { Lang };
