import IconPlus from "../assets/chat/IconPlus";
import IconCameraOutline from "../assets/chat/IconCameraOutline";
import IconImageOutline from "../assets/chat/IconImageOutline";
import IconMic from "../assets/chat/IconMic";
import IconLightbulb from "../assets/chat/IconLightbulb";
import BackArrow from "../assets/chat/BackArrow";
import './Chat.css'
import { useNavigate } from 'react-router-dom';


export default function Chat(props: ChatProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-[360px] h-[800px] bg-[rgba(234,236,237,1)] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div
        className="inset-x-0 absolute bottom-0 text-left font-medium top-[94.38%] text-[rgba(78,144,242,1)]"
      >
        <div className="inset-0 absolute bg-white" />
        <div
          className="h-6 absolute left-2 inline-flex items-start w-[82px] top-[11px] overflow-clip gap-[7px]"
        >
          <div
            className="h-6 flex items-start w-[51px] overflow-clip gap-[3px]"
          >
            <IconPlus />
            <IconCameraOutline />
          </div>
          <IconImageOutline />
        </div>
        <div
          className="absolute left-[26.94%] right-[12.22%] top-[24.44%] bottom-[22.22%] bg-[rgba(78,144,242,1)] rounded-[40px]"
         />
        <IconMic />
        <div
          className="absolute bg-white border-solid border-2 left-[90%] right-[3.33%] top-[24.44%] bottom-[22.22%] border-[rgba(78,144,242,1)] rounded-[40px]"
         />
        <p
          className="h-3 bottom-4 absolute text-xs leading-5 inline m-0 w-[17px] left-[328px] top-[17px]"
          id='aa'
        >
          Aa
        </p>
      </div>
      <div
        className="absolute text-left font-medium left-[3.89%] right-[4.17%] top-[83.88%] bottom-[8%] text-[rgba(147,147,147,1)]"
      >
        <div className="inset-0 absolute bg-white rounded-[10px]" />
        <p
          className="left-3.5 absolute text-xs leading-5 inline m-0 h-[27px] w-[249px] top-[18px]"
          id='not-sure'
        >
          Not sure what to say? Try:
          <br />
          “Hello! What’s your favorite movie?”
        </p>
        <div onClick={()=>navigate("/chat-hint")}>
        <IconLightbulb />
        </div>
      </div>
      <div
        className="inset-x-0 absolute top-0 text-white text-center font-semibold h-[79px]"
      >
        <div className="inset-0 absolute bg-[rgba(78,144,242,1)]" />
        <BackArrow />
        <p
          className="h-8 absolute text-xl leading-5 inline m-0 w-[205px] left-[77px] top-[30px] right-[78px]"
        >
          Millie
        </p>
      </div>
    </div>
  );
}

Chat.defaultProps = {
  style: {},
};

interface ChatProps {
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
