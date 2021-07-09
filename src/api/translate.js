import { v2 } from '@google-cloud/translate';
import dotenv from 'dotenv';

dotenv.config();

const credentials = JSON.parse(process.env.CREDENTIALS);

const translate = new v2.Translate({
    credentials,
    projectId: credentials.project_id,
});

const detectLanguage = async text => {
    try {
        const [{ language }] = await translate.detect(text);
        return language;
    } catch (e) {
        console.error(e);
        return null;
    }
};

const translateLanguage = async (text, targetLanguage) => {
    try {
        const [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export { detectLanguage, translateLanguage };
