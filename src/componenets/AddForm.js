import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';


const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);


    const [newEmployee, setNewEmployee] = useState({
        name: "", address: "", openingHour: "", closingHour: ""
    })

    const { name, address, openingHour, closingHour } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, address, openingHour, closingHour)
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={2}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="time"
                    placeholder="Opening Hour *"
                    name="openingHour"
                    value={openingHour}
                    onChange={e => onInputChange(e)}
                    required
                />

            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="time"
                    placeholder="Closing Hour"
                    name="closingHour"
                    value={closingHour}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Button variant="success" type="submit" className='btn-mystyle' block>
                Save
            </Button>
        </Form>
    )
}

export default AddForm;