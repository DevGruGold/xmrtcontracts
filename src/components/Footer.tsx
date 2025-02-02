import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would integrate with an email service
    // For now, we'll simulate the subscription
    if (email) {
      const mailtoLink = `mailto:xmrtsolutions@gmail.com?subject=New Subscription&body=New subscription request from: ${email}`;
      window.location.href = mailtoLink;
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-primary text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4">XMRT Contracts</h3>
            <p className="text-sm">
              Expert legal solutions for blockchain and smart contract deployments.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-secondary-dark transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-secondary-dark transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-secondary-dark transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-lg font-semibold mb-4">Subscribe</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-light p-2 hover:bg-primary-dark transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light text-center">
          <p>&copy; {new Date().getFullYear()} XMRT Contracts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;