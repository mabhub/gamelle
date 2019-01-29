#!/usr/bin/env node
const fetch = require('node-fetch');
const { DOMParser } = require('xmldom');
const xpath = require('xpath');

const URL_PRODUIT = 'https://cantine-gamelle.fr/vauquelin/plat-du-jour/50-plat-du-jour-seul.html';

(async () => {
  const request = await fetch(URL_PRODUIT);
  const document = new DOMParser({ errorHandler: {} }).parseFromString(await request.text());

  const platDuJour = xpath.select('string(//h1)', document);
  process.stdout.write(`${platDuJour}\n`);
})();
