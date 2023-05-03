import { useState, useCallback } from "react";
import firebaseApp from "../firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

export type Prod = {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function useFirebaseData(endpoint: string) {
  const [loading, setLoading] = useState(true);

  const getAllProducts = useCallback(() => {
    return new Promise<Prod[]>(async (resolve, reject) => {
      try {
        const productsCol = collection(db, endpoint);
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
          };
        }) as Prod[];
        setLoading(false);
        resolve(productList);
      } catch (error) {
        setLoading(false);
        reject(error);
      }
    });
  }, [endpoint]);

  return { getAllProducts, loading };
};

