import React from 'react'
import Billing from './components/Billing'
import Business from './components/Business'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import styles from './styles'
//import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
     
      <div className={`${styles.boxWidth} ${styles.paddingX} fixed z-10`}>
        <Navbar/>
      </div>
     
      <div className={`bg-primary ${styles.flexStart} mt-[80px] sm:mt-10`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>  
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <Cta/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App

