import React, { useState, useRef } from 'react'

function Contact() {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const messageRef = useRef();

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            firstname: firstnameRef.current.value.trim(),
            lastname: lastnameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            phone: phoneRef.current.value.trim(),
            address: addressRef.current.value.trim(),
            message: messageRef.current.value.trim(),
        }

        const newErrors = {};

        if(!values.firstname) newErrors.firstname = "First name is required";
        if(!values.lastname) newErrors.lastname = "Last name is required";
        if(!values.email) newErrors.email = "Email is required";
        else if (!validateEmail(values.email)) newErrors.email = "Invalid Email format";
        if(!values.phone) newErrors.phone = "Phone is required";
        if(!values.address) newErrors.address = "Address is required";
        if(!values.message) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            lastnameRef.current.value = "";
            firstnameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            addressRef.current.value = "";
            messageRef.current.value = "";
        }
    }

  return (
    <div className='dark:bg-zinc-800 dark:text-white h-full'>
        <div className='container mx-auto py-20'>
            <h1 className='text-4xl font-bold text-center mb-15'>Contact</h1>
            <form action="" className='w-[70%] mx-auto space-y-4' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <input 
                            type="text" 
                            placeholder='First Name' 
                            ref={firstnameRef}
                            className='w-full p-3 border border-gray-300 rounded-full outline-none'
                        />
                        {errors.firstname && <p className='text-red-500 text-sm mt-1'>{errors.firstname}</p>}
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Last Name' 
                            ref={lastnameRef}
                            className='w-full p-3 border border-gray-300 rounded-full outline-none'
                        />
                        {errors.lastname && <p className='text-red-500 text-sm mt-1'>{errors.lastname}</p>}
                    </div>

                    <div>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            ref={emailRef}
                            className='w-full p-3 border border-gray-300 rounded-full outline-none'
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Phone' 
                            ref={phoneRef}
                            className='w-full p-3 border border-gray-300 rounded-full outline-none'
                        />
                        {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                    </div>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Address' 
                        ref={addressRef}
                        className='w-full p-3 border border-gray-300 rounded-full outline-none'
                    />
                    {errors.address && <p className='text-red-500 text-sm mt-1'>{errors.address}</p>}
                </div>
                <div>
                    <textarea 
                        placeholder='Message' 
                        rows={5}
                        ref={messageRef}
                        className='w-full p-3 border border-gray-300 rounded-4xl outline-none resize-none'
                    ></textarea>
                    {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
                </div>

                <button type='submit' className='px-10 py-3 rounded-full bg-sky-300 cursor-pointer dark:bg-zinc-900'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
