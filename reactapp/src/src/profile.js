import React from 'react'
import './Components/prof.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from './Components/redux/userSlice'
import Nav from './Components/NavBar'

export default function Profile() {
  const user=useSelector(selectUser)
  return (
    <>
  
<Nav/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center><h1>Your Profile</h1></center>
  <div class="profile-card">
    <div className="mh">
    <img src="https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275817-stock-photo-business-man.jpg" alt="Profile Picture"/>
    </div>
    <h1>{user.username}</h1>
    <ul>
      <li><strong>Email:</strong>{user.email}</li>
      <li><strong>Phone:</strong> 123-456-7890</li>
      <li><strong>Location:</strong> New York, USA</li>
    </ul>
   
  </div>

    </>
  )
}
