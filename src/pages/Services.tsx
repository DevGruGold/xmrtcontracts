import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Shield, Scale, Code, FileCheck, Users, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Smart Contract Audits",
      description: "Comprehensive security and legal compliance audits for smart contracts across multiple blockchain platforms.",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Expert guidance on regulatory requirements and compliance for blockchain projects.",
    },
    {
      icon: Code,
      title: "Contract Development",
      description: "Legal oversight and assistance in smart contract development and deployment processes.",
    },
    {
      icon: FileCheck,
      title: "Documentation Review",
      description: "Thorough review of technical and legal documentation for blockchain projects.",
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Strategic legal consultation for blockchain enterprises and startups.",
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "End-to-end legal support for smart contract and DApp launches.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-montserrat font-bold text-center mb-6">
            Our Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-8 h-8 text-primary mb-2" />
                <h3 className="text-lg font-montserrat font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;