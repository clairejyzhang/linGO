import './UserPopup.css'
import { useNavigate } from 'react-router-dom';


export default function UserPopup(props: UserPopupProps) {
  const navigate = useNavigate();

  return (
    <div
    onClick={()=>navigate("/chat")}
      className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/de65a21314411f747fe6f21739e1c9994b7ac49f.webp)_center_/_cover] w-[360px] h-[800px]"
     />
  );
}

UserPopup.defaultProps = {
  style: {},
};

interface UserPopupProps {
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
