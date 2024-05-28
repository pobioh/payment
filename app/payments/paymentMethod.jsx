import React, { useState } from 'react';
import Reciept, { AmountHandler, Tax, AddressHandler, RiderHandler } from './Reciept';

export default function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardNumber, setCardNumber] = useState('');
    const [ccv, setCcv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expirationMonth, setExpirationMonth] = useState('');
    const [expirationYear, setExpirationYear] = useState('');
    const [error, setError] = useState('');
    const [nameFieldFocus, setNameFieldFocus] = useState(false);
    const [cardNumberFieldFocus, setCardNumberFieldFocus] = useState(false);
    const [ccvFieldFocus, setCcvFieldFocus] = useState(false);
    const [expirationMonthFieldFocus, setExpirationMonthFieldFocus] = useState(false);

    // Function to format card number
    const formatCardNumber = (value) => {
        let formattedValue = value.replace(/\D/g, '');
        formattedValue = formattedValue.replace(/(.{4})/g, '$1 ');
        formattedValue = formattedValue.trim();
        return formattedValue;
    };

    // Function to handle card number input change
    const handleCardNumberChange = (e) => {
        let newValue = formatCardNumber(e.target.value);
        newValue = newValue.slice(0, 19); // Allow 16 digits and 3 spaces
        setCardNumber(newValue);
    };

    // Function to handle CCV input change
    const handleCcvChange = (e) => {
        const newValue = e.target.value.slice(0, 3);
        setCcv(newValue);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous error messages
        setError('');

        // Check for errors
        let errorMessage = '';

        if (paymentMethod === 'creditCard') {
            if (!nameOnCard) {
                errorMessage += 'Please enter your name on the card. ';
                if (!errorMessage) setNameFieldFocus(true); // Autofocus on the name input field
            }
            if (!cardNumber || cardNumber.length < 19) {
                errorMessage += 'Card number is invalid. ';
                if (!errorMessage) setCardNumberFieldFocus(true); // Autofocus on the card number input field
            }
            if (!ccv || ccv.length !== 3) {
                errorMessage += 'CCV is invalid. ';
                if (!errorMessage) setCcvFieldFocus(true); // Autofocus on the CCV input field
            }
            if (!expirationMonth || !expirationYear) {
                errorMessage += 'Please select expiration date. ';
                if (!errorMessage) setExpirationMonthFieldFocus(true); // Autofocus on the expiration month input field
            }
        }

        // Set error message if any
        setError(errorMessage.trim());

        // If no errors, process the payment
        if (!errorMessage) {
            // Process the payment here
        }
    };

    // Invoice
    const taxAmount = Tax();
    const address = AddressHandler();
    const riderName = RiderHandler();
    const totalAmount = AmountHandler() + taxAmount;

    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                <div className="w-full max-w-6xl mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 flex flex-wrap">
                    <Reciept />
                    <div className="w-full lg:w-1/2 p-5">
                        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                                <div className="w-full pt-1 pb-5">
                                    <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center"></div>
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-center font-bold text-xl uppercase" style={{ fontSize: "50px" }}>${totalAmount.toFixed(2)}</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 flex -mx-2">
                                        <div className="px-4">
                                            <label htmlFor="type1" className="flex items-center cursor-pointer">
                                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-500" name="type" id="type1" checked={paymentMethod === 'creditCard'} onChange={() => setPaymentMethod('creditCard')} />
                                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3 " alt="Credit Card" />
                                            </label>
                                        </div>
                                        <div className="px-2">
                                            <label htmlFor="type2" className="flex items-center cursor-pointer">
                                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-500" name="type" id="type2" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                                                <span className="ml-3">Pay by Cash</span>
                                            </label>
                                        </div>
                                    </div>
                                    {paymentMethod === 'creditCard' && (
                                        <>
                                            <div className="mb-3">
                                                <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} autoFocus={nameFieldFocus} />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" value={cardNumber} onChange={handleCardNumberChange} autoFocus={cardNumberFieldFocus} />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="font-bold text-sm mb-2 ml-1">CCV</label>
                                                <div>
                                                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" value={ccv} onChange={handleCcvChange} autoFocus={ccvFieldFocus} />
                                                </div>
                                            </div>
                                            <div className="mb-3 -mx-2 flex items-end">
                                                <div className="px-2 w-1/2">
                                                    <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                                    <div>
                                                        <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)} autoFocus={expirationMonthFieldFocus}>
                                                            <option value="">Month</option>
                                                            <option value="01">01 - January</option>
                                                            <option value="02">02 - February</option>
                                                            {/* Add other months */}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="px-2 w-1/2">
                                                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)}>
                                                        <option value="">Year</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        {/* Add other years */}
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {error && (
                                        <div className="mb-3 text-red-500">
                                            {error}
                                        </div>
                                    )}
                                    <div>
                                        <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

