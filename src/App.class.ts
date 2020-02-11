import axios from 'axios';
import * as cheerio from 'cheerio';

export class App {
    private config = {
        title: '.summary-title',
        time: '.summary-metadata'
    };
    constructor() {
        console.log('App started');
        this.run();
    }

    run = async (): Promise<void> => {
        try {
            const { data } = await axios.get('https://www.thecedar.org/listing');
            const $ = cheerio.load(data);
            const els = this.selectElements($, '.summary-item');
            const shows = this.buildShows($, els, this.config);
            console.log(shows);
        } catch (error) {
            console.log(error);
        }
    };

    selectElements($: CheerioStatic, selector: string): CheerioElement[] {
        const elements: CheerioElement[] = [];
        $(selector).each((i, elem) => {
            elements[i] = elem;
        });
        return elements;
    }

    buildShows($: CheerioStatic, elements: CheerioElement[], config: { [key: string]: string }): Array<{ [key: string]: string }> {
        return elements.map(el => {
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
