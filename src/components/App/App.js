import "./App.scss";
import Form from "../Form/Form";
import Details from "../Details/Details";
import Map from "../Map/Map";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">IP Address Tracker</h1>
      <Form />
      <Details />
      <Map />
    </div>
  );
}

export default App;
