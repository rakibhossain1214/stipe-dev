import React from 'react';
import { Formik } from 'formik';

function checkoutDetails() {

     function handleCheckout(values) {
        fetch(`${window.location.origin}/api/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                paymentMethod: [
                    'card'
                ],
                name: values.name,
                surname: values.name,
                email: values.name
            }),
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })

    }


    return (
        <div>
            <Formik
                initialValues={{ name: 'name', surname: 'surname', email: 'email' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    handleCheckout(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="grid justify-items-center mt-10 text-2xl">
                        <input
                            type="name"
                            name="name"
                            className='text-2xl p-2 m-2'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />

                        <input
                            type="surname"
                            name="surname"
                            className='text-2xl p-2 m-2'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                        />

                        <input
                            type="email"
                            name="email"
                            className='text-2xl p-2 m-2'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default checkoutDetails;