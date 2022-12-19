import ProgressAbr from "../assets/find-item/ProgressAbr";
import Vector from "../assets/find-item/Vector";
import Vector1 from "../assets/find-item/Vector1";
import Vector2 from "../assets/find-item/Vector2";
import Vector3 from "../assets/find-item/Vector3";
import IconsaxLinearAdd from "../assets/find-item/IconsaxLinearAdd";
import IconLightbulb from "../assets/find-item/IconLightbulb";
import { useNavigate } from 'react-router-dom';

import './ARFindItem.css'

export default function ARFindItem(props: ARFindItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/f67be37b3073e03509dc1e14bea49a84020e80df.webp)_center_/_cover] relative text-black font-normal w-[360px] h-[800px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <ProgressAbr />
      <Vector />
      <Vector1 />
      <Vector2 />
      <Vector3 />
      <IconsaxLinearAdd />
      <div
        className="absolute text-left left-[9.17%] right-[9.17%] top-[16.88%] bottom-[74%]"
      >
        <div
          className="[backdrop-filter:blur(4px)] inset-x-0 top-0 absolute h-[66px] bg-[rgba(255,255,255,0.6)] rounded-[5px]"
         />
        <p
          className="h-16 left-3 absolute text-base inline m-0 w-[221.48px] top-[9px] tracking-[-0.16px] leading-[normal]"
        >
          Scan the item: 土豆
        </p>
        <IconLightbulb />
      </div>
      <div
        onClick={()=>navigate("/ar-listen")}

        className="absolute text-center left-[9.17%] right-[9.17%] top-[77%] bottom-[18.38%]"
      >
        <div
          className="[backdrop-filter:blur(4px)] inset-0 absolute bg-[rgba(255,255,255,0.6)] rounded-[5px]"
         />
        <p
          className="h-6 bottom-1.5 absolute text-base inline m-0 w-[277.31px] left-[8.99px] top-[7px] tracking-[-0.16px] leading-[normal]"
        >
          Check
        </p>
      </div>
    </div>
  );
}

ARFindItem.defaultProps = {
  style: {},
};

interface ARFindItemProps {
  style: Object;
}

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
