export default function ForwardArrow(props: ForwardArrowProps) {
  return (
    <div
      className="absolute left-[89.18%] right-[6.74%] top-[26.47%] bottom-[24.51%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 13 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2 2 L 11 12.432 L 2 22.864"
          stroke="#4E90F2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

ForwardArrow.defaultProps = {};

interface ForwardArrowProps {}

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
