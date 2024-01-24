import React from 'react';
import './Sidebar.css';
import {Bookmark, Chat, Groups, QuestionMark, RssFeed,PlayCircleFilled,Work,Event,LocalLibrary} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <RssFeed className='sidebarIcon' />
                  <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="sidebarListItem">
                  <Chat className='sidebarIcon' />
                  <div className="sidebarListItemText">Chat</div>
                </li>
                <li className="sidebarListItem">
                  <PlayCircleFilled className='sidebarIcon' />
                  <div className="sidebarListItemText">PlayCircleFilled</div>
                </li>
                <li className="sidebarListItem">
                  <Groups className='sidebarIcon' />
                  <div className="sidebarListItemText">Groups</div>
                </li>
                <li className="sidebarListItem">
                  <Bookmark className='sidebarIcon' />
                  <div className="sidebarListItemText">Bookmarks</div>
                </li> 
                <li className="sidebarListItem">
                  <QuestionMark className='sidebarIcon' />
                  <div className="sidebarListItemText">Questions</div>
                </li>
                <li className="sidebarListItem">
                  <Work className='sidebarIcon' />
                  <div className="sidebarListItemText">Jobs</div>
                </li>
                <li className="sidebarListItem">
                  <Event className='sidebarIcon' />
                  <div className="sidebarListItemText">Events</div>
                </li>
                <li className="sidebarListItem">
                  <LocalLibrary className='sidebarIcon' />
                  <div className="sidebarListItemText">Courses</div>
                </li>
            </ul>
            <button className='sidebarButton' >Show More</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>

              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>

              <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFrienName">Joe Dom</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar