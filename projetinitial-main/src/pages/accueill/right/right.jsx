import React, { useState } from 'react';

import Detail from './details/details';

import './right.css'

const Right = ({ trip }) => {
  
  return (
    <div><Detail trip={trip} /></div>
  )
}

export default Right