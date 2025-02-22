import { useState } from 'react';
import '../styling/TipsCalculator.scss';
import Input from './Input';
import Button from './Button';
import Background from '../images/bg-image2.jpg';

export default function TipsCalculator() {
    const [billAmount, setBillAmount] = useState('');
    const [tipsAmount, setTipsAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedPercentage, setSelectedPercentage] = useState(0);

    function calculateTips(percentage) {
        const bill = parseFloat(billAmount);

        if (!isNaN(bill) && bill >= 0) {
            const tips = bill * (percentage / 100);
            setTipsAmount(tips.toFixed(2));

            const total = tips + bill;
            setTotalAmount(total.toFixed(2));

            setSelectedPercentage(percentage);
        } else {
            setTipsAmount('0');
            setTotalAmount('0');
            setSelectedPercentage('0');
        }
    }

    function Reset() {
        setBillAmount('');
        setTipsAmount('0');
        setTotalAmount('0');
        setSelectedPercentage('0');
    }

    return (
        // Input
        // CTA
        // % Info + Bill result
        <div
            className="wrapper"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
            }}>
            <h1 className="title">Tip Calculator</h1>
            <div className="container">
                <div className="tip_container">
                    <h2 className="container_title">Bill</h2>
                    <Input
                        placeholder="$"
                        type="number"
                        className="input_field"
                        value={billAmount}
                        onChangeFunction={setBillAmount}
                    />

                    <h2 className="container_title">Select tip %</h2>
                    <div className="btn_container">
                        <Button
                            className="btn"
                            onClick={() => calculateTips(10)}
                            title="Poor"
                        />
                        <Button
                            className="btn"
                            onClick={() => calculateTips(15)}
                            title="Average"
                        />
                        <Button
                            className="btn"
                            onClick={() => calculateTips(20)}
                            title="Great"
                        />
                        <Button
                            className="btn"
                            onClick={() => calculateTips(25)}
                            title="Amazing"
                        />
                    </div>
                </div>

                <div className="result_container">
                    <div className="result">
                        <div>
                            <p className="result_title">Tip amount:</p>
                            <p className="result_info">{selectedPercentage}%</p>
                        </div>
                        <p className="result_text">${tipsAmount}</p>
                    </div>

                    <div className="result">
                        <p className="result_title">Total amount:</p>
                        <p className="result_text">${totalAmount}</p>
                    </div>

                    <button className="reset_btn" type="reset" onClick={Reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
