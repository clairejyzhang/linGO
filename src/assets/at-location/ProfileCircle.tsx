export default function ProfileCircle(props: ProfileCircleProps) {
  return (
    <div className="left-2 absolute w-[70px] h-[71px] top-[17.5px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 70 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M 70 35.5 C 70 54.83 54.33 70.5 35 70.5 C 15.67 70.5 0 54.83 0 35.5 C 0 16.17 15.67 0.5 35 0.5 C 54.33 0.5 70 16.17 70 35.5 Z"
          fill="url(#pattern-171:427-0)"
         />
        <defs>
          <pattern
            id="pattern-171:427-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_171_427"
              transform="translate(-0.25) scale(0.00125)"
             />
          </pattern>
          <image
            id="image0_171_427"
            width="1200"
            height="800"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/fa8ba711-8906-408f-9d64-87ce6f16fac5.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

ProfileCircle.defaultProps = {};

interface ProfileCircleProps {}

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
