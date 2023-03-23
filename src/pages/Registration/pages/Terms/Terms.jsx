import React from 'react'
import './terms.scss'

const Terms = ({toggleModal, handleCheckbox}) => {

    const acceptTerms = () => {
        toggleModal();
        handleCheckbox();
    }

  return (
    <div className="wrapper">
        <div className="modal">
            <h2>Foydalanish shartlari</h2>
            <div className="terms">
                <div className="term">
                    <h3>1.1 Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus quis, excepturi commodi numquam enim ea dolore at officia quam eos beatae aperiam est ad quidem velit ex modi iusto!</p>
                </div>
                <div className="term">
                    <h3>1.1 Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus quis, excepturi commodi numquam enim ea dolore at officia quam eos beatae aperiam est ad quidem velit ex modi iusto!</p>
                </div>
                <div className="term">
                    <h3>1.2 Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus quis, excepturi commodi numquam enim ea dolore at officia quam eos beatae aperiam est ad quidem velit ex modi iusto!</p>
                </div>
                <div className="term">
                    <h3>1.3 Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus quis, excepturi commodi numquam enim ea dolore at officia quam eos beatae aperiam est ad quidem velit ex modi iusto!</p>
                </div>
                <div className="term">
                    <h3>1.4 Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus quis, excepturi commodi numquam enim ea dolore at officia quam eos beatae aperiam est ad quidem velit ex modi iusto!</p>
                </div>
            </div>
            <div className="fade" />
            <div className="terms__buttons">
                <button className='close__terms' onClick={toggleModal}>Ortga qaytish</button>
                <button className='accept__terms' onClick={acceptTerms}>Shartlarga roziman</button>
            </div>
        </div>
    </div>
  )
}

export default Terms