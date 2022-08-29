import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas Hardy', address: '89 Chiaroscuro Rd, Portland, USA', openingHour: '12:30', closingHour: '13:30' },
        { id: uuidv4(), name: 'Dominique Perrier', address: 'Obere Str. 57, Berlin, Germany', openingHour: '14:30', closingHour: '15:30' },
        { id: uuidv4(), name: 'Maria Anders', address: '25, rue Lauriston, Paris, France', openingHour: '10:30', closingHour: '13:10' },
        { id: uuidv4(), name: 'Fran Wilson', address: 'C/ Araquil, 67, Madrid, Spain', openingHour: '20:30', closingHour: '23:00' },
        { id: uuidv4(), name: 'Martin Blank', address: 'Via Monte Bianco 34, Turin, Italy', openingHour: '16:30', closingHour: '22:40' },
        { id: uuidv4(), name: 'Hakan CTNKY', address: '89 Chiaroscuro Rd, İstanbul, Turkey', openingHour: '12:30', closingHour: '13:30' },
        { id: uuidv4(), name: 'John Perrier', address: 'Obere Str. 57, Moscow, Russia', openingHour: '14:30', closingHour: '15:30' }
    ])
   
    const addEmployee = (name, address, openingHour, closingHour) => {
        setEmployees([...employees, { id: uuidv4(), name, address, openingHour, closingHour }])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(x => x.id !== id))
    }

    const updateEmployee=(id,updatedValue)=>{
        setEmployees(employees.map((x)=>x.id===id ? updatedValue:x))

    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee,deleteEmployee,updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;