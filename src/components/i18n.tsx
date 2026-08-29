
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "rw" | "fr";

const dictionaries: Record<Language, Record<string, string>> = {
  en: {
    "site.name": "The Blessed Electronics Shop",
    "site.tagline": "Phones, computers, electronics & Canal+ services in Rwanda.",
    "nav.shop": "Shop", "nav.services": "Canal+ Services", "nav.new": "New Arrivals",
    "nav.categories": "Categories", "nav.contact": "Contact",
    "search.placeholder": "Search phones, computers, accessories...",
    "banner": "Quality electronics and reliable Canal+ services — order with confidence.",
    "hero.title": "TECHNOLOGY THAT WORKS FOR YOU",
    "hero.description": "Discover smartphones, computers, TVs, audio devices, accessories and Canal+ services — carefully selected for everyday life, business and entertainment.",
    "hero.cta": "Shop Electronics", "hero.contact": "Talk to us",
    "stats.devices": "Electronics & devices", "stats.categories": "Core categories", "stats.support": "Customer support",
    "strip.phones": "SMARTPHONES", "strip.computers": "COMPUTERS", "strip.audio": "AUDIO & TV", "strip.canal": "CANAL+ SERVICES", "strip.accessories": "ACCESSORIES",
    "section.new": "NEW ARRIVALS", "section.selling": "POPULAR PICKS", "section.categories": "SHOP BY CATEGORY", "section.reviews": "OUR HAPPY CUSTOMERS",
    "view.all": "View All", "card.add": "Add to Cart", "card.ask": "Ask on WhatsApp",
    "category.phones": "Phones", "category.computers": "Computers", "category.audio": "TV & Audio", "category.canal": "Canal+ Services",
    "category.phones.desc": "Smartphones, tablets and mobile essentials.", "category.computers.desc": "Laptops and productivity machines.", "category.audio.desc": "TVs, speakers and headphones.", "category.canal.desc": "Subscriptions, decoder setup and support.",
    "service.title": "CANAL+ SERVICES", "service.subtitle": "Entertainment made simple. Choose a service and contact The Blessed Electronics Shop for availability and installation.",
    "service.subscription": "Canal+ Subscription", "service.subscription.desc": "Renew or start your Canal+ subscription.",
    "service.decoder": "Decoder & Installation", "service.decoder.desc": "Decoder supply, dish setup and installation.",
    "service.renewal": "Subscription Renewal", "service.renewal.desc": "Quick renewal assistance through WhatsApp.",
    "service.support": "Canal+ Support", "service.support.desc": "Help with setup, signal and decoder questions.",
    "filters": "Filters", "filter.categories": "Categories", "filter.price": "Price", "filter.colors": "Finish", "filter.storage": "Storage", "filter.type": "Product Type", "filter.apply": "Apply Filter",
    "shop.all": "All Electronics", "shop.showing": "Showing products", "shop.sort": "Sort by:", "shop.popular": "Most Popular", "shop.low": "Low Price", "shop.high": "High Price",
    "product.details": "Product Details", "product.reviews": "Rating & Reviews", "product.faq": "FAQs", "product.specs": "Product specifications", "product.description": "Quality-checked electronics selected for reliable performance. Contact us for availability, delivery and warranty information.",
    "choose.storage": "Choose Storage", "choose.finish": "Select Finish", "add.cart": "Add to Cart",
    "cart.title": "your cart", "cart.summary": "Order Summary", "cart.subtotal": "Subtotal", "cart.discount": "Discount", "cart.delivery": "Delivery Fee", "cart.free": "Free", "cart.total": "Total", "cart.checkout": "Order via WhatsApp", "cart.empty": "Your shopping cart is empty.", "cart.shop": "Shop",
    "footer.about": "The Blessed Electronics Shop provides quality electronics and practical Canal+ services for customers in Rwanda.", "footer.company": "Company", "footer.help": "Help", "footer.services": "Services", "footer.resources": "Resources", "footer.aboutUs": "About us", "footer.contact": "Contact us", "footer.delivery": "Delivery & installation", "footer.warranty": "Warranty & returns", "footer.privacy": "Privacy policy", "footer.phones": "Phones", "footer.computers": "Computers", "footer.canal": "Canal+ services", "footer.support": "Customer support", "footer.whatsapp": "WhatsApp us", "footer.copyright": "The Blessed Electronics Shop. All rights reserved.",
    "splash": "Welcome to The Blessed Electronics Shop", "splash.sub": "Electronics • Computers • Canal+ Services",
    "lang": "Language",
    "footer.address": "Address", "footer.phone": "Phone", "footer.hours": "Opening hours", "footer.location": "Kimisagara Market, KN 20 Ave, Kigali", "footer.open": "Monday–Saturday: Open 24 hours", "footer.closed": "Sunday: Closed"
  },
  rw: {
    "site.name": "The Blessed Electronics Shop",
    "site.tagline": "Telefoni, mudasobwa, ibikoresho bya elegitoroniki na serivisi za Canal+ mu Rwanda.",
    "nav.shop": "Gura", "nav.services": "Serivisi za Canal+", "nav.new": "Ibishya", "nav.categories": "Ibyiciro", "nav.contact": "Twandikire",
    "search.placeholder": "Shakisha telefoni, mudasobwa, accessories...",
    "banner": "Ibikoresho byiza bya elegitoroniki na serivisi zizewe za Canal+ — gura ufite icyizere.",
    "hero.title": "IKORANABUHANGA RIGUFASHA",
    "hero.description": "Shaka telefoni, mudasobwa, televiziyo, amajwi, accessories na serivisi za Canal+ — byatoranyijwe ku buzima bwa buri munsi, akazi n'imyidagaduro.",
    "hero.cta": "Reba ibikoresho", "hero.contact": "Twandikire",
    "stats.devices": "Ibikoresho", "stats.categories": "Ibyiciro by'ingenzi", "stats.support": "Ubufasha ku bakiriya",
    "strip.phones": "TELEFONI", "strip.computers": "MUDASOBWA", "strip.audio": "TV N'AMAJWI", "strip.canal": "SERIVISI ZA CANAL+", "strip.accessories": "ACCESSORIES",
    "section.new": "IBISHYA", "section.selling": "IBIKUNZWE", "section.categories": "GURA UKORESHEJE ICYICIRO", "section.reviews": "ABAKIRIYA BACU BISHIMYE",
    "view.all": "Reba byose", "card.add": "Shyira mu gitebo", "card.ask": "Baza kuri WhatsApp",
    "category.phones": "Telefoni", "category.computers": "Mudasobwa", "category.audio": "TV n'amajwi", "category.canal": "Serivisi za Canal+",
    "category.phones.desc": "Telefoni, tablets n'ibikoresho by'itumanaho.", "category.computers.desc": "Laptops n'imashini z'akazi.", "category.audio.desc": "TV, speakers na headphones.", "category.canal.desc": "Abonnement, decoder, installation n'ubufasha.",
    "service.title": "SERIVISI ZA CANAL+", "service.subtitle": "Imyidagaduro yoroshye. Hitamo serivisi hanyuma utwandikire kuri WhatsApp ku bijyanye n'ibiciro n'installation.",
    "service.subscription": "Abonnement ya Canal+", "service.subscription.desc": "Tangira cyangwa wongere abonnement ya Canal+.",
    "service.decoder": "Decoder & Installation", "service.decoder.desc": "Decoder, parabole no kuyishyiraho.",
    "service.renewal": "Kuvugurura Abonnement", "service.renewal.desc": "Dufasha kuvugurura abonnement vuba kuri WhatsApp.",
    "service.support": "Ubufasha bwa Canal+", "service.support.desc": "Ubufasha kuri installation, signal na decoder.",
    "filters": "Shakisha neza", "filter.categories": "Ibyiciro", "filter.price": "Igiciro", "filter.colors": "Finish", "filter.storage": "Ububiko", "filter.type": "Ubwoko", "filter.apply": "Koresha",
    "shop.all": "Ibikoresho byose", "shop.showing": "Ibicuruzwa", "shop.sort": "Tondeka:", "shop.popular": "Ibikunzwe", "shop.low": "Igiciro gito", "shop.high": "Igiciro kinini",
    "product.details": "Ibisobanuro", "product.reviews": "Amanota n'ibitekerezo", "product.faq": "Ibibazo bikunze kubazwa", "product.specs": "Ibiranga igicuruzwa", "product.description": "Ibikoresho byagenzuwe ubuziranenge kandi byatoranyijwe kubera imikorere yizewe. Twandikire ku buboneka, delivery na warranty.",
    "choose.storage": "Hitamo ububiko", "choose.finish": "Hitamo finish", "add.cart": "Shyira mu gitebo",
    "cart.title": "igitebo cyawe", "cart.summary": "Incamake y'itumizwa", "cart.subtotal": "Igiteranyo", "cart.discount": "Igabanyirizwa", "cart.delivery": "Delivery", "cart.free": "Ubuntu", "cart.total": "Byose", "cart.checkout": "Tuma kuri WhatsApp", "cart.empty": "Igitebo cyawe kirimo ubusa.", "cart.shop": "Gura",
    "footer.about": "The Blessed Electronics Shop itanga ibikoresho bya elegitoroniki byiza na serivisi za Canal+ ku bakiriya bo mu Rwanda.", "footer.company": "Company", "footer.help": "Ubufasha", "footer.services": "Serivisi", "footer.resources": "Ibindi", "footer.aboutUs": "Abo turi bo", "footer.contact": "Twandikire", "footer.delivery": "Delivery & installation", "footer.warranty": "Warranty & returns", "footer.privacy": "Privacy policy", "footer.phones": "Telefoni", "footer.computers": "Mudasobwa", "footer.canal": "Serivisi za Canal+", "footer.support": "Ubufasha", "footer.whatsapp": "Twandikire kuri WhatsApp", "footer.copyright": "The Blessed Electronics Shop. Uburenganzira bwose burabitswe.",
    "splash": "Murakaza neza kuri The Blessed Electronics Shop", "splash.sub": "Telefoni • Mudasobwa • Serivisi za Canal+", "lang": "Ururimi",
    "footer.address": "Aderesi", "footer.phone": "Telefoni", "footer.hours": "Amasaha yo gufungura", "footer.location": "Kimisagara Market, KN 20 Ave, Kigali", "footer.open": "Kuwa Mbere–Kuwa Gatandatu: Amasaha 24", "footer.closed": "Ku Cyumweru: Hafunze"
  },
  fr: {
    "site.name": "The Blessed Electronics Shop",
    "site.tagline": "Téléphones, ordinateurs, électronique et services Canal+ au Rwanda.",
    "nav.shop": "Boutique", "nav.services": "Services Canal+", "nav.new": "Nouveautés", "nav.categories": "Catégories", "nav.contact": "Contact",
    "search.placeholder": "Rechercher téléphones, ordinateurs, accessoires...",
    "banner": "Électronique de qualité et services Canal+ fiables — commandez en toute confiance.",
    "hero.title": "LA TECHNOLOGIE À VOTRE SERVICE",
    "hero.description": "Découvrez smartphones, ordinateurs, TV, audio, accessoires et services Canal+ — sélectionnés pour la vie quotidienne, le travail et le divertissement.",
    "hero.cta": "Voir les produits", "hero.contact": "Nous contacter",
    "stats.devices": "Appareils", "stats.categories": "Catégories clés", "stats.support": "Support client",
    "strip.phones": "SMARTPHONES", "strip.computers": "ORDINATEURS", "strip.audio": "TV & AUDIO", "strip.canal": "SERVICES CANAL+", "strip.accessories": "ACCESSOIRES",
    "section.new": "NOUVEAUTÉS", "section.selling": "PRODUITS POPULAIRES", "section.categories": "ACHETER PAR CATÉGORIE", "section.reviews": "NOS CLIENTS SATISFAITS",
    "view.all": "Tout voir", "card.add": "Ajouter au panier", "card.ask": "Demander sur WhatsApp",
    "category.phones": "Téléphones", "category.computers": "Ordinateurs", "category.audio": "TV & Audio", "category.canal": "Services Canal+",
    "category.phones.desc": "Smartphones, tablettes et essentiels mobiles.", "category.computers.desc": "Ordinateurs portables et machines de travail.", "category.audio.desc": "TV, enceintes et casques.", "category.canal.desc": "Abonnements, installation et assistance.",
    "service.title": "SERVICES CANAL+", "service.subtitle": "Le divertissement en toute simplicité. Choisissez un service et contactez The Blessed Electronics Shop pour la disponibilité et l'installation.",
    "service.subscription": "Abonnement Canal+", "service.subscription.desc": "Démarrer ou renouveler votre abonnement Canal+.",
    "service.decoder": "Décodeur & Installation", "service.decoder.desc": "Décodeur, parabole et installation.",
    "service.renewal": "Renouvellement", "service.renewal.desc": "Renouvellement rapide via WhatsApp.",
    "service.support": "Support Canal+", "service.support.desc": "Aide pour l'installation, le signal et le décodeur.",
    "filters": "Filtres", "filter.categories": "Catégories", "filter.price": "Prix", "filter.colors": "Finition", "filter.storage": "Stockage", "filter.type": "Type de produit", "filter.apply": "Appliquer",
    "shop.all": "Tous les produits", "shop.showing": "Produits affichés", "shop.sort": "Trier par :", "shop.popular": "Plus populaires", "shop.low": "Prix croissant", "shop.high": "Prix décroissant",
    "product.details": "Détails", "product.reviews": "Notes & avis", "product.faq": "FAQ", "product.specs": "Spécifications", "product.description": "Des appareils contrôlés et sélectionnés pour leur fiabilité. Contactez-nous pour la disponibilité, la livraison et la garantie.",
    "choose.storage": "Choisir le stockage", "choose.finish": "Choisir la finition", "add.cart": "Ajouter au panier",
    "cart.title": "votre panier", "cart.summary": "Résumé de commande", "cart.subtotal": "Sous-total", "cart.discount": "Remise", "cart.delivery": "Livraison", "cart.free": "Gratuite", "cart.total": "Total", "cart.checkout": "Commander sur WhatsApp", "cart.empty": "Votre panier est vide.", "cart.shop": "Boutique",
    "footer.about": "The Blessed Electronics Shop propose des appareils électroniques de qualité et des services Canal+ pratiques au Rwanda.", "footer.company": "Entreprise", "footer.help": "Aide", "footer.services": "Services", "footer.resources": "Ressources", "footer.aboutUs": "À propos", "footer.contact": "Contact", "footer.delivery": "Livraison & installation", "footer.warranty": "Garantie & retours", "footer.privacy": "Confidentialité", "footer.phones": "Téléphones", "footer.computers": "Ordinateurs", "footer.canal": "Services Canal+", "footer.support": "Support client", "footer.whatsapp": "Nous écrire sur WhatsApp", "footer.copyright": "The Blessed Electronics Shop. Tous droits réservés.",
    "splash": "Bienvenue chez The Blessed Electronics Shop", "splash.sub": "Électronique • Ordinateurs • Services Canal+", "lang": "Langue",
    "footer.address": "Adresse", "footer.phone": "Téléphone", "footer.hours": "Heures d’ouverture", "footer.location": "Kimisagara Market, KN 20 Ave, Kigali", "footer.open": "Lundi–samedi : ouvert 24h/24", "footer.closed": "Dimanche : fermé"
  }
};

const productTranslations: Record<Language, Record<string, string>> = {
  en: {
    "1":"iPhone 15 Pro 256GB","2":"Samsung Galaxy S24 Ultra","3":"HP EliteBook 840 G11","4":"MacBook Pro 14-inch",
    "5":"iPad Pro 12.9-inch","6":"Sony WH-1000XM5 Headphones","7":"Smart TV 55-inch 4K","8":"Canal+ Decoder & Kit",
    "12":"Canal+ Subscription","13":"Fast Charging Power Bank","14":"Wi-Fi Router","15":"Android Tablet 10-inch"
  },
  rw: {
    "1":"iPhone 15 Pro 256GB","2":"Samsung Galaxy S24 Ultra","3":"HP EliteBook 840 G11","4":"MacBook Pro 14-inch",
    "5":"iPad Pro 12.9-inch","6":"Sony WH-1000XM5 Headphones","7":"Smart TV 55-inch 4K","8":"Canal+ Decoder & Kit",
    "12":"Abonnement ya Canal+","13":"Power Bank yo kwishyuza vuba","14":"Wi-Fi Router","15":"Android Tablet 10-inch"
  },
  fr: {
    "1":"iPhone 15 Pro 256 Go","2":"Samsung Galaxy S24 Ultra","3":"HP EliteBook 840 G11","4":"MacBook Pro 14 pouces",
    "5":"iPad Pro 12,9 pouces","6":"Casque Sony WH-1000XM5","7":"Smart TV 55 pouces 4K","8":"Décodeur & Kit Canal+",
    "12":"Abonnement Canal+","13":"Power Bank charge rapide","14":"Routeur Wi-Fi","15":"Tablette Android 10 pouces"
  }
};

type ContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: string, fallback?: string) => string; productName: (id: number, fallback: string) => string; };

const LanguageContext = createContext<ContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("blessed-language") as Language | null;
    if (saved && ["en","rw","fr"].includes(saved)) setLanguageState(saved);
  }, []);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("blessed-language", next);
  };
  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key: string, fallback = key) => dictionaries[language][key] ?? dictionaries.en[key] ?? fallback,
    productName: (id: number, fallback: string) => productTranslations[language][String(id)] ?? productTranslations.en[String(id)] ?? fallback,
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}

export function T({ k, fallback }: { k: string; fallback?: string }) {
  const { t } = useLanguage();
  return <>{t(k, fallback)}</>;
}

export function ProductName({ id, fallback }: { id: number; fallback: string }) {
  const { productName } = useLanguage();
  return <>{productName(id, fallback)}</>;
}
