// src/services/productService.js
import { db } from '../firebase'; // Asegúrate de que tu firebase.js exporta 'db'
import { collection, getDocs } from 'firebase/firestore';

export const getProduktuak = async () => {
  try {
    const productsCollectionRef = collection(db, 'produktuak');
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Errorea produktuak lortzerakoan: ', error);
    return [];
  }
};
