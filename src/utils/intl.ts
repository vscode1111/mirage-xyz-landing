import * as intl from 'react-intl-universal';

export function t(key: string, value?: any): string {
  return intl.get(key, value) || key;
}

export function tHTML(key: string, value?: any): string {
  return intl.getHTML(key, value) || key;
}
