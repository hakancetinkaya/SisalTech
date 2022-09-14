import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";
import Sidebar from "./componenets/Sidebar";
import Location from "./componenets/Location";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="row" style={{ marginRight: 0 }}>
          <div
            class="col-2"
            style={{
              paddingTop: "20px",
              borderRight: "1px solid rgba(145, 158, 171, 0.24)",
              boxShadow: "2px 0px rgba(0,0,0,.15)",
              width: "10%",
              minWidth: 120,
            }}
          >
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
