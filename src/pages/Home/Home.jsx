import React from 'react';
import './Home.css'
import Topbar from '../../componnets/topbar/Topbar';
import Sidebar from '../../componnets/sidebar/Sidebar';
import Feed from '../../componnets/feed/Feed';
import Rightbar from '../../componnets/rightbar/Rightbar';

const Home = () => {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home