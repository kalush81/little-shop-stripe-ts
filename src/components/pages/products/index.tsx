import { useEffect, useState } from "react";
import useFirebaseData from "../../../hooks/useFirebaseData";

type Prod = {
  name: string;
  description: string;
  image: string;
};

interface ProductsProps {
  collection: string;
}
export default function Products({ collection }: ProductsProps) {
  const { getAllProducts, loading } = useFirebaseData(collection);
  const [products, setProducts] = useState<Prod[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        if (data) {
          return setProducts(data as Prod[]);
        }
      })
      .catch((err) => console.error(err));
  }, [getAllProducts]);

  if (loading) return <>loading..</>;
  
  return (
    <>
      <h1>All products</h1>
      <ul>
        {products.map((p) => (
          <img style={{ width: "200px" }} src={p.image} alt={p.name} />
        ))}
      </ul>
    </>
  );
}
