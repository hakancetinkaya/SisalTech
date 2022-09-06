
import Navigation from './Navigation';
import EmployeeList from './EmployeeList';
import EmployeeContextProvider from '../context/EmployeeContext';
const Location = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navigation />
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <h4>Locations</h4>
                </div>
            </div>
            <div className="row" style={{ paddingTop: "20px", marginRight: "60px" }}>
                <div className="col-10">
                    <EmployeeContextProvider>
                        <EmployeeList />
                    </EmployeeContextProvider>
                </div>
            </div>
        </>
    );

};

export default Location;