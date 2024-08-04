import { useEffect, useState } from "react";

import productsApi from "apis/products";
import Header from "components/commons/Header";
import PageLoader from "components/commons/PageLoader";

import ProductListItem from "./productListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const { products } = await productsApi.fetch();
      setProducts(products);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header shouldShowBackButton={false} title="Smile Cart" />
      <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductListItem key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
};
//    (
// <div className="flex flex-col">
//     <div className="m-2">
//       <Typography className="mx-6 mb-2 mt-6" style="h1" weight="semibold">
//         Smile Cart
//       </Typography>
//       <hr className="neeto-ui-bg-black h-1" />
//     </div>
//     <Typography className="mx-auto" style="h2">
//       Home
//     </Typography>
//   </div>
// );

export default ProductList;

// ProductList.jsx
