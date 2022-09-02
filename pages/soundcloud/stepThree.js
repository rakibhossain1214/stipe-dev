import React, { useEffect } from 'react';
import Image from 'next/image';
import soundcloudLogo from '../../public/assets/images/sound.svg'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'


function stepThree(props) {
    const router = useRouter();
    
    useEffect(()=>{
        if(props.router.query.email === undefined){
            router.push('/soundcloud')
        }
    },[])


    const handleStepThreeSubmit = () => {
        router.push({
            pathname: '/soundcloud/stepFour',
            query: { email: props.router.query.email, billing: props.router.query.email, payment: props.router.query.payment }
        })
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
                        <input disabled type="billing" id="billing" className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" value={props.router.query.billing} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="payment" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Payment</label>
                        <input disabled type="payment" id="payment" className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" value={props.router.query.payment} required />
                    </div>
                    
                    <div className="w-full flex aling-items-center justify-items-center">
                        {/* <Link href="/step-2"> */}
                        <button onClick={handleStepThreeSubmit} className='bg-gray-100 rounded-full text-xl border border-gray-400 text-gray-600 p-2 flex aling-items-center'>
                            <span className="p-3">
                                Charge $12/month
                            </span>
                        </button>

                        {/* </Link> */}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default withRouter(stepThree);