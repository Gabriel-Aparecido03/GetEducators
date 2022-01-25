import { useContext } from 'react'
import { UFContext } from '../context/UFContext'

export function useUF() {
    const value = useContext(UFContext)
    return value
}