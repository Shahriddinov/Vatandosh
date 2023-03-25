import React from 'react'
import { BsFillCalendarHeartFill } from 'react-icons/bs'
import { TfiGallery } from 'react-icons/tfi'
import { MdOutlineIncompleteCircle } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './InformationServicesComponent.scss'

const InformationServicesComponent = () => {
  return (
    <div className='informationServicesComponent'>
      <h2 className="informationServicesComponent-title">Axborot xizmati</h2>
      <ul className="informationServicesComponent-list">
        <li>
          <span><BsFillCalendarHeartFill size={22} /></span>
          <Link>Yangiliklar</Link>
        </li>
        <li>
          <span><TfiGallery size={22} /></span>
          <Link>Mediateka</Link>
        </li>
        <li>
          <span><MdOutlineIncompleteCircle size={22} /></span>
          <Link>Infografika</Link>
        </li>
        <li>
          <span><GiOpenBook size={22} /></span>
          <Link>Vatandoshlar jurnali</Link>
        </li>
      </ul>
    </div>
  )
}

export default InformationServicesComponent