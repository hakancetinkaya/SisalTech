import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [title, SetName] = useState(employee.title);
  const [description, SetAddress] = useState(employee.description);
  const [openingHour, SetOpeningHour] = useState(employee.openingHour);
  const [closingHour, SetClosingHour] = useState(employee.closingHour);

  const updatedEmployee = { id, title, description, openingHour, closingHour };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="title"
          value={title}
          onChange={(e) => SetName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          name="description"
          value={description}
          onChange={(e) => SetAddress(e.target.value)}
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="time"
          placeholder="Opening Hour *"
          name="openingHour"
          value={openingHour}
          onChange={(e) => SetOpeningHour(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="time"
          placeholder="Closing Hour"
          name="closingHour"
          value={closingHour}
          onChange={(e) => SetClosingHour(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" className="btn-mystyle" block>
        Save
      </Button>
    </Form>
  );
};

export default EditForm;
