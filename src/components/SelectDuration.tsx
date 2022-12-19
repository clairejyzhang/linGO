import BackArrow from "../assets/choose-a-language/BackArrow";
import './SelectDuration.css'
import { useNavigate } from 'react-router-dom';

export default function SelectDuration(props: SelectDurationProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative bg-white w-[360px] h-[800px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div
        className="absolute border-solid border text-left font-medium w-[319px] h-[175px] left-[26px] top-[75px] border-[rgba(234,236,237,1)] rounded-[15px]"
      >
        <div>
          <div className="absolute left-px top-px right-0 h-[52px]">
            <div>
              <div
                className="h-0 -left-px right-0 absolute top-[43px] outline outline-[1.5px] outline-[rgba(234,236,237,1)] w-[319.0015563964844px]"
               />
            </div>
            <div>
              <div
                className="w-80 h-5 absolute flex items-start left-[17px] top-[11px] gap-[58px]"
              >
                <p
                  className="h-5 text-base leading-5 m-0 w-[173px] text-[rgba(45,65,76,1)]"
                >
                  Casual
                </p>
                <p
                  className="text-base leading-5 m-0 h-[17px] w-[89px] text-[rgba(69,81,84,1)]"
                >
                  5 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[rgba(78,144,242,1)]">
          <div className="inset-x-0 absolute top-11 h-[52px]">
            <div>
              <div
                className="absolute top-0 flex flex-col items-end w-[321.0015563964844px] h-[43px] left-[-3px]"
              >
                <div>
                  <div
                    className="w-[321px] h-[43px] bg-[rgba(203,224,255,1)]"
                   />
                </div>
                <div>
                  <div
                    className="h-0 w-[319px] outline outline-[1.5px] outline-[rgba(234,236,237,1)]"
                   />
                </div>
              </div>
            </div>
            <div>
              <div
                className="h-5 absolute flex items-start w-[316px] left-[17px] top-[11px] gap-[54px]"
              >
                <p className="h-5 text-base leading-5 m-0 w-[173px]">
                  Regular
                </p>
                <p className="text-base leading-5 m-0 h-[17px] w-[89px]">
                  10 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 right-px h-[52px] top-[87px]">
            <div>
              <div
                className="h-0 -left-px right-0 absolute top-[43px] outline outline-[1.5px] outline-[rgba(234,236,237,1)] w-[319.0015563964844px]"
               />
            </div>
            <div>
              <div
                className="h-5 absolute flex items-start w-[316px] left-[17px] top-[11px] gap-[54px]"
              >
                <p
                  className="h-5 text-base leading-5 m-0 w-[173px] text-[rgba(45,65,76,1)]"
                >
                  Serious
                </p>
                <p
                  className="text-base leading-5 m-0 h-[17px] w-[89px] text-[rgba(69,81,84,1)]"
                >
                  15 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute -left-px w-[318px] h-[52px] top-[131px]">
            <div>
              <div
                className="h-5 absolute flex items-start w-[316px] left-[17px] top-[11px] gap-[54px]"
              >
                <p
                  className="h-5 text-base leading-5 m-0 w-[173px] text-[rgba(45,65,76,1)]"
                >
                  Intense
                </p>
                <p
                  className="text-base leading-5 m-0 h-[17px] w-[89px] text-[rgba(69,81,84,1)]"
                >
                  20 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={()=>navigate("/ar-find-item")}
        className="h-11 absolute left-10 text-white text-center font-medium top-[720px] right-[41px]"
      >
        <div
          className="inset-0 h-11 absolute flex justify-center items-center w-[279px] bg-[rgba(78,144,242,1)] rounded-[40px]"
        >
          <p className="text-base leading-7 m-0">CONTINUE</p>
        </div>
      </div>
      <BackArrow />
      <p
        className="h-8 absolute text-xl font-semibold leading-5 text-center inline m-0 w-[205px] left-[77px] top-[30px] right-[78px] text-[rgba(78,144,242,1)]"
      >
        Pick a goal
      </p>
    </div>
  );
}

SelectDuration.defaultProps = {
  style: {},
};

interface SelectDurationProps {
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
