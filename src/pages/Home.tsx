import ProductListSec from "@/components/common/ProductListSec";
import CategoryStrip from "@/components/homepage/Brands";
import Categories from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { electronicsImages } from "@/lib/remoteImages";

const p = (id: number, title: string, srcUrl: string, price: number, percentage = 0, rating = 4.7): Product => ({
  id, title, srcUrl, gallery: [srcUrl], price, discount: { amount: 0, percentage }, rating,
});

export const newArrivalsData: Product[] = [
  p(1, "iPhone 15 Pro 256GB", electronicsImages.phone.src, 1100000, 5, 4.8),
  p(2, "Samsung Galaxy S24 Ultra", electronicsImages.phoneAlt.src, 1450000, 0, 4.8),
  p(3, "HP EliteBook 840 G11", electronicsImages.laptop.src, 1250000, 8, 4.7),
  p(4, "MacBook Pro 14-inch", electronicsImages.laptopAlt.src, 2350000, 0, 4.9),
];

export const topSellingData: Product[] = [
  p(5, "iPad Pro 12.9-inch", electronicsImages.tablet.src, 1450000, 5, 4.8),
  p(6, "Sony WH-1000XM5 Headphones", electronicsImages.headphones.src, 420000, 10, 4.7),
  p(7, "Smart TV 55-inch 4K", electronicsImages.tv.src, 780000, 0, 4.6),
  p(8, "Canal+ Decoder & Kit", electronicsImages.canal.src, 185000, 0, 4.7),
];

export const relatedProductData: Product[] = [
  p(12, "Canal+ Subscription", electronicsImages.canal.src, 0, 0, 4.8),
  p(13, "Fast Charging Power Bank", electronicsImages.power.src, 65000, 0, 4.6),
  p(14, "Wi-Fi Router", electronicsImages.router.src, 85000, 0, 4.6),
  p(15, "Android Tablet 10-inch", electronicsImages.tablet.src, 260000, 12, 4.5),
];

export const reviewsData: Review[] = [
  { id: 1, user: "Aline M.", content: '"The shop made it easy to compare devices and ask questions before buying. The service was professional."', rating: 5, date: "May 14, 2026" },
  { id: 2, user: "Eric N.", content: '"I found the phone I wanted and got quick support on WhatsApp. Everything was clear from the start."', rating: 5, date: "June 02, 2026" },
  { id: 3, user: "Jean P.", content: '"The Canal+ installation service was straightforward and the team explained everything well."', rating: 5, date: "June 18, 2026" },
  { id: 4, user: "Diane K.", content: '"A clean store with useful electronics and responsive customer support. I would recommend it."', rating: 5, date: "July 03, 2026" },
  { id: 5, user: "Patrick R.", content: '"Good selection of laptops and accessories. The ordering process was simple."', rating: 5, date: "July 21, 2026" },
  { id: 6, user: "Grace U.", content: '"I liked being able to contact the business directly before placing my order. Very convenient."', rating: 5, date: "August 05, 2026" },
];

export default function Home() {
  return (
    <>
      <Header />
      <CategoryStrip />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="NEW ARRIVALS" data={newArrivalsData} viewAllLink="/shop#new-arrivals" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="POPULAR PICKS" data={topSellingData} viewAllLink="/shop#top-selling" />
        </div>
        <div className="mb-[50px] sm:mb-20"><Categories /></div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
