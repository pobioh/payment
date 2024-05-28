function AmountHandler(){
    return 100;
}
function Tax(){
    return 25.10;
}
function AddressHandler(){
    return "160 Princess St";
}
function RiderHandler(){
    return "Wills Jack";
}


export default function Reciept(){
    const address = AddressHandler();
    const tax = Tax();
    const name = RiderHandler();
    const Total = AmountHandler();
    const amount = Total + tax;


    return(
        <>
                <div className="w-full lg:w-1/2 p-5">
                    <div className="bg-white rounded-lg shadow-lg px-8 py-10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">
                                <img className="h-8 w-8 mr-2" src="https://tailwindflex.com/public/images/logos/favicon-32x32.png" alt="Logo" />
                                <div className="text-gray-700 font-semibold text-lg">RideShare</div>
                            </div>
                            <div className="text-gray-700">
                                <div className="font-bold text-xl mb-2">INVOICE</div>
                                <div className="text-sm">Date: 01/06/2024</div>
                                <div className="text-sm">Invoice #: INV12345</div>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-300 pb-8 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
                            <div className="text-gray-700 mb-2">{name}</div>
                            <div className="text-gray-700 mb-2">{address}</div>
                            <div className="text-gray-700 mb-2">Winnipeg, MB 12345</div>
                            <div className="text-gray-700">children@rideshare.com</div>
                        </div>
                        <table className="w-full text-left mb-8">
                            <thead>
                                <tr>
                                    <th className="text-gray-700 font-bold uppercase py-2">Pickup</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Drop off</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Km</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 text-gray-700">160 Princess Str</td>
                                    <td className="py-4 text-gray-700">200 King Str</td>
                                    <td className="py-4 text-gray-700">40km</td>
                                    <td className="py-4 text-gray-700">${Total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mb-8">
                            <div className="text-gray-700 mr-2">Subtotal:</div>
                            <div className="text-gray-700">${Total.toFixed(2)}</div>
                        </div>
                        <div className="text-right mb-8">
                            <div className="text-gray-700 mr-2">Tax:</div>
                            <div className="text-gray-700">${tax.toFixed(2)}</div>
                        </div>
                        <div className="flex justify-end mb-8">
                            <div className="text-gray-700 mr-2">Total:</div>
                            <div className="text-gray-700 font-bold text-xl">${amount.toFixed(2)}</div>
                        </div>
                        <div className="border-t-2 border-gray-300 pt-8 mb-8">
                            <div className="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</div>
                            <div className="text-gray-700 mb-2">Please make checks payable to Your Company Name and mail to:</div>
                            <div className="text-gray-700">123 Main St., Anytown, USA 12345</div>
                        </div>
                    </div>
                </div>

                
        </>

    )
}
export { AmountHandler, Tax, AddressHandler, RiderHandler };