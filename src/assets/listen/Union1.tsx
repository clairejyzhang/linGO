export default function Union1(props: Union1Props) {
  return (
    <div className="h-24 left-0 top-0 absolute w-[150px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 150 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 10 0 C 4.477 0 0 4.477 0 10 V 75 C 0 80.523 4.477 85 10 85 H 121.915 L 132.5 96 L 143.325 84.75 H 142.232 C 146.68 83.736 150 79.756 150 75 V 10 C 150 4.477 145.523 0 140 0 H 10 Z"
          fill="white"
          fillOpacity="0.6"
         />
      </svg>
    </div>
  );
}

Union1.defaultProps = {};

interface Union1Props {}

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
