import { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function TipsCalculator() {
    const [billAmount, setBillAmount] = useState('');
    const [tipsAmount, setTipsAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    function calculateTips(percentage) {
        const bill = parseFloat(billAmount);

        if (!isNaN(bill) && bill >= 0) {
            const tips = bill * (percentage / 100);
            setTipsAmount(tips.toFixed(2));

            const total = tips + bill;
            setTotalAmount(total.toFixed(2));
        } else {
            setTipsAmount('0.00');
            setTotalAmount('0.00');
        }
    }

    return (
        // Input
        // CTA
        // % Info + Bill result
        <div>
            <div className="container">
                <Input
                    placeholder="Set bill amount"
                    type="number"
                    className="inputField"
                    value={billAmount}
                    onChangeFunction={setBillAmount}
                />

                <div className="btn_container">
                    <Button
                        className="btn"
                        onClick={() => calculateTips(10)}
                        title="10%"
                    />
                    <Button
                        className="btn"
                        onClick={() => calculateTips(15)}
                        title="15%"
                    />
                    <Button
                        className="btn"
                        onClick={() => calculateTips(20)}
                        title="20%"
                    />
                    <Button
                        className="btn"
                        onClick={() => calculateTips(25)}
                        title="25%"
                    />
                </div>

                <div className="result">
                    <p>Tip Amount: ${tipsAmount}</p>
                    <p>Total Amount: ${totalAmount}</p>
                </div>
            </div>
        </div>
    );
}
