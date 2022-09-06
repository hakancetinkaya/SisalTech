import EmployeeList from './componenets/EmployeeList';
import EmployeeContextProvider from './context/EmployeeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Sidebar from './componenets/Sidebar';
import Location from './componenets/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div className="App">
      <Header />      
      <div className="row">
            <div class="col-2" style={{ paddingTop: "20px" }}>
                <Sidebar />
            </div>
            <div class="col-10">
                <Location />
            </div>
        </div>
    </div>
    </>
  );
}

export default App;