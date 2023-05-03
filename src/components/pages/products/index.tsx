import { useEffect, useState } from "react";
import { useFirebaseData, Prod } from "../../../hooks/useFirebaseData";
import ProductCard from "../../ui/product-card";
import "./products.css";

interface ProductsProps {
  collection: string;
}
export default function Products({ collection }: ProductsProps) {
  const { getAllProducts, loading } = useFirebaseData(collection);
  const [products, setProducts] = useState<Prod[]>([]);

  console.log("all products from firestore", products)

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
<h2>Our paintings</h2>
<p>take a look at our paintings</p>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard data={p}/>
        ))}
      </div>
      </>  
    
  );
}
