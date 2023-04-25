import React from 'react'
import './bookCard.scss'

import FullStar from '../../../../../assets/images/library/fullStar.svg'
import EmptyStar from '../../../../../assets/images/library/emptyStar.svg'

const BookCard = ({cover, title, author, rating, ratingCount}) => {

    console.log(rating)

    const fullStars = Math.floor(rating)
    const emptyStars = 5 - fullStars

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img src={FullStar} alt="" />)
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img src={EmptyStar} alt="" />)
    }

    return (
        <div className="book__card">
            <div className="book__cover">
                <img src={cover} alt="" />
            </div>
            <div className="book__info">
                <h3>{title}</h3>
                <p>{author}</p>
                <div className="book__rating">
                    <p>{rating}</p>
                    {stars}
                    <span>({ratingCount})</span>
                </div>
            </div>
        </div>
    )
}

export default BookCard