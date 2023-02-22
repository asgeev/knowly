import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateTo = ({ to }) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])
}
