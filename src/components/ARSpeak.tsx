import ProgressAbr from "../assets/speak/ProgressAbr";
import IconsaxLinearAdd from "../assets/speak/IconsaxLinearAdd";
import IconLightbulb from "../assets/speak/IconLightbulb";
import IconMic from "../assets/speak/IconMic";
import './ARSpeak.css'
import { useNavigate } from 'react-router-dom';


export default function ARSpeak(props: ARSpeakProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/00802997deb40dcf25bbef85c15eb177bb18acb2.webp)_center_/_cover] relative text-black font-normal w-[360px] h-[800px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div>
        <ProgressAbr />
      </div>
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
          Say: Can I get two of these fish?
        </p>
        <IconLightbulb />
      </div>
      <div
        onClick={()=>navigate("/map-near-other-user")}
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
      <div
        className="absolute left-[29.17%] right-[29.17%] top-[40.63%] bottom-[40.63%]"
      >
        <div
          className="[backdrop-filter:blur(4px)] inset-0 absolute bg-[rgba(255,255,255,0.6)] rounded-[10px]"
         />
        <IconMic />
      </div>
    </div>
  );
}

ARSpeak.defaultProps = {
  style: {},
};

interface ARSpeakProps {
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
