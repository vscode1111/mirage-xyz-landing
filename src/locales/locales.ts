import localeUS from './en-US.json';
import localeUSCountries from './en-US-countries.json';

const LOCALES_DATA = {
  'en-US': { ...localeUS, ...localeUSCountries },
};

export { LOCALES_DATA };
