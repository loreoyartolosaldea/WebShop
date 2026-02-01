// src/seed.js

// Produktuen zerrenda, UI-an erakusteko eta base datuan gordetzeko
export const products = [
  { id: 1, izena: 'Txakur Elikadura', deskribapena: 'Elikadura onena zure txakurrarentzat.', prezioa: 29.99, irudi_urla: '/images/txakur_elikadura.png' },
  { id: 2, izena: 'Katu Janaria', deskribapena: 'Kalitatezko janaria zure katua osasuntsu mantentzeko.', prezioa: 24.50, irudi_urla: '/images/katu_janaria.png' },
  { id: 3, izena: 'Arrain Janaria', deskribapena: 'Bitaminaz betetako janaria zure arrainentzat.', prezioa: 9.99, irudi_urla: '/images/arrain_janaria.png' },
  { id: 4, izena: 'Txori Janaria', deskribapena: 'Hazi nahasketa txori basati eta domestikoentzat.', prezioa: 12.75, irudi_urla: '/images/txori_janaria.png' },
  { id: 5, izena: 'Korrea', deskribapena: 'Uhal sendo eta dotorea, edozein txakurrentzat.', prezioa: 15.00, irudi_urla: '/images/Korrea.png' },
  { id: 6, izena: 'Jostailua', deskribapena: 'Mastekatzeko jostailu iraunkorra, ondo pasatzeko.', prezioa: 11.20, irudi_urla: '/images/jostailua.png' },
  { id: 7, izena: 'Ohea', deskribapena: 'Ohe bigun eta erosoa, zure maskotaren atsedenerako.', prezioa: 45.00, irudi_urla: '/images/ohea.png' },
  { id: 8, izena: 'Hazkagailua', deskribapena: 'Katuentzako hazkagailua, altzariak babesteko.', prezioa: 35.50, irudi_urla: '/images/hazkagailua.png' },
  { id: 9, izena: 'Pezera', deskribapena: 'Beirazko pezera modernoa, iragazkiarekin.', prezioa: 89.90, irudi_urla: '/images/pezera.png' },
];

// Oharra: Datu-basea betetzeko funtzioa kendu da hemendik, 
// exekutagarri den script batean (run-seeder.mjs) dagoelako.
