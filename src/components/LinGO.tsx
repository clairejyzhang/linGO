import "./LinGO.css"
import React from 'react';
import {useNavigate} from "react-router-dom";

export default function SignUp(props: SignUpProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white w-[360px] h-[800px] overflow-clip"
      style={props.style}
    >
      <p
        className={`absolute text-5xl font-medium text-center inline m-0 left-[120px] top-[178px] font-['Poppins'] leading-[normal] text-[rgba(38,50,56,1)]`}
      >
        linGO
      </p>
      <div
        className="absolute gap-4 inline-flex flex-col items-center h-[210px] left-[11.11%] right-[11.39%] top-[53.25%] bottom-[20.5%]"
      >
        <div
          className={`relative text-left font-normal w-[281px] h-[43px] font-['Poppins'] text-[rgba(60,60,67,0.6)]`}
        >
          <div>
            <div
              className="inset-0 absolute bg-white border-solid border border-[rgba(60,60,67,0.6)] rounded-[40px]"
             />
          </div>
          <div>
            <div
              className="absolute left-0 right-[4.66%] top-[-2.33%] bottom-[20.84%] h-[35.03703689575195px]"
            >
              <p
                className="left-4 absolute text-sm leading-6 inline m-0 h-[15px] w-[234px] top-[11px] right-[15.99px] bottom-[9.04px]"
              >
                roaree@columbia.edu
              </p>
              <div
                className="absolute bottom-1/4 left-[8.42%] right-[90.53%] top-[27.27%] overflow-clip w-[2.8px] h-[16.72px]"
              >
                <div>
                  <div
                    className="w-0.5 top-0 absolute rounded-sm bottom-[-0.28px] left-[calc(50%_-_1px_+_-0.4px)] h-[17px]"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[281px] h-[43px]">
          <div
            className="inset-0 absolute bg-white border-solid border border-[rgba(60,60,67,0.6)] rounded-[40px]"
           />
          <div
            className={`absolute right-0 text-center font-bold top-[9.26%] bottom-[9.26%] left-[4.66%] font-['Roboto'] text-[rgba(60,60,67,0.6)]`}
          >
            <div>
              <div
                className="w-11 absolute h-[45px] top-[0.02px] right-[3px]"
              >
           
              </div>
            </div>
          </div>
          <div
            className={`absolute left-0 text-left font-normal right-[12.9%] top-[2.33%] bottom-[16.28%] font-['Inter'] text-[rgba(93,93,99,1)]`}
          >
            <p
              className="inset-x-4 absolute leading-5 inline m-0 h-[15px] w-[211px] top-[11px] bottom-[9px] text-[15px]"
            >
              ••••••••••
            </p>
            <div
              className="absolute bottom-1/4 left-[8.42%] right-[90.53%] top-[27.27%] overflow-clip w-[2.56px] h-[16.7px]"
            >
              <div>
                <div
                  className="w-0.5 top-0 absolute rounded-sm bottom-[-0.3px] left-[calc(50%_-_1px_+_-0.28px)] h-[17px]"
                 />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`h-11 relative text-white text-center font-medium w-[279px] font-['Poppins']`}
        >
          <div
            className="inset-0 absolute bg-[rgba(78,144,242,1)] rounded-[40px]"
           />
          <button
            className="absolute leading-7 inline m-0 left-[calc(50%_-_43.5px_+_1px)] top-[calc(50%_-_14px_+_0px)] text-[22px]"
            onClick={()=>navigate("/map")}
          >
            Sign Up
          </button>
        </div>
        <div
          className={`relative text-left font-medium w-[137.13px] h-[21px] font-['Poppins'] text-[rgba(28,28,30,1)]`}
        >
          <p
            className="inset-y-0 right-0 absolute text-xs inline m-0 w-[114.52px] left-[16.48%] leading-[21px]"
            id="sign-up-google"
          >
            Sign up with Google
          </p>
          <div
            className="absolute left-0 w-[12.270212173461914px] right-[91.05%] top-[14.29%] bottom-[19.05%]"
          >
            <div
              className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/dd69e945674cbb9620be25c9df1fa9a00007ae6f.webp)_center_/_cover] inset-0 absolute w-[12.270212173461914px]"
             />
          </div>
        </div>
      </div>
      <div
        className={`absolute text-left w-[222px] h-[81px] left-[72px] top-[664px] overflow-clip font-['Poppins']`}
      >
        <p
          className="absolute font-medium inline m-0 w-[38.17px] left-[81%] right-[1.81%] top-[calc(50%_-_9px_+_0.5px)] text-[13px] leading-[18px] text-[rgba(78,144,242,1)]"
        >
          Log in
        </p>
        <p
          className="absolute font-normal inline m-0 w-[169.76px] left-[3.17%] right-[20.36%] top-[calc(50%_-_9px_+_0.5px)] text-[13px] leading-[18px] text-[rgba(60,60,67,0.6)]"
          id="already-have"
        >
          Already have an account?
        </p>
      </div>
      <p
        className={`left-10 absolute text-xl font-medium text-center text-black inline m-0 h-[42px] w-[276px] top-[250px] font-['Poppins'] leading-[normal]`}
      >
        learn anything anywhere
      </p>
    </div>
  );
}

SignUp.defaultProps = {
  style: {},
};

interface SignUpProps {
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
