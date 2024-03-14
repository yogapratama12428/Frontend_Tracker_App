import axios from 'axios';
import CardStatus from '../components/CardStatus';
import MapExplore  from '../components/MapExplore'
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
const Dashboard = () => {

    const [name, setName ] = useState('')
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(()=> {
        refreshToken()
    },[])

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/refreshtoken')
            setToken(response.data.token)
            console.log(response.data.token)
            const decoded = jwtDecode(response.data.token)
            console.log(decoded)
        } catch (error) {
            console.error(error)
        }
    }

    // const axiosJWT = axios.create();

    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = await axios.get('http://localhost:5000/api/refreshtoken');
    //         config.headers.Authorization = `Bearer ${response.data.token}`;
    //         setToken(response.data.token);
    //         const decoded = jwtDecode(response.data.token);
    //         setName(decoded.name);
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });


 


  
    return (
        // Navbar

        <div className='.container'>
            {/* Status */}
            {/* <div className='flex flex-wrap mx-auto p-2 gap-2 shadow'>
                <div className='w-auto'>
                    <img 
                        src='https://images.unsplash.com/photo-1631376604914-572212a3ede5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
                        className='border-2 border-black w-48 h-auto'
                    />
                </div>

                <div className='w-auto flex-col '>
                    <div className='flex gap-4'>
                        <p className='py-1'>
                            GPS Arduino Uno 
                        </p>
                        <p className='mx-1 px-6 border-2 border-black bg-light-green-50 rounded-full'>
                            Online
                        </p>
                    </div>
                   
                    <p className='py-1'>
                        Yoga Pratama Pangestu
                    </p>
                    <p className='py-2'>
                        Last time active : 13 October 2023 10:07
                    </p>

                </div>
            </div>
         */}
            {/* Map */}
            <div className='w-auto p-2 gap-2 flex flex-col'>
                {/* <CardStatus /> */}
                <MapExplore/>
            </div>
        </div>  
     )
}

export default Dashboard