import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RoomsSection from '@/components/RoomsSection'
import EventsSection from '@/components/EventsSection'
import RestaurantSection from '@/components/RestaurantSection'

const PrincipalPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <RoomsSection />
        <EventsSection />
        <RestaurantSection />
      </main>
    </div>
  )
}

export default PrincipalPage