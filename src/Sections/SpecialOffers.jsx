import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

export default function SpecialOffers() {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>


      <div className='flex-1 '>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className=' flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
           <span className="text-coral-red "> Special </span> 
           Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi facilis recusandae.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <Button label="Learn More" backgroundColour="bg-white" borderColour="border-slate-gray" textColour="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}
