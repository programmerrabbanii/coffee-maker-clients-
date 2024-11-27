import coffee1 from '../assets/images/cups/Rectangle 9.png'
import coffee2 from '../assets/images/cups/Rectangle 10.png'
import coffee3 from '../assets/images/cups/Rectangle 11.png'
import coffee4 from '../assets/images/cups/Rectangle 12.png'
import coffee5 from '../assets/images/cups/Rectangle 13.png'
import coffee6 from '../assets/images/cups/Rectangle 14.png'
import coffee7 from '../assets/images/cups/Rectangle 15.png'
import coffee8 from '../assets/images/cups/Rectangle 16.png'


const Gallary = () => {
    return (
        <div className='mt-10 w-11/12 mx-auto mb-10'>
            <h3 className='text-center text-3xl font-semibold '>See Our New Coffees Collection Here Bara..</h3>
            <p className='text-center mb-8'>If you have a girlfriend, you get a 50% discount on this bara.. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                   <img src={coffee1} alt="" />
                </div>
                <div> 
                   <img src={coffee2} alt="" />
                </div>
                <div>
                   <img src={coffee3} alt="" />
                </div>
                <div>
                   <img src={coffee4} alt="" />
                </div>
                <div>
                   <img src={coffee5} alt="" />
                </div>
                <div>
                   <img src={coffee6} alt="" />
                </div>
                <div>
                   <img src={coffee7} alt="" />
                </div>
                <div>
                   <img src={coffee8} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Gallary;