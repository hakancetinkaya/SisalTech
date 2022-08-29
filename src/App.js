import EmployeeList from './componenets/EmployeeList';
import EmployeeContextProvider from './context/EmployeeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';

function App() {
  return (
    
    <div className="App">
      <Header />            
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;