import { ArrowRight, Shield, Scale, Code } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              Smart Contract Legal Expertise
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Specialized legal solutions for blockchain technology and smart contract deployments
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Get Started <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="p-6 bg-secondary rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
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