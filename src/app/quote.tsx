'use client'

import {useState} from "react";
import getQuote from "@/lib/get-quote";


export default function ChuckQuote({initQuote}: { initQuote: string }) {

    const [quote, setData] = useState(initQuote);
    const fetchData = async () => {
        return setData(await getQuote());
    };

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <div className="lg:max-w-xl lg:pr-5 relative z-40">
            <p className="flex text-sm uppercase text-g1 text-gray-700">Chuck says:</p>
            <h4 className="mb-6 max-w-lg text-4xl font-light sm:text-4xl sm:leading-snug text-gray-800">
                <p>{quote}</p>
            </h4>
            <button className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClick}>What else did Chuck say
            </button>
        </div>
    )
}
