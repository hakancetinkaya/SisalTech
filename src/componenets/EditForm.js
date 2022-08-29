import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name,SetName]=useState(employee.name);
    const [address,SetAddress]=useState(employee.address);
    const [openingHour,SetOpeningHour]=useState(employee.openingHour);
    const [closingHour,SetClosingHour]=useState(employee.closingHour);

    const updatedEmployee={id,name,address,openingHour,closingHour}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }
    
    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=>SetName(e.target.value)}
                    required 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={(e)=>SetAddress(e.target.value)}
                    rows={3} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Opening Hour *"
                    name="openingHour"
                    value={openingHour}
                    onChange={(e)=>SetOpeningHour(e.target.value)}
                    required 
                />
            </Form.Group>
          
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Closing Hour"
                    name="closingHour"
                    value={closingHour}
                    onChange={(e)=>SetClosingHour(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" className='btn-mystyle' block>
                Save
            </Button>
        </Form>
    )
}

export default EditForm;