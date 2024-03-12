import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className='h-10 bg-blue-900 flex justify-center items-center gap-96'>
          <div className='text-white flex gap-5 '>
            <h1>1-800-123-456789</h1>
            <h1>Example@gmail.com</h1>
          </div>
          <div className='text-white '>
            <h1>Working hours - Mon-Fri: 8:30-18:30</h1>
          </div>
        </div>

        <div className='h-16 flex justify-center items-center gap-72'>
            <h1 className='text-2xl font-bold text-blue-900'>PATRAI</h1>
            <div>
                <ul className='flex justify-center gap-8 text-sm'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>PROJECTS</li>
                    <li>BLOGS</li>
                    <li>PAGES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
        <div className='h-28 bg-blue-900 flex justify-around items-center'>
             <h1 className='text-white font-semibold text-4xl'>Career</h1>
            <div className='text-white'>
                <h1 className='text-sm'>HOME  |  CAREER</h1>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar