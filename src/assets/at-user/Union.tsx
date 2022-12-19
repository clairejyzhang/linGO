export default function Union(props: UnionProps) {
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
          d="M 10.25 0 H 9.75 V 9.75 H 0 V 10.25 H 9.75 V 20 H 10.25 V 10.25 H 20 V 9.75 H 10.25 V 0 Z"
          fill="#3668A8"
          fillOpacity="0.2"
         />
      </svg>
    </div>
  );
}

Union.defaultProps = {};

interface UnionProps {}

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
