const messages = {
    en: require('../localization/en.json'),
    ru: require('../localization/ru.json'),
};

export const getLocalizedText = (key: string, lang: 'en' | 'ru' = 'en'): string => {
    return messages[lang][key] || messages.en[key] || `[${key}]`;
};