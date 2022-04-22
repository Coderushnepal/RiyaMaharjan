import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../../actions/destinations";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useHistory } from "react-router-dom";
import configure from "../../config";
import { cleanObj } from "../../services/helper";
import { AiFillHome } from "react-icons/ai";

function DestinationList() {
  const dispatch = useDispatch();
  const destinations = useSelector((store) => store.destination.destinations);
  const isLoading = useSelector((store) => store.destination.isLoading);

  const history = useHistory();

  const Token = localStorage.getItem("Token");
  const [values, setValues] = useState({
    destinationName: "",
    price: "",
    description: "",
    images: [],
    id: "",
  });
  const { destinationName, price, description, images, id } = values;

  function jumpToHome(e) {
    history.push("/");
  }

  function fetchUser() {
    const user = JSON.parse(localStorage.getItem("User"));
    // console.log(user);
    if (!user || !user?.isAdmin) {
      history.replace("/login");
      cogoToast.warn("You are not authorized");
    }
  }

  function onUpdate(e) {
    e.preventDefault();
    // console.log(id);
    let destinationData = {
      destinationName: destinationName,
      price: price,
      description: description,
    };
    destinationData = cleanObj(destinationData);

    const url = `${configure.apiUrl}${configure.endpoints.destinations}/${id}`;

    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },
    };

    // console.log(destinationData);
    axios
      .put(url, destinationData, config)
      .then((response) => {
        const { data } = response;
        // console.log(data);

        // console.log(destinationData);
        if (response.status === 200) {
          cogoToast.success("Updated record Successfully");
          history.push("/updatedestination");
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log(response.data);
        cogoToast.error(response.data.message);
      });
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    dispatch(fetchDestinations);
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="recommend modify">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="add-destination">
        <div className="title">
          <h1> Update Destination {destinationName}</h1>
          <form onSubmit={onUpdate} id="update">
            <fieldset>
              <legend>Destination Details:</legend>
              {/* {console.log(id)} */}
              <div>
                <input
                  type="text"
                  className="mainLoginInput"
                  placeholder="Destination Name"
                  onChange={handleChange}
                  value={destinationName}
                  name="destinationName"
                />
              </div>

              <div>
                <input
                  type="number"
                  className="mainLoginInput"
                  placeholder="Price"
                  onChange={(e) => handleChange(e)}
                  value={price}
                  name="price"
                />
              </div>

              <div>
                <textarea
                  className="mainLoginInput"
                  placeholder="Description"
                  onChange={handleChange}
                  value={description}
                  rows="5"
                  cols="50"
                  name="description"
                />
              </div>
            </fieldset>

            <div>
              <button type="submit">Update Destination</button>
            </div>
          </form>
        </div>
      </div>

      <div className="title">
        <h1> Available Destinations</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="destinations">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination">
              <h3>{destination.destinationName}</h3>
              <img
                src={destination.images[0]}
                alt={destination.destinationName}
              />
              <span>
                <button
                  onClick={() => {
                    setValues(destination);
                  }}
                >
                  <a href="#update">Update</a>
                </button>{" "}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DestinationList;
