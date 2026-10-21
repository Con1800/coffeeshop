//import React from 'react'
import { coffeeList } from '../constants/coffeeList';
import type { CoffeeItem } from '../constants/coffeeList';

const CoffeeLists = () => {
  return (
    <>
        <div className='container mx-auto py-36'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
              {coffeeList.map((coffee: CoffeeItem) => (
                <div key={coffee.id}>
                    <div className='shadow-lg rounded-lg'>
                      <img src={coffee.image} className='rounded-t-lg'></img>
                      <div className='p-3'>
                        <p className='text-3xl font-bold text-gray-700 mb-2'>{coffee.name}</p>
                        <p>{coffee.description}</p>
                      </div>
                    </div>
                </div>
              ))}
           
          </div>
        </div>
    </>
  )
}

export default CoffeeLists
