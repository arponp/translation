import { v2 } from '@google-cloud/translate';

export const detectLanguage = async text => {
    try {
        const credentials = JSON.parse(process.env.REACT_APP_CREDENTIALS);
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

export const translateLanguage = async (text, targetLanguage) => {
    try {
        const credentials = JSON.parse(process.env.REACT_APP_CREDENTIALS);
        const translate = new v2.Translate({
            credentials,
            projectId: credentials.project_id,
        });
        const [translations] = await translate.translate(text, targetLanguage);
        return translations;
    } catch (e) {
        console.error(e);
        return null;
    }
};
