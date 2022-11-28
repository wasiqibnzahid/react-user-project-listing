import React from 'react'
import { Route , Routes} from 'react-router-dom';
import UserProfile from "../Pages/UserProfile"
const routes = () => {
  return (
    <>
   <Routes>
      <Route path="/" element={<UserProfile />} />
    </Routes>
    </>
  )
}

export default routes
