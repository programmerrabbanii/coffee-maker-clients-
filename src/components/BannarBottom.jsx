import bannarb1 from "../assets/images/icons/1.png"
import bannarb2 from "../assets/images/icons/2.png"
import bannarb3 from "../assets/images/icons/3.png"
import bannarb4 from "../assets/images/icons/4.png"



const BannarBottom = () => {
    return (
        <div className="bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
                <div className="p-10">
                    <img src={bannarb1} alt="" />
                    <h3 className="text-2xl ">Awesome Aroma</h3>
                    <h3>You will definitely be a fan of the design & aroma of your coffee</h3>
                </div>
                <div className="p-10">
                    <img src={bannarb2} alt="" />
                    <h3 className="text-2xl ">High Quality</h3>
                    <h3>We served the coffee to you maintaining the best quality</h3>
                </div>
                <div className="p-10">
                    <img src={bannarb3} alt="" />
                    <h3 className="text-2xl ">Pure Grades</h3>
                    <h3>The coffee is made of the green coffee beans which you will love</h3>
                </div>
                <div className="p-10">
                    <img src={bannarb4} alt="" />
                    <h3 className="text-2xl ">Proper Roasting</h3>
                    <h3>Your coffee is brewed by first roasting the green coffee beans</h3>
                </div>
            </div>
        </div>
    );
};

export default BannarBottom;