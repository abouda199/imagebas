import React from 'react'
import"./left.css"
import { Userinfo } from './UserInfo/Userinfo';

import ChatList from './chatList/Formtraje';

function Left() {
  return (
    <div className='List'>
        
        <Userinfo/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ChatList/>
    </div>
  )
}

export default Left;