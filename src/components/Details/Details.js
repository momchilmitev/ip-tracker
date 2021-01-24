import "./Details.scss";
import Spinner from "../Spinner/Spinner";

const Details = ({ ipInfo }) => {
  return (
    <section className="details">
      <div className="detail">
        <p className="detail__name">IP ADDRESS</p>
        <p className="detail__data">{ipInfo.ip ? ipInfo.ip : <Spinner />}</p>
      </div>
      <div className="detail">
        <p className="detail__name">LOCATION</p>
        <p className="detail__data">
          {ipInfo.address ? ipInfo.address : <Spinner />}
        </p>
      </div>
      <div className="detail">
        <p className="detail__name">TIMEZONE</p>
        <p className="detail__data">
          UTC {ipInfo.timeZone ? ipInfo.timeZone : <Spinner />}
        </p>
      </div>
      <div className="detail">
        <p className="detail__name">ISP</p>
        <p className="detail__data">{ipInfo.isp ? ipInfo.isp : <Spinner />}</p>
      </div>
    </section>
  );
};

export default Details;
