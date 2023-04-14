const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col justify-center items-center p-6">
                <h3 className="px-6 py-4 bg-red-600 text-white font-bold">WHO WE ARE</h3>
                <p className="text-4xl font-bold text-center mt-8">Take Your Health And Body To Next Level</p>
                <p className="text-gray-500 mt-6 text-lg text-center">Take Your Health And Body  To Next Level with our comprenhensive program designed to help you reach
                    your fitnes goals.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h3 className="text-xl font-bold mt-12">PROFESSIONAL TRAINERS</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mt-12">MODERN EQUIPMENTS</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mt-12">FANCY GYM MACHINES</h3>
                    </div>
                </div>
                <button className="px-14 py-4 bg-gray-700 text-white font-bold mt-16 mb-40">TAKE A TOUR</button>
            </div>
        </div>
    );
}

export default About