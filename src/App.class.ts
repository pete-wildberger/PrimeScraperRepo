import axios from 'axios';
import * as cheerio from 'cheerio';

export class App {
    constructor(){
        console.log('App started');
        this.run();
    }

    run = async (): Promise<void> => {
        try {
            const { data } = await axios.get('https://www.google.com');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}