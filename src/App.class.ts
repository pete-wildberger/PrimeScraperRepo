import axios from 'axios';
import * as cheerio from 'cheerio';
import { promisify } from 'util';
import { writeFile as wf } from 'fs';
const writeFile = promisify(wf);

export interface ConfigModel {
    parent: string;
    children: {
        [key: string]: string;
    };
}

export class App {
    private config: ConfigModel;
    private url: string;

    constructor(url: string, config: ConfigModel) {
        console.log('App started');
        this.url = url;
        this.config = config;
        this.run(); // run app
    }
    // main app method
    run = async (): Promise<void> => {
        try {
            const { data } = await axios.get(this.url); // make http request to get site data
            const $ = cheerio.load(data); // load Cheerio
            const els = this.selectElements($, this.config.parent); // select parent elements
            const shows = this.buildResult($, els, this.config.children); // build result object array
            await this.writeJSONFile('result.json', shows);
            console.log(shows); // print result
        } catch (error) {
            console.log(error);
        }
    };

    selectElements($: CheerioStatic, selector: string): CheerioElement[] {
        const elements: CheerioElement[] = [];
        // https://api.jquery.com/each/
        $(selector).each((i, elem) => {
            // select all elements based of parent config and push into an array
            elements[i] = elem;
        });
        return elements;
    }

    buildResult($: CheerioStatic, elements: CheerioElement[], config: { [key: string]: string }): Array<{ [key: string]: string }> {
        return elements.map(el => {
            // build result object for each element
            const result = {};
            Object.entries(config).forEach(([key, value]) => {
                result[key] = $(el)
                    .find(value) // https://api.jquery.com/find/
                    .first() // https://api.jquery.com/first/
                    .text() // https://api.jquery.com/text/
                    .trim();
            });
            return result;
        });
    }

    async writeJSONFile(name: string, obj: { [key: string]: any }): Promise<void> {
        const data = JSON.stringify(obj);
        try {
            await writeFile(name, data);
        } catch (err) {
            throw err;
        }
    }
}
