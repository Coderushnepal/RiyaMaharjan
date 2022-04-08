import React from 'react'
import styled from 'styled-components'
import homeImage from '../../assests/heading-image.jpg'

export default function Hero() {
    return (
        <>
         <Section id='hero'>
        <div className="background">
            <img src={homeImage} alt='backgroundImage'/>
        </div>
        <div className="content">
            <div className="title">
                <h1>Travel Nepal</h1>
                <p>Travel and find happiness within yourself. Experience holidays in Nepal and find the best time to go and the best places to visit.</p>
            </div>
            <div className="search">
                <div className="container">
                    <label htmlFor="">Where you want to go</label>
                    <input type='text' placeholder='Search your location'/>
                </div>
                <div className="container">
                    <label htmlFor="">Check-in</label>
                    <input type='date' />
                </div>
                <div className="container">
                    <label htmlFor="">Check-out</label>
                    <input type='date' />
                </div>
                <button>Book Now</button>
            </div>
        </div>
    </Section>
        </>
    );
}

const Section= styled.section`
position:relative;
margin-top: 2rem;
width:100%;
heigth:100%;
.background {
    img{
        height:70%;
        width: 100%;
        filter:brightness(60%);
        border-radius:30px;
    }
}
.content{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    z-index:3;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    .title{
        color:#ffffff;
        h1{
            font-size:3rem;
            letter-spacing:0.2rem;
        }
        p{
            text-align:center;
            padding:0 30vw;
            margin-top:0.5rem;
            font-size:1.2rem;
        }
    }
    .search{
        display:flex;
        background-color:#ffffffce;
        padding:0.5rem;
        border-radius:0.5rem;
        .container{
            display:flex;
            align-item:center;
            justify-content: center;
            flex-direction:column;
            padding: 0 1.5rem;
            label{
                font-size:1.1rem;
                color:#03045e;
                margin-bottom:0.5rem;
            }
            input{
                background-color:transparent;
                border:none;
                text-align:center;
                color:black;
                &[type="date"]{
                    padding-left:3rem;
                }
                &::placeholder{
                    color:#000000;
                }
                &:focus{
                    outline:none;
                }
            }
        }
        button{
            padding:1rem;
            cursor:pointer;
            border-radius:0.3rem;
            border:none;
            color:#ffffff;
            background-color: #4361ee;
            font-size: 1.1rem;
            text-transform: uppercase;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: #023e8a;
            }
        }
    }
}

@media screen and (min-width:280px) and (max-width:980px) {
    height: 25rem;
    .background{
        img{
            height:370px;
        }
    }
    .content{
        .title{
            h1{
                font-size:1rem; 
            }
            p{
                font-size:0.8rem;
                padding:1vw;
            }
        }
        .search{
            flex-direction: column;
            padding:0.8rem;
            .container{
                padding: 0 0.8rem;
                input[type='date']{
                    padding-left: 1rem;
                }
            }
            button{
                padding: 1rem;
                font-size:1rem;
            }
        }
    }
}
`;
