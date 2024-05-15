


import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth";
import { useNavigate } from "react-router";

export const axiosSecure = axios.create({
     baseURL: 'http://localhost:5007',
     withCredentials: true
})

const useAxios = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
       axiosSecure.interceptors.response.use( res =>{
         return res;
       }, error=>{
           console.log('error tracked in the interceptor', error.response) 
           if(error.response.status === 401 || error.response.status === 403){
            console.log('log out the user');
            logout()
            .then(()=>{
                 console.log('logout');
                 navigate('/login')
            })
            .catch(error => console.log(error))
           }
          
       }
    )
    },[])
    return (
        axiosSecure
    );
};

export default useAxios;
