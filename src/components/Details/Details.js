import "./Details.scss";

const Details = ({ ipInfo }) => {
  return (
    <section className="details">
      <div className="detail">
        <p className="detail__name">IP ADDRESS</p>
        <p className="detail__data">{ipInfo.ip}</p>
      </div>
      <div className="detail">
        <p className="detail__name">LOCATION</p>
        <p className="detail__data">{ipInfo.address}</p>
      </div>
      <div className="detail">
        <p className="detail__name">TIMEZONE</p>
        <p className="detail__data">UTC {ipInfo.timeZone}</p>
      </div>
      <div className="detail">
        <p className="detail__name">ISP</p>
        <p className="detail__data">{ipInfo.isp}</p>
      </div>
    </section>
  );
};

export default Details;
