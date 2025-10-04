import { Link } from "react-router-dom";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <div className="p-4">
          <h3 className="font-serif font-semibold text-lg mb-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">₹{product.price.toFixed(2)}</span>
            <Button 
              onClick={handleAddToCart}
              size="sm"
              className="transition-smooth"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
