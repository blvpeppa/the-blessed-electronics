import React from "react";

const specsData = [
  ["Product category","Electronics / Canal+ service"],
  ["Condition","Quality checked"],
  ["Availability","Contact the shop"],
  ["Delivery","Rwanda delivery available"],
  ["Support","WhatsApp customer support"],
];

const ProductDetails = () => <>{specsData.map(([label,value]) => <div className="grid grid-cols-3" key={label}><div><p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">{label}</p></div><div className="col-span-2 py-3 lg:py-4 border-b"><p className="text-sm w-full leading-7 text-neutral-800 font-medium">{value}</p></div></div>)}</>;
export default ProductDetails;
