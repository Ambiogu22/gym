import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    fullname: yup.string().required('Please provide your Full Name'),
    email: yup.string().email().required('Please provide a valid email'),
    comment: yup.string().min(10).max(20).required('Please provide your comment')
})

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <div className="px-16 py-16 sm:px-8 bg-black flex flex-col justify-center items-center sm:flex-row md:justify-evenly">
            <div className="flex flex-col justify-center items-center sm:w-72">
                <h3 className="text-2xl font-bold text-white mt-12 border-b-4 border-red-500">GYM</h3>
                <p className="text-gray-200 text-center mt-8">
                    Take your health and body to the next level with our comprenhensive program designed to help you reach
                    your fitness goals.
                </p>
                <p className="text-gray-200 text-center mt-8">
                    Privacy Policy © 2023 GYM
                </p>
            </div>
            <div className="flex flex-col justify-center items-center text-gray-200 gap-8 sm:px-12 sm:py-8 sm:w-72">
                <h3 className="text-2xl font-bold text-white mt-12 border-b-4 border-red-500 text-center">WORKING HOURS</h3>
                <h3 className="font-bold text-lg">Monday - Friday</h3>
                <h3 className="text-md">7:00am - 10:00pm</h3>
                <h3 className="font-bold text-lg">Saturday</h3>
                <h3 className="text-md">7:00am - 5:00pm</h3>
                <h3 className="font-bold text-lg">Sunday - Closed</h3>
            </div>
            <div className='mt-12 lg:mt-0'>
                <div className="bg-gray-300 p-6 flex flex-col justify-center items-center">
                    <h3 className='text-2xl font-bold mb-4 border-b-2 border-red-500'>Leave us your info</h3>
                    <form className=" flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(submitForm)}>
                        <input type="text" placeholder="Full Name" {...register('fullname')} className='border border-gray-500 p-2 w-64 focus:outline-red-500' />
                        <p className='text-red-500 font-semibold'>{errors.fullname?.message}</p>
                        <input type="text" placeholder="Email Address" {...register('email')} className='border border-gray-500 p-2 w-64 focus:outline-red-500' />
                        <p className='text-red-500 font-semibold'>{errors.email?.message}</p>
                        <textarea placeholder="Comment" {...register('comment')} className='border border-gray-500 p-2 w-64 h-32 resize-none focus:outline-red-500' />
                        <p className='text-red-500 font-semibold'>{errors.comment?.message}</p>
                        <input type="submit" placeholder="Submit" className="text-black bg-white px-4 py-2 rounded-md mt-4 cursor-pointer border border-red-500 hover:bg-red-500 hover:text-black transation-all duration-700" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer