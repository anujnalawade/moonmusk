import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";
import { Minus, Plus, Facebook, Twitter, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity);
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${product.name} from Moon Musk`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Home</Link>
            {" / "}
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            {" / "}
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
                <p className="text-sm text-muted-foreground">SKU: {product.id}001</p>
              </div>

              <div className="text-3xl font-bold">₹{product.price.toFixed(2)}</div>

              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Quantity Selector */}
              <div>
                <Label className="mb-2 block font-semibold">Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              {/* Product Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="info">
                  <AccordionTrigger>Product Info</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm">
                      <p><strong>Scent:</strong> {product.scent}</p>
                      <p><strong>Burn Time:</strong> {product.burnTime}</p>
                      <p><strong>Size:</strong> {product.size}</p>
                      <p><strong>Category:</strong> {product.category}</p>
                      <p className="mt-4">
                        Hand-poured with 100% natural soy wax and premium essential oils. 
                        Each candle is carefully crafted to ensure the highest quality and longest burn time.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return">
                  <AccordionTrigger>Return & Refund Policy</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">
                      We want you to be completely satisfied with your purchase. If for any reason 
                      you're not happy with your candle, you may return it within 30 days of purchase 
                      for a full refund. The candle must be unused and in its original packaging. 
                      Please contact our customer service team to initiate a return.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping Info</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">
                      We offer free standard shipping on all orders over ₹500. Orders are typically 
                      processed within 1-2 business days and delivered within 5-7 business days. 
                      Express shipping options are available at checkout for faster delivery.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Social Share */}
              <div>
                <Separator className="mb-4" />
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Share:</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => shareOnSocial('facebook')}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => shareOnSocial('twitter')}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => shareOnSocial('whatsapp')}
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}

export default ProductDetail;
