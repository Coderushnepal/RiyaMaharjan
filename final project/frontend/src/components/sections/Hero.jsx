import axios from 'axios'
import React, { useEffect, useState } from 'react'
import homeImage from '../../assests/heading-image.jpg'
import { useHistory } from "react-router-dom"
import cogoToast from 'cogo-toast';
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from '../../actions/destinations';


export default function Hero() {
    const [bookstartDate,setstartDate]=useState("")
    const [bookendDate,setendDate]=useState("")
    const [userId, setuserId]=useState("")
    const [bookdestinationId, setdestinationId]=useState("")

    const Token = localStorage.getItem("Token");
    const config = {
        headers: {
          Authorization: "Bearer " + Token,
        },
      };

    const dispatch = useDispatch();
    const history = useHistory(); 
    const destinations = useSelector((store) => store.destination.destinations);

    function addBooking(e){
        e.preventDefault();
        const postBooking ={
            // bookedBy: userId,
            startDate:bookstartDate,
            endDate: bookendDate,
            destinationId: bookdestinationId
        }
  
        axios.post("http://127.0.01:1234/bookings",postBooking,config)
                .then((response)=>{
                    const {data} = response;
                    console.log(data);
                    console.log(data.message);
            
                    if (response.status===200) {
                      cogoToast.success('Booking Successfull')
                      history.push("/");
                    }
                })
                .catch((err)=>{
                    const {response} = err;
                    console.log(response.data);
                    cogoToast.error(response.data.message)
                   })
    }
    useEffect(() => {
        dispatch(fetchDestinations);
      }, []);

      console.log(destinations)
    return (
        <>
         <div id='hero'>
        <div className="background">
            <img src={homeImage} alt='backgroundImage'/>
        </div>
        <div className="content">
            <div className="title">
                <h1>Travel Nepal</h1>
                <p>Travel and find happiness within yourself. Experience holidays in Nepal and find the best time to go and the best places to visit.</p>
            </div>
            <div className="search">

                <div className="formItem">
                    <label htmlFor="">Where you want to go</label>
                   
                    <select name='bookdestinationId' onChange={(e)=>{
                        // console.log(e.target.value) 
                        if(e.target.value){
                            setdestinationId(e.target.value)
                        }
                    }} >
                        <option value=" " >Choose Destinations </option>
                        {destinations.map((destination,index)=><option key={index} value={destination.id}>{destination.destinationName}</option>)}
                    </select>
                </div>

                <div className="formItem">
                    <label htmlFor="">Check-in</label>
                    <input type='date' onChange={(e)=>{
                        
                        setstartDate(new Date(e.target.value).toISOString())
                        
                    }} />
                </div>

                <div className="formItem">
                    <label htmlFor="">Check-out</label>
                    <input type='date' onChange={(e)=>{ 
                        setendDate(new Date(e.target.value).toISOString())
     
                    }}/>
                </div>
                <button onClick={addBooking}>Book Now</button>
            </div>
        </div>
    </div>
        </>
    );
}
