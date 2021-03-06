# Super Fun Web Scraping

[![Slides][slides-img]][slides-url]

## Getting started with this repo

The code in this repo is written in typescript. Typescript will install as part of the dev dependencies. You can also install typescript globally on your machine by running `sudo npm install -g typescript`. To build and start the project run `npm start` or `yarn start`.

## How it Works

This scraper is set up to turn lists of web elements into a json file and prints it to the console.

The App requires two arguments: a url and a config object. The url is a string http(s) website address. The config object consists of a parent key which has a css selector string values. The children key is and object with key value pairs of string keys and css selector string values.

```
const URL: string = 'https://www.example.com';
const CONFIG: ConfigModel = {
    parent: 'a container element css selector',
    children: {
        key: 'any child element css selector'
    }
};
```

To start the app just make a new instance by injecting the url and config props.

```
new App(URL, CONFIG);
```

Upon errorless App completion a json file will be saved in the root directory.

## Dependencies

Main dependencies:

-   [Axios](https://github.com/axios/axios)

-   [Cherrio Docs](https://cheerio.js.org/)

-   [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Utility dependencies:

-   [Utils](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)

-   [FS](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)

## Further Reading

[Puppeteer Docs](https://github.com/puppeteer/puppeteer/blob/master/README.md)

[slides-img]: https://img.shields.io/badge/slides-google-blue
[slides-url]: https://docs.google.com/presentation/d/1u3FTOzHJQDFMkwDiVE2_5jzqex8rN8PKf-XDyDDJ0Gs/edit?usp=sharing
