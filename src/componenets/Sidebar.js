import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <>
            <ul className="list sidebar-menu" >
                <li className="list-group-item">  <FontAwesomeIcon icon={faFile} size="xs" /> Partners</li>
                <li className="list-group-item"> <FontAwesomeIcon icon={faUserGroup} size="xs" /> Users</li>
                <li className="list-group-item"> <FontAwesomeIcon icon={faSearch} size="xs" />  Search</li>
            </ul>
        </>
    );

};

export default Sidebar;