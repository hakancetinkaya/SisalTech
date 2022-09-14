import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      style={{
        height: 100,
      }}
    >
      <ul className="list sidebar-menu" style={{ paddingInlineStart: 0 }}>
        <li className="list-group-item" style={{ display: "table" }}>
          {" "}
          <FontAwesomeIcon icon={faFile} size="xs" /> Partners
        </li>
        <li className="list-group-item" style={{ display: "table" }}>
          {" "}
          <FontAwesomeIcon icon={faUserGroup} size="xs" /> Users
        </li>
        <li className="list-group-item" style={{ display: "table" }}>
          {" "}
          <FontAwesomeIcon icon={faSearch} size="xs" /> Search
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
