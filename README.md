# StickyFooter.js

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fc77f05e8d0743729ef31d7da9e09ed6)](https://www.codacy.com/app/jahidulpabelislam/sticky-footer.js?utm_source=github.com&utm_medium=referral&utm_content=jahidulpabelislam/sticky-footer.js&utm_campaign=Badge_Grade)

## What?

A small library to create a sticky footer effect using JavaScript & jQuery.

If the length of the normal/original height of the page is smaller than the height of the window, the library will then extent the 'main content' element to to fill the remaining space.

## Why?

I had decided to create this library as I has found my self creating and using this effect/code in all my projects, so thought it will be nice to have it in one place only.
This way maintenance all use of this effect can be done easily. While also helping the developer community, with this nice small helper library for the front-end.

## How?

Insert script link into the bottom on your HTML body, using the following structure: `https://cdn.jsdelivr.net/gh/jahidulpabelislam/StickyFooter.js@{version}/src/sticky-footer.min.js` (for example `https://cdn.jsdelivr.net/gh/jahidulpabelislam/StickyFooter.js@1.0.0}/src/sticky-footer.min.js`)

Then in your JavaScript file, construct the StickyFooter by `new StickyFooter({mainContentSelector});` (for example `var stickyFooter = new StickyFooter('.main-content');`)

You can store the return from `StickyFooter` to manually trigger an refresh on repositioning by `stickyFooter.repositionFooter();`

## License

This project is licensed under the terms of the GNU General Public License v3.0 license.
