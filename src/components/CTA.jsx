import React from 'react'
import reactCTALogo from '/img/react-cta-logo.png'

function CTA() {
  return (
    <section className='flex justify-center text-center pb-20 dark:bg-zinc-800 dark:text-white'>
        <div>
            <img className='mx-auto' src={reactCTALogo} alt="" />
            <h3 className='text-4xl font-bold my-3'>Welcome to the React community</h3>
            <p>
                You’re not alone. Two million developers from all over the world visit <br />
                the React docs every month. React is something that people and <br />
                teams can agree on.
            </p>
            <a href="#" className='bg-sky-300 dark:bg-white text-black px-6 py-2 rounded-full inline-block mt-3'>Get started</a>
        </div>
    </section>
  )
}

export default CTA