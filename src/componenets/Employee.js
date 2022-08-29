import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    useEffect(() => {
        handleClose();
    }, [employee])


    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.address}</td>
            <td>{employee.openingHour}</td>
            <td>{employee.closingHour}</td>
            <td>
                <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title >
                        Edit Location
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* theEmployee is props */}
                    <EditForm theEmployee={employee} />
                </Modal.Body>
            </Modal>

        </>

    )
}

export default Employee;