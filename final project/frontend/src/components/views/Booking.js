import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBookings from "../../actions/bookings";
import { useHistory } from "react-router-dom";

function BookingList() {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.booking.bookings);
  const isLoading = useSelector((store) => store.destination.isLoading);

  dispatch({ type: "" });
  useEffect(() => {
    dispatch(fetchBookings);
  }, [dispatch]);

  const history = useHistory();

  return (
    <div className="recommend">
      <div className="title">
        <h1> Bookings</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="destinations">
          {bookings.map((booking, index) => (
            <>
              <div key={booking.id} className="destination">
                <div>{index + 1}</div>
                <p>
                  <b>Booking Id: </b> <span>{booking.id}</span>
                </p>
                <p>
                  <b>Booked By: </b> <span>{booking.name}</span>
                </p>
                <p>
                  <b> Destination: </b>
                  <span>{booking.destinationName}</span>
                </p>
                <p>
                  <b> Price: </b>
                  <span>{booking.price}</span>
                </p>
                <p>
                  <b> Booking Start Date: </b>
                  <span>{booking.startDate?.split("T")[0]}</span>
                </p>
                <p>
                  <b> Booking End Date: </b>
                  <span>{booking.endDate?.split("T")[0]}</span>
                </p>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingList;
