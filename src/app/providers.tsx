import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { LanguageProvider } from "@/components/i18n";
import { store } from "@/lib/store";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageProvider>{children}</LanguageProvider>
    </Provider>
  );
}
