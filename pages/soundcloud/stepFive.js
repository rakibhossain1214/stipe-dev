import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'


function stepFive(props) {
    const router = useRouter()
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [cvc, setCVC] = useState('')
    const [date, setDate] = useState('')

    useEffect(()=>{
        if(props.router.query.email === undefined){
            router.push('/soundcloud')
        }
    },[])

    const handleFullnameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleCVCChange = (e) => {
        setCVC(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleStepFiveSubmit = () => {

        if (fullName !== '' && cvc.length === 3 && date !== '') {
            router.push({
                pathname: '/soundcloud/stepSix',
                query: { email: props.router.query.email, billing: props.router.query.email, payment: props.router.query.payment, address: props.router.query.address, fullName: fullName, date: date, cvc: cvc }
            })

        } else {
            setError('Each field is required and must be valid!')
        }
    }


    return (
        <div
            className="h-screen w-full bg-orange-600"
        >
            <div className="grid justify-items-center">
                <div>
                    <div className='mt-10 flex justify-between'>
                        <div className="mb-6 mt-10 w-20">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Date</label>
                            <input type="date" id="date" onChange={handleDateChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                        </div>
                        <div className="mb-6 mt-10 w-20">
                            <label htmlFor="cvc" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">CVC</label>
                            <input type="cvc" id="cvc" onChange={handleCVCChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                        </div>
                    </div>

                    <div className="mb-6 mt-10">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Full Name</label>
                        <input type="fullName" id="fullName" onChange={handleFullnameChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="w-full flex aling-items-center justify-items-center">
                        {/* <Link href="/step-2"> */}
                        <button onClick={handleStepFiveSubmit} className='w-full bg-gray-100 rounded-lg text-xl border border-gray-400 text-gray-600 p-2 flex aling-items-center flex justify-center'>
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

export default withRouter(stepFive);