import yycoffee from '/images/yycoffee.jpg'

const Home = () => {

  return (
    <section className='container mx-auto'>
      <div className="flex items-center justify-center ">
        <div className="mt-4 lg:mt-16">
          <h1 className="font-bold tracking-tight">YY Coffee shop</h1>
          <p></p>
        </div>
      </div>
      <div className='w-full lg:p-8'>
        <div className='flex justify-center'>
          <img src={yycoffee} alt='logo' className='rounded-3xl'/>
        </div>
      </div>
    </section>
  )
}

export default Home
