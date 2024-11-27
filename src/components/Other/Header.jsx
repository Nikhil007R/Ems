import React, { useState } from 'react'

const Header = () => {

  // const [username, setUserName] = useState("");

  // if(!data){
  //   setUserName("Admin")
  // }
  // else{
  //   setUserName(data.firstName);
  // }

  const logout = ()=>{
    // localStorage.setItem("loggedInUser", "");
    localStorage.removeItem("loggedInUser")
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'>username 👋</span> </h1>
        <button onClick={logout} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header 