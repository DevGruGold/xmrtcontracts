import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-12">
            About XMRT Contracts
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6">
              XMRT Contracts is a specialized division of XMRT Lawyers, dedicated exclusively to blockchain technology and smart contract deployments. Our team combines extensive legal expertise with deep technical knowledge to provide comprehensive solutions for the blockchain industry.
            </p>
            <p className="text-lg text-gray-700">
              Founded with the vision of bridging the gap between traditional legal frameworks and emerging blockchain technologies, we've established ourselves as a trusted partner for businesses navigating the complex intersection of law and blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Specialized knowledge in blockchain law and smart contracts",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Expert lawyers and technical consultants working together",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients across multiple jurisdictions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;