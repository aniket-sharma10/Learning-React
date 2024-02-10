import React, { useId } from 'react'

function Input({label, amount, currencyOptions=[], onAmountChange, onCurrencyChange,  
                selectCurrency="usd", amountDisable=false, currencyDisable=false, className="",})
{
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Input field on left side */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input className="outline-none w-full bg-transparent text-lg py-1.5"
                        id={amountInputId}
                        type="number"
                        min="0"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Select menu on right side */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg p-1 bg-gray-200 cursor-pointer outline-none"
                        value={selectCurrency}
                        disabled={currencyDisable}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {/* Mapping options from currencyOptions array */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}


export default Input;
