import React from 'react'
import './aboutBook.scss'

import FullStar from '../../../../../assets/images/library/fullStar.svg'
import EmptyStar from '../../../../../assets/images/library/emptyStar.svg'
import { Button } from '@mui/material'

import Book1 from '../../../../../assets/images/library/ken.png'
import Book2 from '../../../../../assets/images/library/agata.png'
import Book3 from '../../../../../assets/images/library/jeyn.png'
import Book4 from '../../../../../assets/images/library/paulo.png'
import BookCard from '../../components/BookCard/BookCard'

const AboutBook = () => {

    const rating = 4
    const ratingCount = 421

    const fullStars = Math.floor(rating)
    const emptyStars = 5 - fullStars

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img src={FullStar} alt="" />)
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img src={EmptyStar} alt="" />)
    }

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
        <div className="about__book">
            <div className="container about__book__wrapper">
                <div className="book">
                    <div className="about__book__cover">
                        <img src={Book1} alt="" />
                    </div>
                    <div className="book__description">
                        <h1>Book title</h1>
                        <div className="book__rating">
                            <p>{rating}</p>
                            {stars}
                            <span>({ratingCount})</span>
                        </div>
                        <h3>Author: <span>Falonchi</span></h3>
                        <h3>Language: <span>Falonchi</span></h3>
                        <Button variant="contained" size="large"  sx={{ width: "max-content", padding: '12px 22px', margin: "8px 0", boxShadow: 0, borderRadius: '12px', background: '#065EA9', textTransform: 'none', fontFamily: "Inter", fontSize: '14px', lineHeight: '24px', fontWeight: 400}}>
                            Сделай предложение
                        </Button>
                        <h3>About the book</h3>
                        <p className='description__text'>Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he </p>
                        <span className='description__more'>Read more</span>
                    </div>
                </div>
                <div className="book__details">
                    <h2>О деталях книги</h2>
                    <div className="horizontal__line"/>
                    <div className="details__row">
                        <ul>
                            <li>For ages: <span>9 years or older</span></li>
                            <li>Format: <span>Hard cover</span></li>
                            <li>Published date: <span>January 1, 1998</span></li>
                            <li>Language: <span>English</span></li>
                        </ul>
                        <ul>
                            <li>For ages: <span>9 years or older</span></li>
                            <li>Format: <span>Hard cover</span></li>
                            <li>Published date: <span>January 1, 1998</span></li>
                            <li>Language: <span>English</span></li>
                        </ul>
                    </div>
                </div>
                <div className="recommended__books">
                    <h1>Sizni qiziqtirishi mumkin</h1>
                    <div className="books__row">
                        {books.map((book) => (
                            <BookCard {...book}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBook