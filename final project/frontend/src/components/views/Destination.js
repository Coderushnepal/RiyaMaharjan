import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as destinationService from "../../services/destination";
import "../../assests/css/destination.css";
import { useHistory } from "react-router-dom";

function Destination(props) {
  const [destination, setDestination] = useState({});
  // console.log(props);
  const { id } = props.match.params;

  const history = useHistory();

  useEffect(() => {
    const fetchDestinations = async () => {
      const destination = await destinationService.fetchDestinationsById(id);

      setDestination(destination);
      // console.log(destination);
    };
    fetchDestinations();
  }, []);

  function jumpToBooking(e) {
    e.preventDefault();
    history.push("/destinations#hero");
  }

  return (
    <div id="destination">
      <div className="title">
        <h1> {destination.destinationName}</h1>
      </div>
      <div className="about">
        <div>
          <img src={destination.images?.[1]} />
        </div>

        <div className="destination-desc">
          <h2>About {destination.destinationName}</h2>
          <p>{destination.description}</p>
          <br />
          <div className="destination-desc-blocks">
            <h2>Price : Rs.{destination.price}</h2>
            <button onClick={jumpToBooking}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
