import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import craftsmanshipImage from "@/assets/about-craftsmanship.jpg";
import { Leaf, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-brown-medium text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">About Moon Musk</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Creating high-quality, eco-friendly scented candles that bring warmth and serenity to your life
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={craftsmanshipImage} 
                  alt="Our craftsmanship" 
                  className="rounded-lg shadow-medium w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Moon Musk was born from a simple passion: to create candles that transform everyday 
                  moments into experiences of pure tranquility. We believe that a beautifully scented 
                  candle has the power to change the atmosphere of a room and uplift your mood.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our journey began in a small workshop where we experimented with natural ingredients, 
                  carefully blending essential oils and testing countless formulations. Each candle we 
                  create today reflects this commitment to quality and our dedication to sustainable practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We source only the finest materials - from premium soy wax to pure essential oils - 
                  ensuring that every candle not only smells divine but burns cleanly and evenly. Our 
                  eco-friendly approach extends from our ingredients to our packaging, making Moon Musk 
                  a choice you can feel good about.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to protecting our planet. All our candles are made with 100% natural 
                  soy wax, eco-friendly wicks, and sustainable packaging materials. We believe luxury 
                  should never come at the expense of the environment.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every candle is hand-poured with care and attention to detail. Our artisans take pride 
                  in their work, ensuring that each product meets our exacting standards. We don't rush 
                  the process - we take the time to get it right.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never compromise on quality. From sourcing the finest ingredients to rigorous testing, 
                  we ensure that every candle delivers an exceptional experience. Your satisfaction is our 
                  ultimate measure of success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Our Promise to You</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              When you choose Moon Musk, you're not just buying a candle - you're investing in moments 
              of peace, comfort, and joy. We promise to deliver products that exceed your expectations, 
              with scents that transport you to places of serenity and warmth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thank you for being part of our journey. Together, we're creating a more beautiful, 
              sustainable world, one candle at a time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
