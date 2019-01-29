#!/usr/bin/env node
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const URL_PRODUIT = 'https://cantine-gamelle.fr/vauquelin/plat-du-jour/50-plat-du-jour-seul.html';
const ELEMENT = 'h1';

(async () => {
  const request = await fetch(URL_PRODUIT);
  const DOM = new JSDOM(await request.text());
  const platDuJour = DOM.window.document.querySelector(ELEMENT).textContent;
  process.stdout.write(`${platDuJour}\n`);
})();
