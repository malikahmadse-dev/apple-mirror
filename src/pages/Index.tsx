import AppleNav from "@/components/AppleNav";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import AppleFooter from "@/components/AppleFooter";
import heroPhone from "@/assets/hero-phone.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productTablet from "@/assets/product-tablet.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      
      {/* Spacer for fixed nav */}
      <div className="h-11" />

      {/* Main Hero - iPhone */}
      <HeroSection
        title="iPhone 16 Pro"
        subtitle="Hello, Apple Intelligence."
        image={heroPhone}
        dark
        large
      />

      {/* Secondary Hero - MacBook */}
      <div className="mt-section-gap">
        <HeroSection
          title="MacBook Air"
          subtitle="Lean. Mean. M4 machine."
          image={heroLaptop}
          dark
        />
      </div>

      {/* Product Grid */}
      <div className="mt-section-gap grid grid-cols-1 md:grid-cols-2 gap-section-gap">
        <ProductCard
          title="AirPods Pro"
          subtitle="Iconic. Now supersonic."
          image={productEarbuds}
        />
        <ProductCard
          title="Apple Watch"
          subtitle="The ultimate fitness partner."
          image={productWatch}
        />
        <ProductCard
          title="HomePod"
          subtitle="Room-filling sound."
          image={productTablet}
          dark
        />
        <ProductCard
          title="Trade In"
          subtitle="Get credit toward your next Apple product."
          image={productWatch}
        />
      </div>

      <div className="mt-section-gap">
        <AppleFooter />
      </div>
    </div>
  );
};

export default Index;
