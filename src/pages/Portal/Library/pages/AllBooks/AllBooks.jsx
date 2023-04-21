import React, { useState } from 'react'
import './allBooks.scss'
import Hero from '../../components/Hero/Hero';
import BookCard from '../../components/BookCard/BookCard'

import { CiSearch } from 'react-icons/ci'
import { HiOutlineChevronDown } from 'react-icons/hi'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import HeroImage from '../../../../../assets/images/library/libraryHero.png'
import HeroImage1 from '../../../../../assets/images/library/libraryHero1.png'
import HeroImage2 from '../../../../../assets/images/library/libraryHero2.png'
import { FormControl, MenuItem, Select } from '@mui/material';

import Book1 from '../../../../../assets/images/library/ken.png'
import Book2 from '../../../../../assets/images/library/agata.png'
import Book3 from '../../../../../assets/images/library/jeyn.png'
import Book4 from '../../../../../assets/images/library/paulo.png'

const AllBooks = () => {

    const [activeSort, setActiveSort] = useState('new')

    const sliderData = [
        {
            id: 1,
            image: HeroImage,
            text: "Cамая уютная онлайн библиотека"
        },
        {
            id: 2,
            image: HeroImage1,
            text: "Eng shinam kutubxona"
        },
        {
            id: 3,
            image: HeroImage2,
            text: "Most comfy library"
        },
    ]

    const books = [
        {
            id: 121,
            cover: Book1,
            title: "Kakku uyasi uzra parvoz",
            author: "Ken Kizi",
            rating: 4.2,
            ratingCount: 421
        },
        {
            id: 122,
            cover: Book2,
            title: "Sharqiy ekspressdagi qotillik",
            author: "Erix Mariya Remark",
            rating: 5,
            ratingCount: 421
        },
        {
            id: 123,
            cover: Book3,
            title: "Andisha va g'urur",
            author: "Jeyn Ostin",
            rating: 3.2,
            ratingCount: 421
        },
        {
            id: 123,
            cover: Book4,
            title: "Alkimyogar",
            author: "Paulo Koelo",
            rating: 4.2,
            ratingCount: 421
        }
    ]

    return (
        <>
            <div className="all__books__container container">
                <Hero sliderData={sliderData} />
                <div className="all__books__search">
                    <h2>O‘zingizni qiziqtirgan darsni o‘rganing</h2>
                    <div className="all__books__row">
                        <div className="all__books__search__input">
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 360, height: 51, border: '1px solid #EAEDF6', borderRadius: '12px', boxShadow: 0}}
                                >
                                <InputBase
                                    sx={{ ml: 1, flex: 1, fontFamily: "Inter", fontSize: '14px', fontWeight: 400, color: '#656B70'}}
                                    placeholder="Поиск"
                                    inputProps={{ 'aria-label': 'Поиск' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <CiSearch color='#065EA9' size={24}/>
                                </IconButton>
                            </Paper>
                            <Button variant="contained" size="large"  sx={{ padding: '12px 22px',boxShadow: 0, borderRadius: '12px', background: '#065EA9', textTransform: 'none', fontFamily: "Inter", fontSize: '14px', lineHeight: '24px', fontWeight: 400}}>
                                Сделай предложение
                            </Button>

                        </div>
                        <div className="all__books__filter">
                            <FormControl sx={{ minWidth: 180, height: 48 }}>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value=''
                                    IconComponent={HiOutlineChevronDown}
                                    sx={{fontFamily: "Inter", fontSize: '14px', fontWeight: 400, color: '#656B70', borderRadius: '12px', boxShadow: 0}}
                                    >
                                    <MenuItem value="">
                                        По языку
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ minWidth: 180, height: 48 }}>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value=''
                                    IconComponent={HiOutlineChevronDown}
                                    sx={{fontFamily: "Inter", fontSize: '14px', fontWeight: 400, color: '#656B70', borderRadius: '12px', boxShadow: 0}}
                                    >
                                    <MenuItem value="">
                                        По типу
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="all__books__sort">
                        <ul>
                            <li className={activeSort === 'new' ? 'active' : '' } onClick={() => setActiveSort('new')}>Новинки</li>
                            <li className={activeSort === 'popular' ? 'active' : ''} onClick={() => setActiveSort('popular')}>Популяреое</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grey__bg">
                <div className="all__books__grid container">
                    {books.map((book) => (
                        <BookCard {...book}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBooks