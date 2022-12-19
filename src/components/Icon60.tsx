import Subtract from "../assets/at-location/Subtract";
import Union from "../assets/at-location/Union";

export default function Icon60(props: Icon60Props) {
  return (
    <div className="w-5 h-5 absolute left-2.5 top-0 overflow-clip">
      <Subtract />
      <div
        className="absolute rounded-full border-solid left-[6.82%] right-[6.82%] top-[6.82%] bottom-[6.82%] bg-[rgba(70,129,199,0.06)] border-[0.5px] border-[rgba(40,105,191,0.04)]"
       />
      <div
        className="absolute rounded-full border-solid left-[22.73%] right-[22.73%] top-[22.73%] bottom-[22.73%] bg-[rgba(70,129,199,0.09)] border-[0.5px] border-[rgba(40,105,191,0.04)]"
       />
      <Union />
    </div>
  );
}

Icon60.defaultProps = {};

interface Icon60Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
