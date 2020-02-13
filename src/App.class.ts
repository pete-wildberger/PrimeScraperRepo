import axios from 'axios';
import * as cheerio from 'cheerio';

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
            console.log(shows); // print result
        } catch (error) {
            console.log(error);
        }
    };

    selectElements($: CheerioStatic, selector: string): CheerioElement[] {
        const elements: CheerioElement[] = [];
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
                    .find(value)
                    .first()
                    .text()
                    .trim();
            });
            return result;
        });
    }
}
