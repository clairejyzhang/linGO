export default function Subtract(props: SubtractProps) {
  return (
    <div className="w-5 h-5 left-0 top-0 absolute">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 15.444 0 H 4.556 C 2.04 0 0 2.04 0 4.556 V 15.444 C 0 17.96 2.04 20 4.556 20 H 15.444 C 17.96 20 20 17.96 20 15.444 V 4.556 C 20 2.04 17.96 0 15.444 0 Z"
          fill="#DFEDF5"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 15.444 0 H 4.556 C 2.04 0 0 2.04 0 4.556 V 15.444 C 0 17.96 2.04 20 4.556 20 H 15.444 C 17.96 20 20 17.96 20 15.444 V 4.556 C 20 2.04 17.96 0 15.444 0 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Subtract.defaultProps = {};

interface SubtractProps {}

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
