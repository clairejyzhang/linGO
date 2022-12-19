import Place from "../assets/at-user/Place";
import Place1 from "../assets/at-user/Place1";
import Place2 from "../assets/at-user/Place2";
import Place3 from "../assets/at-user/Place3";
import Person from "../assets/at-user/Person";
import Person1 from "../assets/at-user/Person1";
import IconsaxBoldProfile from "../assets/at-user/IconsaxBoldProfile";
import ProfileCircle from "../assets/at-user/ProfileCircle";
import IconsaxBoldMessages3 from "../assets/at-user/IconsaxBoldMessages3";
import Notifications2 from "../components/Notifications2";
import './MapNearOtherUser.css'
import { useNavigate } from 'react-router-dom';


export default function MapNearOtherUser(props: MapNearOtherUserProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white w-[360px] h-[800px] overflow-clip"
      style={props.style}
    >
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e045cf902e5235ed3a4c42c44963e51da2b4a2b7.webp)_center_/_cover] absolute left-0 top-0 w-[360px] h-[800px] overflow-clip"
      >
        <Place />
        <Place />
        <Place />
        <Place1 />
        <Place2 />
        <Place3 />
        <Person />
        <Person1 />
        <IconsaxBoldProfile />
      </div>
      <div className="absolute left-2.5 w-[127px] h-[94px] top-[695px]">
        <ProfileCircle />
        <div
          className="w-10 h-10 absolute bg-white rounded-full left-[61px] top-[41px]"
         />
        <IconsaxBoldMessages3 />
      </div>
      <div onClick={()=>navigate("/user-popup")}>
      <Notifications2 />
      </div>
    </div>
  );
}

MapNearOtherUser.defaultProps = {
  style: {},
};

interface MapNearOtherUserProps {
  style: Object;
}

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
