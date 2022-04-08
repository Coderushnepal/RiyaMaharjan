import React, { useEffect, useState } from 'react';
import styled from "styled-components";
// import * as destinationService from '../../services/destination';
import history from '../../utils/history';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import fetchDestinations from '../../actions/destinations';


function DestinationList() {
    // const [destinations, setDestinations] = useState([]);
    
    const dispatch = useDispatch();
  const destinations= useSelector(store=>store.destination.destinations);
  const isLoading=useSelector((store)=>store.destination.isLoading)
  // console.log(destinations);

  dispatch({type:''})
    useEffect(() => {
      dispatch(fetchDestinations);
    }, [dispatch]);
  
    console.log(history);

    return (
        <Section id="recommend"> 
      <div className='title'>
        <h1> Recommended Destinations</h1>
        </div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className='destinations'>
          {destinations.map((destination) => (
            <div key={destination.id} className='destination'>
              
              <img
                src={destination.images[0]}
                alt={destination.destinationName}
                
              />
              <a href={`/destinations/${destination.id}`}>
              <h3>{destination.destinationName}</h3>
              </a>
              <p>{destination.description?.slice(0, 100)}...<Link to={`/destinations/${destination.id}`}>See more</Link></p>
              <h4>Rs.{destination.price}</h4>
            </div>

          ))}
          </div>
         
        )}
      
      </Section>
    );
  }
  const Section =styled.section`
  padding:2rem 0;
  .title{
    text-align:center;   
    margin-bottom:2rem;
  }
  .destinations{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:3rem;
      padding:0 3rem;
      .destination{
          padding:1rem;
          display:flex;
          flex-direction:column;
          gap:0.5rem;
          background-color:#8338ec14;
          border-radius:1rem;
          transition:0.3s ease-in-out;
          &:hover{
              transform:translateX(0.4rem) translateY(-0.1rem);
              box-shadow:rgba(0,0,0,0.35) 0px 15px 15px;
          }
          img{
            border-radius:1rem;
            padding:0.2rem 0.4rem;
            width:100%;
          }
          
      }
  }

  @media screen and (min-width:280px) and (max-width:768px){
    .destinations {
      grid-template-columns: 1fr ;
      padding:0;
    }
  }
  `;

  export default DestinationList;
