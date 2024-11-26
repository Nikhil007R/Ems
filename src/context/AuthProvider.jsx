import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const Authcontext = createContext();


const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
    
    // const data = getLocalStorage();
    // console.log(data)
    
    useEffect(()=>{
        setLocalStorage();
        const {employees, admin} = getLocalStorage();
        setUserData({employees, admin}); 
    }, [])
    

  return (
    <div>
        <Authcontext.Provider value={userData}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider