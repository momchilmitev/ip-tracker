import "./Details.scss";

const Details = () => {
  return (
    <section className="details">
      <div className="detail">
        <p className="detail__name">IP ADDRESS</p>
        <p className="detail__data">192.212.174.101</p>
      </div>
      <div className="detail">
        <p className="detail__name">LOCATION</p>
        <p className="detail__data">Brooklyn, NY 10001</p>
      </div>
      <div className="detail">
        <p className="detail__name">TIMEZONE</p>
        <p className="detail__data">UTC -05:00</p>
      </div>
      <div className="detail">
        <p className="detail__name">ISP</p>
        <p className="detail__data">SpaceX Starlink</p>
      </div>
    </section>
  );
};

export default Details;
