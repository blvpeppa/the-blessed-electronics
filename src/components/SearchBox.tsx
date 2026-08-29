
import React, { useState } from "react";
import { useRouter } from "@/compat/navigation";
import Image from "@/compat/NextImage";
import InputGroup from "@/components/ui/input-group";
import { useLanguage } from "@/components/i18n";

export default function SearchBox() {
  const router = useRouter();
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); router.push(`/shop${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ""}`); }} className="flex-1 max-w-[430px]">
      <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-5">
        <InputGroup.Text><Image priority src="/icons/search.svg" height={20} width={20} alt="search" className="min-w-5 min-h-5" /></InputGroup.Text>
        <InputGroup.Input value={query} onChange={(e) => setQuery(e.target.value)} type="search" name="search" placeholder={t("search.placeholder")} className="bg-transparent placeholder:text-black/40" />
      </InputGroup>
    </form>
  );
}
