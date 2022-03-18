import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-14 xl:px-20 ' >
      <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light rounded-2xl lg:col-span-9 '>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
