export default function Group(props: GroupProps) {
  return (
    <div
      className="absolute left-[8.33%] right-[6.67%] top-[8.33%] bottom-[6.67%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 17 0.333 C 13.704 0.333 10.482 1.311 7.741 3.142 C 5 4.974 2.864 7.576 1.602 10.622 C 0.341 13.667 0.011 17.019 0.654 20.252 C 1.297 23.485 2.884 26.454 5.215 28.785 C 7.546 31.116 10.516 32.703 13.749 33.346 C 16.982 33.99 20.333 33.659 23.378 32.398 C 26.424 31.137 29.027 29 30.858 26.26 C 32.689 23.519 33.667 20.296 33.667 17 C 33.667 14.811 33.236 12.644 32.398 10.622 C 31.561 8.6 30.333 6.763 28.785 5.215 C 27.238 3.667 25.4 2.44 23.378 1.602 C 21.356 0.764 19.189 0.333 17 0.333 V 0.333 Z M 17 30.333 C 14.363 30.333 11.785 29.551 9.593 28.086 C 7.4 26.621 5.691 24.539 4.682 22.102 C 3.673 19.666 3.409 16.985 3.923 14.399 C 4.438 11.812 5.707 9.437 7.572 7.572 C 9.437 5.707 11.813 4.437 14.399 3.923 C 16.985 3.408 19.666 3.672 22.103 4.682 C 24.539 5.691 26.621 7.4 28.086 9.592 C 29.552 11.785 30.334 14.363 30.334 17 C 30.334 20.536 28.929 23.928 26.428 26.428 C 23.928 28.929 20.536 30.333 17 30.333 V 30.333 Z"
          fill="#231F20"
         />
        <path
          d="M 17.567 9.417 C 17.159 9.04 16.649 8.792 16.1 8.703 C 15.552 8.615 14.99 8.689 14.484 8.917 C 13.992 9.116 13.571 9.456 13.274 9.896 C 12.977 10.335 12.818 10.853 12.817 11.383 V 22.617 C 12.818 23.147 12.977 23.665 13.274 24.104 C 13.571 24.544 13.992 24.885 14.484 25.083 C 14.845 25.247 15.237 25.332 15.634 25.333 C 16.348 25.33 17.037 25.063 17.567 24.583 L 23.667 18.967 C 23.94 18.717 24.158 18.413 24.307 18.074 C 24.456 17.736 24.533 17.37 24.533 17 C 24.533 16.63 24.456 16.264 24.307 15.926 C 24.158 15.587 23.94 15.283 23.667 15.033 L 17.567 9.417 Z M 16.167 21.333 V 12.667 L 20.85 17 L 16.167 21.333 Z"
          fill="#231F20"
         />
        <path
          d="M 23 17 L 14.75 10.938 V 23.062 L 23 17 Z"
          fill="#231F20"
         />
      </svg>
    </div>
  );
}

Group.defaultProps = {};

interface GroupProps {}

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
