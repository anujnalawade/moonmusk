import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Moon Musk</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-smooth">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-smooth">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-smooth">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>123-456-7890</p>
              <p>info@moonmusk.com</p>
              <p>500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block hover:text-primary-foreground/80 transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/accessibility" className="block hover:text-primary-foreground/80 transition-smooth">
                Accessibility Statement
              </Link>
              <Link to="/shipping" className="block hover:text-primary-foreground/80 transition-smooth">
                Shipping Policy
              </Link>
              <Link to="/terms" className="block hover:text-primary-foreground/80 transition-smooth">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="block hover:text-primary-foreground/80 transition-smooth">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
          <p>© 2025 by Moon Musk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
