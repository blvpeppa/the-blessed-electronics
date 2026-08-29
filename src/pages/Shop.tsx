import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "@/pages/Home";
import ProductCard from "@/components/common/ProductCard";
import { T } from "@/components/i18n";
import { Link, useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

export default function ShopPage() {
  const [params] = useSearchParams();
  const searchParams = { search: params.get("search") ?? "", category: params.get("category") ?? "" };
  const allProducts = [...newArrivalsData, ...topSellingData, ...relatedProductData];
  const query = (searchParams?.search ?? "").toLowerCase().trim();
  const category = (searchParams?.category ?? "").toLowerCase();
  const categoryTerms: Record<string,string[]> = {
    phones:["iphone","samsung","phone","smartphone","tablet"],
    computers:["hp","macbook","computer","laptop"],
    audio:["headphones","tv","audio","sony"],
    canal:["canal","decoder","subscription"],
  };
  const products = allProducts.filter((product) => {
    const haystack = `${product.title} ${categoryTerms[category]?.join(" ") ?? ""}`.toLowerCase();
    return (!query || product.title.toLowerCase().includes(query)) &&
      (!category || (categoryTerms[category] ?? []).some((term) => product.title.toLowerCase().includes(term)));
  });
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between"><span className="font-bold text-black text-xl"><T k="filters" /></span><FiSliders className="text-2xl text-black/40" /></div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between"><h1 className="font-bold text-2xl md:text-[32px]"><T k="shop.all" /></h1><MobileFilters /></div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3"><T k="shop.showing" /> {products.length}</span>
                <div className="flex items-center"><T k="shop.sort" />{" "}<Select defaultValue="most-popular"><SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="most-popular"><T k="shop.popular" /></SelectItem><SelectItem value="low-price"><T k="shop.low" /></SelectItem><SelectItem value="high-price"><T k="shop.high" /></SelectItem></SelectContent></Select></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </div>
            <section className="mt-10 rounded-[30px] bg-[#F0F0F0] p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1"><h2 className="font-bold text-2xl md:text-4xl mb-3"><T k="service.title" /></h2><p className="text-black/60 text-sm md:text-base"><T k="service.subtitle" /></p></div>
                <Link to={whatsappLink("Hello The Blessed Electronics Shop, I would like information about Canal+ services.")} target="_blank" rel="noreferrer" className="bg-black text-white rounded-full px-7 py-4 inline-flex items-center justify-center gap-2 font-medium"><FaWhatsapp /><T k="hero.contact" /></Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
                {[
                  ["service.subscription","service.subscription.desc"],["service.decoder","service.decoder.desc"],["service.renewal","service.renewal.desc"],["service.support","service.support.desc"]
                ].map(([title,desc]) => <div key={title} className="bg-white rounded-[20px] p-5"><h3 className="font-bold mb-2"><T k={title} /></h3><p className="text-sm text-black/60"><T k={desc} /></p></div>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
