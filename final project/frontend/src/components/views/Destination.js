import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as destinationService from '../../services/destination'
import '../../assests/css/destination.css'

function Destination(props) {
  // console.log(props)
  const [isLoading, setIsLoading] = useState(false);

  // const destinations = useSelector(destinations => destinations.destination);
  // const destination = destinations.find(({ id }) => +params.id === id)

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
          <img src={destination.images} />
        </div>
          <p>{destination.description}</p>
    </div>
  )

}

export default Destination;
