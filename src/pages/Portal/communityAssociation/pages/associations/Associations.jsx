import React from 'react'
import './associations.scss'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AssociationsCard from '../../components/AssociationsCard/AssociationsCard';
import ArrowDown from '../../../../../assets/images/icons/arrowDown.svg'

const Associations = () => {

    const [age, setAge] = React.useState('Barcha davlatlar');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <div className='associations__wrapper'>
            <div className="associations__top">
                <h1>Jamoat birmashlari</h1>
                <FormControl className='form__control'>
                    <Select
                    value={age}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent={ExpandMoreIcon}
                    >
                        <MenuItem value='Barcha davlatlar'>Barcha davlatlar</MenuItem>
                        <MenuItem value={20}>Qirg'iziston</MenuItem>
                        <MenuItem value={30}>Qozog'iston</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="associations__grid">
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
                <AssociationsCard />
            </div>
            <button className='more__less__button'> <img src={ArrowDown} alt="" />Ko'proq ko'rsatish</button>
        </div>
    )
}

export default Associations