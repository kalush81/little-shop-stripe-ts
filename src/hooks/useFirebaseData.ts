import { useState, useCallback } from "react";
import firebaseApp from "../firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

type Prod = {
  name: string;
  description: string;
  image: string;
}

export default function useFirebaseData(endpoint: string) {
  const [loading, setLoading] = useState(true);

  const getAllProducts = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      try {
        const productsCol = collection(db, endpoint);
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => doc.data()) as Prod[];
        setLoading(false);
        resolve(productList);
      } catch (error) {
        setLoading(false);
        reject(error);
      }
    });
  }, [endpoint]);

  // function getProductById(id) {
  //   return new Promise((resolve, reject) => {

  //   })


  return { getAllProducts, loading };
};