import React from 'react'
import {GrAddCircle} from 'react-icons/gr'
import { Link  } from "react-router-dom";

function AddDestination() {
  return (
    <div className='addDest'>
        <button><Link to={`/alterdestinations`}><GrAddCircle/></Link></button>
    </div>
  )
}

export default AddDestination