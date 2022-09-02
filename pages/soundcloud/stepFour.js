import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'


function stepFour(props) {
    const router = useRouter()
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        if(props.router.query.email === undefined){
            router.push('/soundcloud')
        }
    },[])

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleStepFourSubmit = () => {

        if (address !== '') {
            router.push({
                pathname: '/soundcloud/stepFive',
                query: { email: props.router.query.email, billing: props.router.query.email, payment: props.router.query.payment, address: address }
            })

        } else {
            setError('Address is required!')
        }
    }


    return (
        <div
            className="h-screen w-full bg-orange-600"
        >
            <div className="grid justify-items-center">
                <div>
                    <div className="mb-6 mt-10">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Address</label>
                        <input type="address" id="address" onChange={handleAddressChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="w-full flex aling-items-center justify-items-center">
                        {/* <Link href="/step-2"> */}
                        <button onClick={handleStepFourSubmit} className='w-full bg-gray-100 rounded-lg text-xl border border-gray-400 text-gray-600 p-2 flex aling-items-center flex justify-center'>
                            <span className="p-3">
                                Enter
                            </span>
                        </button>

                        {/* </Link> */}
                    </div>

                    <div className='w-full flex aling-items-center justify-items-center'>
                        <p className='text-md text-gray-100 mt-2'>
                            {error}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(stepFour);