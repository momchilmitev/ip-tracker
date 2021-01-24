import "./App.scss";
import Form from "../Form/Form";
import Details from "../Details/Details";
import Map from "../Map/Map";
import useLocation from "../../hooks/useLocation";

function App() {
  const [ipInfo, getLocation] = useLocation("");

  return (
    <div className="app">
      <h1 className="app__title">IP Address Tracker</h1>
      <Form onFormSubmit={getLocation} />
      <Details ipInfo={ipInfo} />
      <Map lat={ipInfo.lat} lng={ipInfo.lng} />
    </div>
  );
}

export default App;
