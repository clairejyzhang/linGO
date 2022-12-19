export default function Place(props: PlaceProps) {
  return (
    <div className="top-20 absolute w-[30px] h-[30px] left-[248px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 25.776 10.563 C 24.464 4.788 19.426 2.188 15.001 2.188 H 14.989 C 10.576 2.188 5.526 4.775 4.214 10.55 C 2.751 17 6.701 22.463 10.276 25.9 C 11.544 27.127 13.238 27.812 15.001 27.813 C 16.701 27.813 18.401 27.175 19.714 25.9 C 23.289 22.463 27.239 17.013 25.776 10.563 Z M 15.001 16.825 C 14.484 16.825 13.972 16.723 13.495 16.525 C 13.017 16.327 12.583 16.037 12.217 15.672 C 11.852 15.306 11.561 14.872 11.364 14.394 C 11.166 13.917 11.064 13.405 11.064 12.888 C 11.064 12.37 11.166 11.858 11.364 11.381 C 11.561 10.903 11.852 10.469 12.217 10.103 C 12.583 9.738 13.017 9.448 13.495 9.25 C 13.972 9.052 14.484 8.95 15.001 8.95 C 16.046 8.95 17.047 9.365 17.786 10.103 C 18.524 10.842 18.939 11.843 18.939 12.888 C 18.939 13.932 18.524 14.933 17.786 15.672 C 17.047 16.41 16.046 16.825 15.001 16.825 V 16.825 Z"
          fill="#FF3936"
         />
      </svg>
    </div>
  );
}

Place.defaultProps = {};

interface PlaceProps {}

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
