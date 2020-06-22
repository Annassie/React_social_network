import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCAQ8WCNpv0xZU6Hia2R5SNExAUxHO7q4CLHNYpS_Zjw7FlirR&usqp=CAU'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
        </div>

    </div>
  );
}

export default ProfileInfo;