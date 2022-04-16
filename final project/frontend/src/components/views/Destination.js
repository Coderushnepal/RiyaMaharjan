import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as destinationService from '../../services/destination'
import '../../assests/css/destination.css'

function Destination(props) {
  const [destination, setDestination] = useState({});
  console.log(props)
  const { id } = props.match.params;

  useEffect(() => {
    const fetchDestinations = async () => {
      const destination = await destinationService.fetchDestinationsById(id);

      setDestination(destination)
      console.log(destination);
    }
    fetchDestinations();
  }, [])


  return (
    <div id="destination" >
      <div className='title'>
        <h1> {destination.destinationName}</h1>
      </div>
       
        <div>
          <img src={destination.images?.[1]} />
        </div>
          <p>{destination.description}</p>
    </div>
  )

}

export default Destination;
