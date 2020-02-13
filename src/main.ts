import { App, ConfigModel } from './App.class';

(function(): void {
    console.log('Scrapper Running');
    const URL: string = 'https://www.thecedar.org/listing';
    const CONFIG: ConfigModel = {
        parent: '.summary-item',
        children: {
            title: '.summary-title',
            time: '.summary-metadata'
        }
    };
    new App(URL, CONFIG);
})();

// const URL = 'https://www.bleachr.co/our-team';
// const CONFIG = {
//     parent: '[class*="style-k20ql767inlineContent"]',
//     children: {
//         title: 'span[style="letter-spacing:0em;"] span',
//         name: 'span[style="font-size:19px;"] span'
//     }
// };
