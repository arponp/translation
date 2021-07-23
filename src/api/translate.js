import { v2 } from '@google-cloud/translate';
import dotenv from 'dotenv';

const detectLanguage = async text => {
    try {
        dotenv.config();
        const credentials = JSON.parse(process.env.CREDENTIALS);
        const translate = new v2.Translate({
            credentials,
            projectId: credentials.project_id,
        });
        const [{ language }] = await translate.detect(text);
        return language;
    } catch (e) {
        console.error(e);
        return null;
    }
};

const translateLanguage = async (text, targetLanguage) => {
    try {
        dotenv.config();
        const credentials = JSON.parse(process.env.CREDENTIALS);
        const translate = new v2.Translate({
            credentials,
            projectId: credentials.project_id,
        });
        let [translations] = await translate.translate(text, targetLanguage);
        translations = Array.isArray(translations)
            ? translations
            : [translations];
        return translations;
    } catch (e) {
        console.error(e);
        return null;
    }
};

(async () => {
    const lang = await translateLanguage('como te llamas?', 'ja');
    console.log(lang);
})();

export { detectLanguage, translateLanguage };
