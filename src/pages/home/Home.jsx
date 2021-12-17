
import React from 'react'
import Featured from '../../components/Topbar/featured/Featured'
import List from '../../components/list/List'

import Topbar from '../../components/Topbar/Topbar'



import "./home.scss"



const Home = ({type}) => {
    return (
        <div className="home">
            <Topbar/>
            <Featured type={type}/>
            <List/>
            <List/>
            <List/>
            <List/>

            
        </div>
    )
}

export default Home
