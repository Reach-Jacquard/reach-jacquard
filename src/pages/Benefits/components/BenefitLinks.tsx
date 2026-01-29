import { Link } from "react-router-dom";

export const benefitPoints = [
  "One layer weave structure",
  "Multi layer weave structure",
  "One layer jacquard project",
  "Multi layer jacquard project",
  "Automated and semi automated localization and removal of floatations in the jacquard weave structure",
  "Operating, setting the dimensions and visualizing the work over different types of multi layer weave structures  having  different  warp and weft  attitudes",
  "Automatic  precise setting  the  slale  of the  projects  depending  on the  densities  of the warp  and weft  threads",
  "Possibility  for  working and applying weave structures over the upper  weave,lower weave, the inter weave  between  the upper  warp  and  lower  weft  and  the  extended weave of  a  multi layer  jacquard project",
  "Built in graphical editor for jacquard pictures",
  "Built in systems for reducing the number of colours used in the jacquard picture",
  "Option for  scanning and  importing images in  the jacquard  picture,  in  its  borders and  edges",
  "256  different  weave  structures  can be  applied  to the  colours of the  jacquard picture  in  the project",
  "Image editing tools",
  "Colour Reduction,Cut,Copy,Paste,Select,Undo,Redo,Free hand, Geometrical,Rotate,Resize,Other",
  "Provision to create patterns based on your selected design automatically",
  "Provision to view reverse, mirror and invert the weaves/pattern",
  "Provision to add hooks and picks in a design",
  "Types of filters: Noise",
  "Type of weaves that can be created using weave editor present in Computer Aided Textile Designing Software (Normal weave,Compound weave)",
  "Available inbuilt libraries ( eg. Weave library,Colour library})",
  "Type of inbuilt editors (  eg. Weave editor,Yarn editor)",
  "Type of corrections performed ( eg.,Auto float correction,Manual float correction)",
  "Provision of card punching output facility",
  "Types of views available in Computer Aided Textile Designing Software ( image & weave, Upper weave, down weave, multi weave, Other)",
  "Types of designing that can be done (Fabric designing)",
  "Availability of  data bank of weave (simple weave and multi weave)",
  "Provision of creating and linking of harness",
  "Provision of preview of jacquard cards in monitor"
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-peach-400">REACH Jacqaurd</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Jacquard
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          {/* <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap">
                Read more →
          </Link> */}
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
