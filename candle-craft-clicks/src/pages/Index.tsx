import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import heroImage from "@/assets/hero-candle.jpg";
import craftsmanshipImage from "@/assets/about-craftsmanship.jpg";
import { Flame, Heart, Leaf } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Luxury scented candles" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Discover the Magic of<br />Moon Musk
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Illuminate your space with unique scents crafted from the finest natural ingredients
            </p>
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Featured Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link to="/shop">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Natural Ingredients</h3>
                <p className="text-muted-foreground">
                  Made with 100% natural soy wax and premium essential oils
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Flame className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Long Burning</h3>
                <p className="text-muted-foreground">
                  40-60 hours of clean, even burning in every candle
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Handcrafted</h3>
                <p className="text-muted-foreground">
                  Each candle is carefully hand-poured with love and attention
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={craftsmanshipImage} 
                  alt="Craftsmanship" 
                  className="rounded-lg shadow-medium w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Crafting Exquisite Fragrances
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Moon Musk, we believe that every candle should tell a story. Our artisans carefully blend premium ingredients to create scented candles that elevate daily rituals into moments of pure serenity. Each fragrance is thoughtfully designed to transform your space into a sanctuary of calm.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We are committed to using only the finest natural materials, ensuring that every candle not only smells divine but burns cleanly and sustainably. From our eco-friendly packaging to our hand-poured process, we take care at every step.
                </p>
                <Link to="/about">
                  <Button size="lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-brown-medium text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our full collection of handcrafted scented candles
            </p>
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
