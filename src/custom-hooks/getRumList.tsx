import {useState, useEffect} from 'react'
import { fetchRum } from '../helpers/APICalls'

export const summonRums = () => 
{
    let [theRums, setTheRums] = useState<[]>([])

    const rumSummons = async () => 
    {
        setTheRums(await fetchRum())
    }

    useEffect(() => 
    {
        rumSummons()
    }, [])

    return { theRums, getTheRums: rumSummons}
}