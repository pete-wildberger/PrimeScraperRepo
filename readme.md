# Super Fun Web Scraping

[![Slides][slides-img]][slides-url]

## Getting started with this repo

The code in this repo is written in typescript. Typescript will install as part of the dev dependencies. You can also install typescript globally on your machine by running `sudo npm install -g typescript`. To build and start the project run `npm start` or `yarn start`.

## How it Works

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

## Docs

[Cherrio Docs](https://cheerio.js.org/)

[Puppeteer Docs](https://github.com/puppeteer/puppeteer/blob/master/README.md)

[slides-img]: https://img.shields.io/badge/slides-google-blue
[slides-url]: https://docs.google.com/presentation/d/1u3FTOzHJQDFMkwDiVE2_5jzqex8rN8PKf-XDyDDJ0Gs/edit?usp=sharing
