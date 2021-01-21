import "./App.scss";
import Form from "../Form/Form";
import Details from "../Details/Details";
import Map from "../Map/Map";

function App() {
  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <Form />
      <Details />
      <Map />
    </div>
  );
}

export default App;
