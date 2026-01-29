const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-peach-100">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Jacquard For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Jacquard is ideal wherever complex woven Jacquard fabrics must
          be designed digitally and sent efficiently to looms.
        </p>

        {/* Woven fabric mills */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Woven fabric mills
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Mills producing Jacquard fabrics for apparel, home furnishings,
              upholstery, and technical textiles that need precise weave and
              layout control.
            </li>
            <li>
              Units wanting integrated design, simulation, and loom-file
              generation to reduce errors and sampling costs.
            </li>
          </ul>
        </div>

        {/* Home furnishings */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Home furnishings and upholstery manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies making Jacquard curtains, upholstery, mattress ticking,
              and decorative fabrics requiring rich patterns and textures.
            </li>
            <li>
              Producers needing realistic on-screen simulations to finalize
              designs with buyers before loom trials.
            </li>
          </ul>
        </div>

        {/* Terry towels */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Terry towel and bath linen manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Mills weaving Jacquard terry towels, bathrobes, and bath mats
              with logos, borders, and complex motifs.
            </li>
            <li>
              Exporters that must manage many designs and repeats efficiently
              for different buyers and markets.
            </li>
          </ul>
        </div>

        {/* Labels & accessories */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Label, tie, and accessory producers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers of woven labels, ties, scarves, and fashion
              accessories that depend on fine Jacquard detailing.
            </li>
            <li>
              Units needing accurate color, weave, and yarn control to meet
              brand-identity and quality requirements.
            </li>
          </ul>
        </div>

        {/* Design studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design studios and freelance textile designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Studios and independent designers developing Jacquard artworks,
              weaves, and colorways for multiple mills and brands.
            </li>
            <li>
              Service bureaus converting artwork into loom-ready Jacquard files
              and simulations as a specialized offering.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile institutes and training centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Textile engineering and design departments teaching Jacquard
              fabric design, weave planning, and CAD-to-loom workflows.
            </li>
            <li>
              Sector skill centres preparing technicians and designers for
              roles in Jacquard-based mills and design houses.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
