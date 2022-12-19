import ProgressAbr from "../assets/listen/ProgressAbr";
import IconsaxLinearAdd from "../assets/listen/IconsaxLinearAdd";
import IconLightbulb from "../assets/listen/IconLightbulb";
import Union from "../assets/listen/Union";
import Group from "../assets/listen/Group";
import Union1 from "../assets/listen/Union1";
import IconMic from "../assets/listen/IconMic";
import './ARListen.css'
import { useNavigate } from 'react-router-dom';


export default function ARListen(props: ARListenProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/f67be37b3073e03509dc1e14bea49a84020e80df.webp)_center_/_cover] relative text-black font-normal w-[360px] h-[800px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <ProgressAbr />
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
          Listen and respond to the audio:
        </p>
        <IconLightbulb />
      </div>
      <div
        className="absolute left-[9.17%] right-[9.17%] top-[37%] bottom-[35.88%]"
      >
        <div className="absolute left-0 top-0 right-[48.98%] bottom-[55.76%]">
          <Union />
          <div
            className="absolute left-[36.67%] right-[36.67%] top-[22.92%] bottom-[35.42%]"
          >
            <div
              className="[background:url()_no-repeat_center_/_contain] inset-0 opacity-0 absolute"
             />
            <Group />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-[48.98%] top-[55.76%]">
          <Union1 />
          <IconMic />
        </div>
      </div>
      <div
      onClick={()=>navigate("/ar-find-text")}
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

ARListen.defaultProps = {
  style: {},
};

interface ARListenProps {
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
