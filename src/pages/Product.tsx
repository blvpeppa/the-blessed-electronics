import { useParams } from "react-router-dom";
import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "@/pages/Home";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import type { Product } from "@/types/product.types";

const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const productId = Number(slug?.split("-")[0]);

  const productData = data.find((product) => product.id === productId);

  if (!productData) {
    return (
      <main className="max-w-frame mx-auto px-4 xl:px-0 py-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Product not found
          </h1>
          <p className="text-black/60">
            The product you are looking for is unavailable.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData.title} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>

      <div className="mb-[50px] sm:mb-20">
        <ProductListSec
          title="POPULAR PICKS"
          data={relatedProductData}
        />
      </div>
    </main>
  );
}
