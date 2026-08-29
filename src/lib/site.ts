export const siteConfig = {
  name: "The Blessed Electronics Shop",
  description: "The Blessed Electronics Shop at Kimisagara Market, KN 20 Ave, Kigali — electronics, appliances, materials and Canal+ services.",
  whatsappNumber: "250782898312",
  address: "23R3+6QM, Kimisagara Market, KN 20 Ave, Kigali, Rwanda",
  phone: "+250 782 898 312",
  hours: "Monday to Saturday: Open 24 hours; Sunday: Closed",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
  },
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}
