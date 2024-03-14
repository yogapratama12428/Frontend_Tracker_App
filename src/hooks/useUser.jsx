import axios from "axios"
import { useEffect, useState } from "react"

export const useUser = async () => {
    const [ user, setUser ] = useState("")

    useEffect(()=>{
       getMe()
    },[])

    const getMe = async () => {
        const response = await axios.get('http://localhost:5000/isme')
        setUser(response.data.email)
    }

    return { user }
}

