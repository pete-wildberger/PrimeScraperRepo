import axios from 'axios';
import * as cheerio from 'cheerio';

export class App {
    constructor() {
        console.log('App started');
        this.run();
    }

    run = async (): Promise<void> => {
        try {
            const { data } = await axios.get('https://www.thecedar.org/listing');
            const $ = cheerio.load(data);
            const titles = this.selectText($, '.summary-title');
            console.log(titles);
        } catch (error) {
            console.log(error);
        }
    };

    selectText($: CheerioStatic, selector: string) {
        const titles: string[] = [];
        $(selector).each(function(i, elem) {
            titles[i] = $(elem)
                .text()
                .trim();
        });
        return titles;
    }
}
