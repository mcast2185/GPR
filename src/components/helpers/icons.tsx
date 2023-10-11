import {
  faEllipsis,
  faHelmetSafety,
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faPlusSquare,
  faPhone,
  faEnvelope,
  faLock,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faEllipsis,
    faHelmetSafety,
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPlusSquare,
    faPhone,
    faEnvelope,
    faLock,
    faMapMarkedAlt    
  );
};
export default Icons;
