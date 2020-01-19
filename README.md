# StickyFooter.js

[![NPM](https://nodei.co/npm/sticky-footer.js.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/sticky-footer.js)

[![CodeFactor](https://www.codefactor.io/repository/github/jahidulpabelislam/sticky-footer.js/badge?style=flat-square)](https://www.codefactor.io/repository/github/jahidulpabelislam/sticky-footer.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fc77f05e8d0743729ef31d7da9e09ed6)](https://www.codacy.com/app/jahidulpabelislam/sticky-footer.js?utm_source=github.com&utm_medium=referral&utm_content=jahidulpabelislam/sticky-footer.js&utm_campaign=Badge_Grade)
![npm](https://img.shields.io/npm/v/sticky-footer.js.svg)
![npm](https://img.shields.io/npm/dm/sticky-footer.js.svg)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/jahidulpabelislam/sticky-footer.js.svg)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jahidulpabelislam/sticky-footer.js/master.svg?label=last%20release)![npm bundle size](https://img.shields.io/bundlephobia/min/sticky-footer.js.svg)
![NPM](https://img.shields.io/npm/l/sticky-footer.js.svg)

## What?

A very small and lightweight library to create a sticky footer effect just using JavaScript & jQuery.

If the original/normal height of the page is shorter than the window height, the library will extend the 'main content' element to fill the remaining space. This will essentially push the `footer` element down to the bottom of the page creating the sticky footer.

-   lightweight - file size: 4kb & 1kb minified, package size: 65kb & 21kb minified
-   one & only dependency is jQuery
-   all major browsers supported
-   no extra CSS needed
-   simple to use

## Why?

I decided to create this library as I have found myself recreating and using this effect/code in all my projects, so thought it would be better to only have it in one place.
This makes it easier to maintain all uses of this effect. While also helping the developer community, with this small helper library for the front-end.

## How?

### Requirements

-   jQuery v1+

### Installation

Firstly you will need a copy of one of two `js` files either the minified or non-minified version (`sticky-footer.min.js` or `sticky-footer.js`).
You can install it in various ways:

-   via NPM - `npm install sticky-footer.js` ([https://www.npmjs.com/package/sticky-footer.js](https://www.npmjs.com/package/sticky-footer.js))
-   using jsDelivr CDN - [https://www.jsdelivr.com/package/npm/sticky-footer.js](https://www.jsdelivr.com/package/npm/sticky-footer.js) (for example `https://cdn.jsdelivr.net/npm/sticky-footer.js@1.3.0/src/sticky-footer.min.js`)
-   download file directly

### Set up

Next insert the script/file into the necessary pages (`sticky-footer.min.js` or `sticky-footer.js`) as well as jQuery if not already.

Then in your JavaScript, construct the StickyFooter and pass the 'main element' selector as its only parameter. The 'main content' selector being the selector of the element that should grow if the content isn't long enough. (for example `var stickyFooter = new StickyFooter('.main-content');`).

You can store the returned value from `StickyFooter` to then later manually trigger a refresh on repositioning, by calling the `repositionFooter` function on that returned object.

## Support

### jQuery

Has been tested with all major versions

### Browser

Has been tested on all major browsers

-   Chrome
-   Firefox
-   Safari
-   Android Browser
-   Edge
-   IE
-   Opera

## License

This project is licensed under the terms of the GNU General Public License v3.0 license.
