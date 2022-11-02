import { useEffect, useState , ChangeEvent } from "react";
import {DetailsType} from '../types/types'

const useBeginnersSearchEngine=()=>{
    const [details , setDetails]=useState<DetailsType>()
    const [value , setValue]=useState<string>('')
    useEffect(()=>{
        const getData= async ()=>{
            try{
              const response = await fetch('https://randomuser.me/api?results=100',{
                method:"GET"
              })
              const {results} = await response.json()
              setDetails(results)
           }catch(err){
            console.log(err)
           }
        }
        getData()
    },[])
 
    const changeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
       setValue(e.target.value)
    }
    return{
        state:{details  , value},
        action:{changeHandler }
    }
}

export default useBeginnersSearchEngine;