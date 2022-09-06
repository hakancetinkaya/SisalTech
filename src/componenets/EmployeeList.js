import { useContext, useEffect, useState } from 'react';
import Employee from './Employee';
import { Modal, Alert } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import AddForm from './AddForm';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext)

    const [show, setShow] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSortingAsc, setIsSortingAsc] = useState(true);

    const [EmployeePerPage] = useState(5);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [employees])

    const indexOfLastPersonel = currentPage * EmployeePerPage;
    const indexOfFirstPersonel = indexOfLastPersonel - EmployeePerPage;
    const currentEmployee = employees.slice(indexOfFirstPersonel, indexOfLastPersonel);
    const totalPageNum = Math.ceil(employees.length / EmployeePerPage);

    function columnNameSortClick() {
        if (isSortingAsc) {
            employees.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else {
            employees.sort((a, b) => (a.name > b.name ? -1 : 1));
        }

        setIsSortingAsc(!isSortingAsc);
    }

    return (
        <>
            <div style={{ float: "right",    marginRight: "-27%" }} >
                <ul className="list search-menu">
                    <li className="list-group-item">
                        <input type="text" onChange={event => { setSearchTerm(event.target.value) }} class="form-control" id="search-bar" placeholder="<    Search..." style={{ borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", }} />
                    </li>
                    <li className="list-group-item">
                        <button onClick={handleShow} class="btn btn-success" data-toggle="modal"> {" "} <FontAwesomeIcon icon={faPlus} size="xs" /> New</button>
                    </li>
                </ul>
            </div>
            <Alert show={showAlert} variant="success">
                Personel List successfully updated!.
            </Alert>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th onClick={()=>columnNameSortClick()}>Name ↑↓</th>
                        <th>Address</th>
                        <th>Opening Hour</th>
                        <th>Close Hour</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployee.filter((employee) => {
                            if (searchTerm === "") {
                                return employee;
                            }
                            else if (employee.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return employee;
                            }
                        }).map((employee, key) => {
                            <div className='user' key={key}>
                                {employee.name}
                            </div>
                            return <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>

                        })
                    }
                </tbody>

            </table>
            <Pagination
                pages={totalPageNum}
                setCurrentPage={setCurrentPage}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title >
                        Add New Location
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default EmployeeList;