export default function ProgressAbr(props: ProgressAbrProps) {
  return (
    <div className="h-1 absolute flex w-[302px] left-[39.5px] top-[16.5px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 302 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 263 2 H 299.503"
          stroke="#939393"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 89 2 H 125.503"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 2 2 H 38.503"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 45 2 H 81.503"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 176 2 H 212.503"
          stroke="#939393"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 133 2 H 169.503"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
         />
        <path
          d="M 220 2 H 256.503"
          stroke="#939393"
          strokeWidth="3"
          strokeLinecap="round"
         />
      </svg>
    </div>
  );
}

ProgressAbr.defaultProps = {};

interface ProgressAbrProps {}

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
