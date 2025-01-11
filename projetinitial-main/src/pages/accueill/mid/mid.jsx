
import"./mid.css"
import Searshbar from '../../../Components/searshbar'
import Box from './box/box'
import React, { useState } from 'react';



function Mid({ onSelectTrip }) {
  const [selectedTrip, setSelectedTrip] = useState(null);
  return (
    <div className='chat'>
     <Searshbar/>
     <br/>
     <br/>
     <br/>
     <ul className='li'>
     <li><Box onSelectTrip={onSelectTrip} /></li>
     
     
     
     
     
     </ul>
     
     
     
    </div>
  )
}

export default Mid