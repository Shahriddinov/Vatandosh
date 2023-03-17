import React from 'react'
import Header from '../../component/Layout/Header/Header'
import CategoryShowsCategory from './components/Categories/CategoryShowsCategory'
import CategoryShowsHero from './components/Hero/CategoryShowsHero'

export default function CategoryShows() {
  return (
    <div className='categoryshows'>
      <Header />
      <CategoryShowsHero />
      <CategoryShowsCategory />
    </div>
  )
}
