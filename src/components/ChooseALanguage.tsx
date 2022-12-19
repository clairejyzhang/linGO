import BackArrow from "../assets/choose-a-language/BackArrow";
import ForwardArrow from "../assets/choose-a-language/ForwardArrow";
import './ChooseALanguage.css'
import { useNavigate } from 'react-router-dom';


export default function ChooseALanguage(props: ChooseALanguageProps) {
    const navigate = useNavigate();

    return (
    <div
      className={`relative w-[360px] h-[800px] bg-[rgba(78,144,242,1)] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <BackArrow />
      <p
        className="h-8 absolute text-xl font-semibold leading-5 text-center text-white inline m-0 w-[205px] left-[77px] top-[30px] right-[78px]"
      >
        Choose a language
      </p>
      <div
        className="absolute text-left font-medium h-[676px] left-[18px] top-[74px] right-[19px] text-[rgba(78,144,242,1)]"
      >
        <div>
          <div
            className="-top-px absolute bg-white w-[319px] h-[672px] left-[3px] rounded-[15px]"
           />
        </div>
        <div>
          <div className="absolute -top-px w-[319px] h-[51px] left-[3px]"
               onClick={()=>navigate("/map")}>
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[173px]">
                Mandarin
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[50px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Hindi
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[101px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Spanish
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[152px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                French
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[203px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Arabic
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[254px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Bengali
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[305px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Russian
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[356px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Portuguese
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[407px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Indonesian
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[458px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Urdu
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[509px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                Japanese
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[556px]">
            <ForwardArrow />
            <div
              className="absolute inline-flex flex-col items-start w-[277.5px] h-[34px] left-[19px] top-[17px] gap-[17px]"
            >
              <p className="text-xl leading-5 m-0 h-[17px] w-[252px]">
                German
              </p>
              <div
                className="w-full h-0 outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
               />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-1 w-[319px] h-[51px] top-[607px]">
            <p
              className="absolute text-xl leading-5 m-0 top-[17px] bottom-[17px] h-[17px] w-[252px] left-[19px]"
            >
              more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ChooseALanguage.defaultProps = {
  style: {},
};

interface ChooseALanguageProps {
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
