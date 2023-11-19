import React from 'react'
import { products } from '../Constants'
import PopularProductCard from '../Components/PopularProductCard'



export default function PopularProduct() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>


      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Product</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience Top notch quality and styled with out selection... baki time helani</p>


        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1'>


          {products.map((product)=>(
            <PopularProductCard key={product.name} {...product}/>
          ))}

        </div>
      </div>
    </section>
  )
}
