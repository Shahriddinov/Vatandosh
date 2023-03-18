import React from 'react'
import './Pagination.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const Paginator = () => {
    return (
        <div className='pagination'>
            <Stack spacing={2}>
                <Pagination onChange={() => console.log('Hello world')} size='large' count={50} color="primary" />
            </Stack>
        </div>
    )
}
