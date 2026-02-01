
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, writeBatch, addDoc } = require('firebase/firestore');

// Zure Firebase proiektuaren konfigurazioa .env fitxategitik kargatu
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function restoreDatabase() {
  try {
    console.log('Datu-basea garbitzen hasita...');
    const productsCollection = collection(db, 'produktuak');
    const productsSnapshot = await getDocs(productsCollection);
    if (!productsSnapshot.empty) {
      const batch = writeBatch(db);
      productsSnapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      console.log('Lehendik zeuden produktu guztiak ezabatu dira.');
    } else {
      console.log('Ez zegoen produkturik datu-basean.');
    }

    console.log('Jatorrizko produktuak berreskuratzen hasita...');
    const productsToAdd = [
      { file: 'txakur_elikadura.png', name: 'Txakur Elikadura', description: 'Elikadura onena zure txakurrarentzat.', price: 29.99 },
      { file: 'katu_janaria.png', name: 'Katu Janaria', description: 'Kalitatezko janaria zure katua osasuntsu mantentzeko.', price: 24.50 },
      { file: 'arrain_janaria.png', name: 'Arrain Janaria', description: 'Bitaminaz betetako janaria zure arrainentzat.', price: 9.99 },
      { file: 'txori_janaria.png', name: 'Txori Janaria', description: 'Hazi nahasketa txori basati eta domestikoentzat.', price: 12.75 },
      { file: 'Korrea.png', name: 'Korrea', description: 'Uhal sendo eta dotorea, edozein txakurrentzat.', price: 15.00 },
      { file: 'jostailua.png', name: 'Jostailua', description: 'Mastekatzeko jostailu iraunkorra, ondo pasatzeko.', price: 11.20 },
      { file: 'ohea.png', name: 'Ohea', description: 'Ohe bigun eta erosoa, zure maskotaren atsedenerako.', price: 45.00 },
      { file: 'hazkagailua.png', name: 'Hazkagailua', description: 'Katuentzako hazkagailua, altzariak babesteko.', price: 35.50 },
      { file: 'pezera.png', name: 'Pezera', description: 'Beirazko pezera modernoa, iragazkiarekin.', price: 89.90 },
    ];

    for (const product of productsToAdd) {
        const imageUrl = `/images/${product.file}`;
        await addDoc(collection(db, 'produktuak'), {
          izena: product.name,
          deskribapena: product.description,
          prezioa: product.price,
          irudi_urla: imageUrl
        });
        console.log(`'${product.name}' produktua gehitu da datu-basean.`);
    }

    console.log('\nJatorrizko produktuak behar bezala berreskuratu dira!');
    console.log('Dena prest dago. Mesedez, egiaztatu aplikazioa.');

  } catch (error) {
    console.error('Errore larria gertatu da datu-basea berreskuratzean:', error);
  }
}

restoreDatabase();
