export const WhatDoesSection = () => {
  return (
    <section className="py-10 bg-white text-primary">
      <div className="container mx-auto px-4">
          <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-peach-600">
        What does REACH Jacquard do?
      </h2>

        
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH Jacquard is a best-in-class software solution for designing and managing Jacquard patterns in the textile industry, supporting both single-layer and multi-layer weave structures.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            It streamlines textile design with advanced tools for automated and semi-automated float correction, precise dimension control, and flexible visualization across different warp and weft orientations.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The software offers a powerful graphical editor with image scanning, color reduction, and the ability to apply up to 256 weave structures to colors for complex design creation.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Users can create, edit, and refine designs using extensive image and weave editing tools, inbuilt libraries for weaves, yarns, and colors, and automated pattern generation features.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH Jacquard supports complete production workflows, including card punching output, fabric design databanks, harness creation, and on-screen previews, enabling efficient computer-aided textile design.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;