import React from 'react'

import AgentNavbar from '../AgentNavbar/AgentNavbar'
import AgentPage from '../AgentPage/AgentPage'
import Footer from '../../FrontPage/Footer/Footer'

const Agent = () => {
  return (
    <>
       <AgentNavbar/>
       <AgentPage/>
       <div style={{marginTop:"10rem"}}>
        <Footer/>
        </div>
    </>
  )
}

export default Agent
