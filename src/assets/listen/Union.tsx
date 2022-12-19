export default function Union(props: UnionProps) {
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
          d="M 140 0 C 145.523 0 150 4.477 150 10 V 75 C 150 80.523 145.523 85 140 85 H 28.085 L 17.5 96 L 6.675 84.75 H 7.768 C 3.32 83.736 0 79.756 0 75 V 10 C 0 4.477 4.477 0 10 0 H 140 Z"
          fill="white"
          fillOpacity="0.6"
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
