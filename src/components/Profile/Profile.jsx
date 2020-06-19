import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCAQ8WCNpv0xZU6Hia2R5SNExAUxHO7q4CLHNYpS_Zjw7FlirR&usqp=CAU'></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
      
    </div>
    );
}

export default Profile;