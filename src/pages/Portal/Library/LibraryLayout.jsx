import React from 'react'
import { Outlet } from 'react-router-dom'

import OnlineTeachingHeader from '../OnlineTeaching/components/OnlineTeachingHeader/OnlineTeachingHeader'
import OnlineTeachingFooter from '../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter'

const LibraryLayout = () => {
  return (
    <div>
      <OnlineTeachingHeader />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  )
}

export default LibraryLayout