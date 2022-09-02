import React, { useState } from 'react';
import Image from 'next/image';
import soundcloudLogo from '../../public/assets/images/sound.svg'
import Link from 'next/link';
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleEmailSubmit = () => {
        if (email !== '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            router.push({
                pathname: '/soundcloud/stepTwo',
                query: { email: email }
            })

        } else {
            setError('Email must be vlaid!')
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
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100">Email address</label>
                        <input type="email" id="email" onChange={handleEmailChange} className="bg-orange-600 border border-orange-300 text-gray-100 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className="w-full flex aling-items-center justify-items-center">

                        {/* <Link href="/step-2"> */}
                        <button onClick={handleEmailSubmit} className='bg-orange-600 text-xl border rounded-full border-gray-100 text-gray-100 p-2 flex aling-items-center'>
                            <Image
                                src={soundcloudLogo}
                                height={40}
                                width={70}
                            />
                            <span className="pl-2 pt-2">
                                Continue  &rarr;
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

export default Home;