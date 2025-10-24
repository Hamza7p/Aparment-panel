import Categories from '@/components/Home/Category'
import HeroSlider from '@/components/Home/Slider'
import React from 'react'

const Home = () => {
  return (
    <div className="home-page">
        <HeroSlider />
        <Categories />
        
      <h1>Welcome to the Home Page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illo adipisci distinctio deserunt delectus nesciunt eum laborum voluptatem? Doloremque minus quos ab amet blanditiis magni, debitis consequatur? Provident, illum? Doloribus.</p>
    </div>
  )
}

export default Home