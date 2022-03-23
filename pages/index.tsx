import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from '../animations';
const index = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='flex flex-col px-6 pt-1 flex-grow'>
      <h5 className='my-3 font-medium'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</h5>
      <div className='p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100 ' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h4 className='my-3 font-bolt text-xl tracking-wide'>What i Offer</h4>
        <motion.div variants={stagger} initial="initial" animate="animate" className='grid lg:grid-cols-2 gap-6 '>
          {
            services.map(service => (
              <motion.div variants={fadeInUp}  className='lg:col-span-1 rounded-lg bg-gray-100  dark:bg-dark-200 ' key={service.title}>
                <ServiceCard service={service} />

              </motion.div>
            ))
          } 
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index




// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }
// export const getStaticProps = async (context: GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

