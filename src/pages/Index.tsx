import { ArrowRight, Shield, Scale, Code, Gavel } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section - More compact for mobile */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Gavel className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-4" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold">
                XMRT Legal Solutions
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-3">
              Premier Legal & Smart Contract Services
            </p>
            <p className="text-base md:text-lg mb-6 text-secondary">
              Bridging Traditional Law with Blockchain Technology
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Our Services <Scale className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - More compact grid for mobile */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-center mb-6 md:mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                title: "Smart Contract Audits",
                description: "Comprehensive legal review and security audits of smart contracts",
              },
              {
                icon: Scale,
                title: "Regulatory Compliance",
                description: "Ensure your blockchain projects meet legal requirements",
              },
              {
                icon: Code,
                title: "Contract Development",
                description: "Legal assistance in smart contract development and deployment",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-secondary rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-8 h-8 md:w-12 md:h-12 text-primary mb-3" />
                <h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;