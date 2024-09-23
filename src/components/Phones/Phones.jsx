import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const Phones = () => {

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phoneWithFakeData);

                setPhones(phoneWithFakeData)

            }
            )

    }, [])

    return (
        <div className="mt-10 ml-20 mb-96">
            <h2 className="text-5xl">
                Phones: {phones.length}
                <BarChart width={800} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </h2>
        </div>
    );
};

export default Phones;