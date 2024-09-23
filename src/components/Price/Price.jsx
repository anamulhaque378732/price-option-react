import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const Price = ({ option }) => {
    // console.log(price);
    const { name, price, features } = option;
    return (
        <div className='bg-sky-400 p-4 m-4 flex flex-col rounded-lg text-black'>
            <h2 className='text-center'>
                <span className='text-5xl font-bold'>  {price}  </span>  <span className='text-xl'> /mon</span>
            </h2>

            <h4 className='text-3xl text-center'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx} ></Feature>)
                }
            </div>
            <button className="bg-pink-400 p-2 text-center align-middle mt-5 rounded-md w-full hover:bg-teal-400 font-bold">Buy Now</button>
        </div>
    );

};

Price.propTypes = {
    option: PropTypes.object.isRequired
}
// recharts web site
export default Price;