import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as destinationService from '../../services/destination'
import styled from "styled-components";

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
    <Section id="recommend">
      <div className='title'>
        <h1> {destination.destinationName}</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={destination.images} />
          <p>{destination.description}</p>
        </div>

      )}

    </Section>
  )

}

export default Destination;

const Section = styled.section``