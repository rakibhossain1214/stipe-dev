import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import soundcloudLogo from '../../public/assets/images/sound.svg'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'

function stepTwo(props) {
    console.log(props.router.query.email)
    const router = useRouter()
    const [billing, setBilling] = useState('');
    const [payment, setPayment] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        if(props.router.query.email === undefined){
            router.push('/soundcloud')
        }
    },[])


    const handleBillingChange = (e) => {
        setBilling(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleStepTwoSubmit = () => {
        if (billing !== '' && payment !== '' ) {
            if(payment.length === 16){
                router.push({
                    pathname: '/soundcloud/stepThree',
                    query: { email: props.router.query.email, billing: billing, payment: payment }
                })
            }else{
                setError('Invalid card number!')
            }
        } else {
            setError('Each field is required!')
        }

    }


    return (
        <div
            className="h-screen w-full bg-orange-600"
        >
            <div className="grid justify-items-center">
                <div>
                    <Image
                        src={soundcloudLogo}
                        height={300}
                        width={300}
                    />
                </div>
                <div>
                    <div className="mb-6">
                        <label htmlFor="billing" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Billing</label>
                        <input type="billing" id="billing" onChange={handleBillingChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="payment" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Payment</label>
                        <input type="payment" id="payment" onChange={handlePaymentChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="w-full flex aling-items-center justify-items-center">

                        {/* <Link href="/step-2"> */}
                        <button onClick={handleStepTwoSubmit} className='bg-orange-600 text-sm border rounded-full border-gray-100 text-gray-100 p-2 flex aling-items-center'>
                            <Image
                                src={soundcloudLogo}
                                height={40}
                                width={70}
                            />
                            <span className="pl-2 pt-2">
                                Continue with {props.router.query.email} &rarr;
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

export default withRouter(stepTwo);