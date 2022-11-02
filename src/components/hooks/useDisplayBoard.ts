
import { useEffect, useState  , ChangeEvent} from "react";
import { PriceTypes } from "../types/types";

const useDisplayBoard =()=> {
    const [price , setPrice]=useState<PriceTypes>()
    const [ currency , setCurrency]=useState<string>('INR')
    const [value , setvalue]=useState<string>('')
    const getRates = async() => {
        try {
            const resposne = await fetch(
                `https://www.goldapi.io/api/XAU/${currency}/`,
                {
                  method: "GET",
                  headers: {
                    'Content-Type': 'application/json',
                     'x-access-token': "goldapi-6hotl9zf1pz2-io"
                  },
                }
              );
            const myResponse = await resposne.json();
            console.log(myResponse , resposne)
            setPrice(myResponse);
        } catch (err) {
            console.log(err);
        }
    };
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setvalue(value);
    };
    const btnHandler=()=>{
        setCurrency(value)
        getRates()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getRates();
           },4000);
           return () => clearInterval(interval);
    }, []);

  return {
    state:{price},
    action:{changeHandler , btnHandler }
  }
  }

export default useDisplayBoard;
