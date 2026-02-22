import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import StorePage from "./pages/StorePage";
import IPhonePage from "./pages/IPhonePage";
import MacPage from "./pages/MacPage";
import IPadPage from "./pages/IPadPage";
import WatchPage from "./pages/WatchPage";
import AirPodsPage from "./pages/AirPodsPage";
import TVHomePage from "./pages/TVHomePage";
import EntertainmentPage from "./pages/EntertainmentPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SupportPage from "./pages/SupportPage";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <CartProvider>
          <Toaster />
          <Sonner />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/iphone" element={<IPhonePage />} />
            <Route path="/mac" element={<MacPage />} />
            <Route path="/ipad" element={<IPadPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/airpods" element={<AirPodsPage />} />
            <Route path="/tv-home" element={<TVHomePage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
