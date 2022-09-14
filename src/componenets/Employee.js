import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const Employee = ({ posts }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [posts]);

  return (
    <>
      <TableRow key={posts.id}>
        <TableCell align="center">{posts.title}</TableCell>
        <TableCell align="center">
          {posts.description.length > 60
            ? posts.description.substring(0, 60) + "..."
            : posts.description}
        </TableCell>
        {/* <TableCell align="center">{posts.openingHour}</TableCell>
        <TableCell align="center">{posts.closingHour}</TableCell> */}
        <TableCell align="center">
          <Button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </Button>
          <Button
            onClick={() => deleteEmployee(posts.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </Button>
        </TableCell>
      </TableRow>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={posts} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;
