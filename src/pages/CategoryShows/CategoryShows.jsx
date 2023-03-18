import React from 'react'
import Header from '../../component/Layout/Header/Header'
import CategoryShowsCategory from './components/Categories/CategoryShowsCategory'
import CategoryShowsHero from './components/Hero/CategoryShowsHero'
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";

export default function CategoryShows() {
  return (
    <div className='categoryshows'>
      <WhriteHeader />
      <CategoryShowsHero />
      <CategoryShowsCategory />
    </div>
  )
}
