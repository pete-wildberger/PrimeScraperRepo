import { App } from './App.class';

(function(): void {
    console.log('Scrapper Running');
    const URL = 'https://www.thecedar.org/listing';
    const CONFIG = {
        parent: '.summary-item',
        children: {
            title: '.summary-title',
            time: '.summary-metadata'
        }
    };
    new App(URL, CONFIG);
})();
