import { useEffect, useState } from "react";
import Price from "../Price/Price";


const PriceOption = () => {
    const [priceOption, setPriceOption] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setPriceOption(data))




    }, [])

    return (
        <div className="mt-10">
            <h2 className='text-3xl text-center font-medium'>Best Price in the town</h2>

            <div className="grid  md:grid-cols-3 gap-6">
                {
                    priceOption.map(option => <Price option={option} key={option.id}></Price>)
                }

            </div>
            
        </div>
    );
};

export default PriceOption;
