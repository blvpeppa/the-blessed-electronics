import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";
import "@/styles/vite.css";

import Providers from "@/app/providers";
import { persistor } from "@/lib/store";

import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/SplashScreen";

import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Cart from "@/pages/Cart";
import Product from "@/pages/Product";

function App() {
  return (
    <BrowserRouter>
      <SplashScreen />

      <TopBanner />
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:slug" element={<Product />} />
        <Route path="/shop/product/:slug/*" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Providers>
  </React.StrictMode>
);
