import useDisplayBoard from "./hooks/useDisplayBoard";
import './displayboard.css'


const DisplayBoard = () => {

    const { state: { price }, action: { changeHandler, btnHandler } } = useDisplayBoard()
    return (
        <div>
            <h1>GOLD Price</h1>
            <label>Currency : </label>
            <input placeholder="enter the currency" onChange={changeHandler} name="currency" />
            <button className="btn" onClick={btnHandler} >select</button>
            <table>
                <thead>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>Pricegram18K</th>
                    <th>Price gram 24K</th>
                </thead>
                <tbody>
                    <td>{price?.currency}</td>
                    <td>{price?.price}</td>
                    <td>{price?.price_gram_18k}</td>
                    <td>{price?.price_gram_24k}</td>
                </tbody>
            </table>
        </div>
    );
};
export default DisplayBoard;
