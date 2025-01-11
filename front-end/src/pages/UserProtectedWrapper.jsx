import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200) {
                setUser(response.data.user)
                setIsLoading(false)
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login')
        })

    }, [token])

    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(UserDataContext);

    if(isLoading) {
      return <div>Loading...</div>
    }
  return (
    <>
      {children} 
    </>
  )
}

export default UserProtectedWrapper
