import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faDumbbell, faListCheck, faBottleWater } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <div className="bg-gray-100 pb-8">
            <div className="bg-[url('https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
            bg-cover bg-no-repeat bg-center h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center px-6 text-center gap-8">
                    <h2 className="text-black bg-white px-6 py-4 rounded-full">FIND YOUR ENERGY</h2>
                    <h2 className="text-white text-4xl font-bold text-center">MAKE YOUR BODY FIT & PERFECT</h2>
                    <button className="bg-white text-black font-bold px-12 py-4 hover:bg-red-500 hover:text-white transition-colors duration-500">OUR CLASSES</button>
                </div>
            </div>
            <div className="mb-24 pt-8 flex flex-col md:flex-row md:justify-center md:items-center">
                <div className="md:w-96 m-6 p-6 md:mx-2 md:py-12 flex flex-col justify-center items-center bg-white shadow-xl rounded-lg mb-12">
                    <FontAwesomeIcon icon={faClockRotateLeft} size='2x' spin spinReverse className='text-red-500' />
                    <h3 className="text-2xl font-bold mt-6">PROGRESSION</h3>
                    <p className="text-md text-center mt-8 mb-4">Our team of experts will work with you to create a cusmized plan that helps you achieve
                        success one step at a time.
                    </p>
                </div>
                <div className="md:w-96 m-6 p-6 md:mx-2 md:py-12 flex flex-col justify-center items-center bg-white shadow-xl rounded-lg mb-12">
                    <FontAwesomeIcon icon={faDumbbell} className='text-red-500' size='2x' />
                    <h3 className="text-2xl font-bold mt-6">WORK OUT</h3>
                    <p className="text-md text-center mt-8 mb-4">With a variety of workouts to choose from, you'll have everyting
                        you need to get into the best shape of your life.
                    </p>
                </div>
                <div className="md:w-96 m-6 p-6 md:mx-2 md:py-12 flex flex-col justify-center items-center bg-white shadow-xl rounded-lg mb-12 ">
                    <FontAwesomeIcon icon={faListCheck} className='text-red-500' size='2x' />
                    <h3 className="text-2xl font-bold mt-6">NUTRITIONS</h3>
                    <p className="text-md text-center mt-8 mb-4">Our team will work with you to create a personalized meal plan
                        that helps you reach your specific health goals.
                    </p>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center m-6">
                    <h3 className="px-6 py-4 bg-red-600 text-white font-bold">WHO WE ARE</h3>
                    <p className="text-4xl font-bold text-center mt-8">Take Your Health And Body To Next Level</p>
                    <p className="text-gray-500 mt-6 text-lg text-center mb-8">Take Your Health And Body  To Next Level with our comprenhensive program designed to help you reach
                        your fitnes goals.
                    </p>
                    <div className="flex flex-col justify-center items-center mx-8 sm:flex-row gap-6 lg:mt-8">
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <img src='https://images.unsplash.com/photo-1616279969722-d81a5a3944ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80' alt='Personal Trainner'
                                className='w-72' />
                            <h3 className="text-xl font-bold mb-12 mt-4 text-center">PROFESSIONAL TRAINERS</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <img src='https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='Equipments'
                                className='w-72' />
                            <h3 className="text-xl font-bold mb-12 mt-4 text-center">MODERN EQUIPMENTS</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <img src='https://images.unsplash.com/photo-1598575435247-2572be03bf6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='GYM Machines'
                                className='w-72' />
                            <h3 className="text-xl font-bold mb-12 mt-4 text-center">FANCY GYM MACHINES</h3>
                        </div>
                    </div>
                    <button className="px-14 py-4 bg-gray-700 text-white font-bold mt-16 mb-40 hover:bg-black hover:text-white transition-colors duration-500">TAKE A TOUR</button>
                </div>
            </div>
            <div className="bg-white pt-2">
                <div className="m-8 flex flex-col justify-center items-center">
                    <h3 className="px-6 py-4 bg-red-600 text-white font-bold">OUR FEATURED CLASSES</h3>
                    <p className="text-4xl font-bold text-center mt-8">We Are Offering Best Flexible Classes</p>
                    <div className="flex flex-col md:w-96 lg:w-full lg:px-48">
                        <div className="bg-[url('https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full h-72 mt-12 flex flex-col justify-end items-start rounded-md">
                            <h3 className="text-white font-bold text-4xl px-4">Cycling</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Tuesday: 10:00am - 11:00am</p>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1602827115209-0f49346b36b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full  h-72 mt-12 flex flex-col justify-end items-start rounded-md">
                            <h3 className="text-white font-bold text-4xl px-4">Karate</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Friday: 01:00pm - 02:00pm</p>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full  h-72 mt-12 flex flex-col justify-end items-start rounded-md">
                            <h3 className="text-white font-bold text-4xl px-4">Power</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Saturday: 4:00pm - 05:00pm</p>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full  h-72 mt-12 flex flex-col justify-end items-start rounded-md">
                            <h3 className="text-white font-bold text-4xl px-4">Meditation</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Friday: 5:00pm - 06:00pm</p>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full  h-72 mt-12 flex flex-col justify-end items-start rounded-md">
                            <h3 className="text-white font-bold text-4xl px-4">Martial Arts</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Saturday: 1:00pm - 02:00pm</p>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1594269807754-7b7926246d65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]
                        bg-cover bg-no-repeat bg-center w-80 sm:w-full  h-72 mt-12 flex flex-col justify-end items-start rounded-md mb-24">
                            <h3 className="text-white font-bold text-4xl px-4">Workout</h3>
                            <p className="text-white font-semibold py-1 px-3 m-5 bg-red-500">Sunday: 4:00pm - 05:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-black flex flex-col justify-center items-center w-full">
                    <div className="bg-red-500 px-10 py-6 flex flex-col justify-center items-center w-full">
                        <p className="text-2xl font-bold text-white text-center">We Are Always Providing Best Fitness Service For You</p>
                        <button className="px-12 py-4 bg-white text-black font-bold mt-6 mb-4 hover:rounded-lg transition-all duration-500">JOIN WITH US</button>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-12 pb-6">
                        <h3 className="text-white mt-12 font-bold text-lg">WHY CHOOSE US</h3>
                        <p className="text-white mt-8 text-4xl text-center font-bold mb-6">We Can Give A Shape Of Your Body Here</p>
                        <p className="text-gray-300 text-center">At <b>gym</b>,we are dedicated to helping you achieve the body of your dreams. Our expert trainers
                            and nutriotionists will work with you to create a personalized fitness and nutrition that helps you
                            reach your specific goals.</p>
                    </div>
                    <div className=" text-white flex flex-col justify-center items-center gap-8 pt-4 pb-12">
                        <div className='flex flex-row   '><FontAwesomeIcon icon={faDumbbell} className='text-gray-300 mr-4' size='2x' /><h3 className="text-xl font-bold">Free Fitness Training</h3></div>
                        <div className='flex flex-row   '><FontAwesomeIcon icon={faDumbbell} className='text-gray-300 mr-4' size='2x' /><h3 className="text-xl font-bold">Fodern Gym Equipments</h3></div>
                        <div className='flex flex-row   '><FontAwesomeIcon icon={faDumbbell} className='text-gray-300 mr-4' size='2x' /><h3 className="text-xl font-bold">Gym Bag Equipments</h3></div>
                        <div className='flex flex-row   '><FontAwesomeIcon icon={faBottleWater} className='text-gray-300 mr-4' size='2x' /><h3 className="text-xl font-bold">Fresh Bottle Water</h3></div>
                    </div>
                    <button className="px-16 py-4 bg-gray-700 text-white font-bold mt-6 mb-24 hover:bg-red-500 hover:text-white transition-colors duration-500">OUR CLASSES</button>
                </div>
            </div>
            <div className="mt-24 px-8 bg-gray-100">
                <div className="flex flex-col justify-center items-center mb-12">
                    <h3 className="px-6 py-4 bg-red-600 text-white font-bold rounded-md">PRICING CHART</h3>
                    <p className="text-4xl font-bold text-center mt-8">Exclusive Pricing Plan</p>
                </div>
                <div className="flex flex-col sm:flex-col lg:flex-row">
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg sm:w-96 sm:mx-auto mt-12">
                        <div className="relative flex flex-col justify-center items-center">
                            <div className="bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]
                            bg-auto bg-no-repeat bg-center w-80 sm:w-96 h-64 flex flex-col justify-end items-start"/>
                            <h3 className="text-xl font-bold text-red-500 absolute bottom-0 bg-white px-20 py-2">Beginners</h3>
                        </div>
                        <div>
                            <div className="flex flex-row justify-center items-center pt-8 gap-3">
                                <h3 className="text-3xl text-gray-400">$</h3>
                                <h3 className="text-6xl text-black font-bold">29</h3>
                                <h3 className="text-xl text-black">.99</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center text-gray-500 gap-4 pt-6 pb-6">
                                <h3>Free Hand</h3>
                                <h3>Personal Trainer</h3>
                                <h3>Weight Loss</h3>
                                <h3>Cycling</h3>
                            </div>
                            <div>
                                <button className="px-12 py-4 bg-red-500 text-white font-bold mt-6 mb-12 hover:bg-red-700 hover:text-white transition-colors duration-500">PURCHASE NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg mt-12 sm:w-96 sm:mx-auto">
                        <div className="relative flex flex-col justify-center items-center">
                            <div className="bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
                            bg-cover bg-no-repeat bg-center w-80 sm:w-96 h-64 flex flex-col justify-end items-start"/>
                            <h3 className="text-xl font-bold text-red-500 absolute bottom-0 bg-white px-20 py-2">Advanced</h3>
                        </div>
                        <div>
                            <div className="flex flex-row justify-center items-center pt-8 gap-3">
                                <h3 className="text-3xl text-gray-400">$</h3>
                                <h3 className="text-6xl text-black font-bold">39</h3>
                                <h3 className="text-xl text-black">.99</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center text-gray-500 gap-4 pt-6 pb-6">
                                <h3>Free Hand</h3>
                                <h3>Personal Trainer</h3>
                                <h3>Weight Loss</h3>
                                <h3>Cycling</h3>
                            </div>
                            <div>
                                <button className="px-12 py-4 bg-red-500 text-white font-bold mt-6 mb-12 hover:bg-red-700 hover:text-white transition-colors duration-500">PURCHASE NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg mt-12 sm:w-96 sm:mx-auto">
                        <div className="relative flex flex-col justify-center items-center">
                            <div className="bg-[url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80')]
                            bg-cover bg-no-repeat bg-center w-80 sm:w-96 h-64 flex flex-col justify-end items-start"/>
                            <h3 className="text-xl font-bold text-red-500 absolute bottom-0 bg-white px-20 py-2">Expert</h3>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row justify-center items-center pt-8 gap-3">
                                <h3 className="text-3xl text-gray-400">$</h3>
                                <h3 className="text-6xl text-black font-bold">49</h3>
                                <h3 className="text-xl text-black">.99</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center text-gray-500 gap-4 pt-6 pb-6">
                                <h3>Free Hand</h3>
                                <h3>Personal Trainer</h3>
                                <h3>Weight Loss</h3>
                                <h3>Cycling</h3>
                            </div>
                            <div>
                                <button className="px-12 py-4 bg-red-500 text-white font-bold mt-6 mb-12 md:mb-0 hover:bg-red-700 hover:text-white transition-colors duration-500">PURCHASE NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main