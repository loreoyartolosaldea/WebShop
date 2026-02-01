# Blueprint: Lau Oin Proiektua

## Aplikazioaren Helburua

"Lau Oin" maskota denda baten online denda (e-commerce) da. Erabiltzaileek produktuen katalogo bat ikus dezakete, eta etorkizunean, produktu horiek erosteko aukera izango dute.

## Inplementatutako Funtzionalitateak

### 1. Egitura Nagusia
- **Bideratzea (`App.jsx`):** Aplikazioaren orri nagusia da eta `react-router-dom` erabiltzen du nabigazioa kudeatzeko. `/` eta `/denda` ibilbideak definitzen ditu.
- **Nabigazio-barra (`Navbar.jsx`):** Goiburua, "Lau Oin" titulua eta "Denda" esteka ditu.
- **Orri-oina (`Footer.jsx`):** Aplikazioaren behealdean dagoen informazio-atala.

### 2. Produktuen Katalogoa (`ProductList.jsx`)
- Osagai honek produktuak bistaratzen ditu.
- Une honetan, datu estatikoak (hardcodeatuak) erabiltzen ditu produktuak erakusteko, etorkizunean datu-base batera konektatzeko asmoarekin.
- `/` eta `/denda` ibilbideetan erakusten da.

## Uneko Egoera

Aplikazioa sinplifikatuta dago eta oinarrizko egitura funtzionala du. Konpondu da inportazio-errorea, eta orain proiektuak behar bezala kargatu beharko luke. Saioa hasteko funtzionalitatea kendu da, eta `ProductList` osagaia da orri nagusia.
