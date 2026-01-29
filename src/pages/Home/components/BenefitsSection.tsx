import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Single & Multi-Layer Jacquard Design",
      description: "Create and manage single-layer and multi-layer jacquard weave structures, including upper, lower, inter, and extended weaves with complete control."
    },
    {
      icon: Users,
      title: "Libraries, Editors & Weave Control",
      description: "Access inbuilt weave and colour libraries, along with weave and yarn editors for normal and compound weave creation."
    },
    {
      icon: TrendingUp,
      title: "Intelligent Automation & Precision",
      description: "Automatically detect and correct floats, set accurate dimensions, and apply precise scaling based on warp and weft thread densities."
    },
    {
      icon: Star,
      title: "Integrated Graphic & Image Editor",
      description: "Design jacquard pictures using a built-in graphical editor with image import, colour reduction, and advanced editing tools."
    },
        {
      icon: Clock,
      title: "Pattern Generation & Transformations",
      description: "Generate patterns automatically and apply mirror, reverse, invert, and repeat transformations for faster design iterations."
    },
    {
      icon: Users,
      title: "Visualization & Production Readiness",
      description: "Preview designs in multiple weave views, manage harness and hooks, and generate jacquard card punching outputs for production."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-peach-600">
          Benefits of REACH Jacquard
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The Best Jacquard Software that enables you create a wide range of jacqard designs easily.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-peach-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-peach-400 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;