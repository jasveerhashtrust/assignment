import useBeginnersSearchEngine from "./hooks/BeginnersSearchEngine"
import './BeginnersSearchEngine.css'
import { ItemTypes } from './types/types'
const BeginnersSearchEngine = () => {
    const { state: { details, value }, action: { changeHandler, } } = useBeginnersSearchEngine()
    return (
        <>
            <div className="upperContaier">
                <label className="label">Search Engine plz search by first name to get results</label>
                <div className='container2'>
                    <input type="search" placeholder='search' id="search" className='search' onChange={changeHandler} ></input>
                </div>
                <div className='dropdown1'>

                    {details && details.filter((item: any) => {
                        const search = value.toLowerCase()
                        const first = item?.name?.first.toLowerCase()
                        return (
                            search && first.startsWith(value) &&
                            first !== value
                        )
                    }).slice(0, 10).map((item: ItemTypes, index: number) => {
                        return (
                            <div key={index}>
                                <span className="data">
                                    {item?.name?.title}
                                </span>
                                <span className="data">
                                    {item?.name?.first}
                                </span>
                                <span className="data">
                                    {item?.name?.last}
                                </span>
                                <span className="data">
                                    {item?.dob?.age}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default BeginnersSearchEngine;
