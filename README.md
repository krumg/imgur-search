Image Search - Imgur API
========================

### Image Search API

I am are using [Imgur API](https://api.imgur.com/endpoints) for image search. I've got our Client ID, and to keep things clean put it in [config.js](https://github.com/krumg/imgur-search/blob/master/src/config.js).

I am keeping things simple and clean — using [axios](https://github.com/mzabriskie/axios) to fetch the data from the API, and ES2015 template literals to populate the results with the data from the API. For the presentation I am using Bootstrap.

Finally, webpack bundles everything together into a single file.

### Demo

Demo available at [Codepen](http://codepen.io/krum/full/BWrKbg/)

### Usage

```
git clone https://github.com/krumg/imgur-search.git
cd imgur-search/
npm install
npm start
open http://localhost:8080
```