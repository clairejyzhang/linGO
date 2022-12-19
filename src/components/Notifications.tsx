import Icon60 from "./Icon60";
import './MapArrivedAtLocation.css'

export default function Notifications(props: NotificationsProps) {
  return (
    <div
      className={`[backdrop-filter:blur(90px)] inset-x-3 py-2.5 absolute gap-2 inline-flex flex-col items-start rounded-xl w-[336px] h-[65px] top-[17px] bg-[rgba(255,255,255,0)] font-['Roboto'] text-[rgba(255,255,255,0.7)]`}
      id='notif'
    >
      <div
        className="w-80 flex-1 relative font-medium h-[21px] overflow-clip"
      >
        <p
          className="right-4 absolute text-xs text-right lowercase inline m-0 top-[3px] tracking-[-0.16px] leading-[normal]"
        >
          now
        </p>
        <p
          className="absolute text-xs text-left uppercase inline m-0 left-[37px] top-[3px] tracking-[-0.16px] leading-[normal]"
        >
          linGO
        </p>
        <Icon60 />
      </div>
      <div
        className="px-3 w-full gap-1 flex flex-col items-start self-stretch text-left font-bold"
      >
        <p className="w-full text-sm m-0 tracking-[-0.16px] leading-[normal]">
          Arrived at: Grocery store. Click here to practice!
        </p>
      </div>
    </div>
  );
}

Notifications.defaultProps = {};

interface NotificationsProps {}

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
