export default function IconImageOutline(props: IconImageOutlineProps) {
  return (
    <div className="w-6 h-6">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 18 3 H 6 C 5.204 3 4.441 3.316 3.879 3.879 C 3.316 4.441 3 5.204 3 6 V 18 C 3 18.796 3.316 19.559 3.879 20.121 C 4.441 20.684 5.204 21 6 21 H 18 C 18.796 21 19.559 20.684 20.121 20.121 C 20.684 19.559 21 18.796 21 18 V 6 C 21 5.204 20.684 4.441 20.121 3.879 C 19.559 3.316 18.796 3 18 3 Z M 6 5 H 18 C 18.265 5 18.52 5.105 18.707 5.293 C 18.895 5.48 19 5.735 19 6 V 14.36 L 15.8 11.63 C 15.304 11.222 14.682 10.999 14.04 10.999 C 13.398 10.999 12.776 11.222 12.28 11.63 L 5 17.7 V 6 C 5 5.735 5.105 5.48 5.293 5.293 C 5.48 5.105 5.735 5 6 5 V 5 Z M 18 19 H 6.56 L 13.56 13.16 C 13.695 13.06 13.858 13.006 14.025 13.006 C 14.193 13.006 14.356 13.06 14.49 13.16 L 19 17 V 18 C 19 18.265 18.895 18.52 18.707 18.707 C 18.52 18.895 18.265 19 18 19 Z"
          fill="#4E90F2"
         />
        <path
          d="M 8 10 C 8.828 10 9.5 9.328 9.5 8.5 C 9.5 7.672 8.828 7 8 7 C 7.172 7 6.5 7.672 6.5 8.5 C 6.5 9.328 7.172 10 8 10 Z"
          fill="#4E90F2"
         />
      </svg>
    </div>
  );
}

IconImageOutline.defaultProps = {};

interface IconImageOutlineProps {}

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
