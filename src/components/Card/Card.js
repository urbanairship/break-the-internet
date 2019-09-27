
import React from 'react';
import 'antd/dist/antd.css';
import './Card.scss';

const customCard = ({img, title, subtitle, corner}) => (
  <div className="card box-shadow">
    <img className="pic" src={img} alt="event" />
    <div className="meta">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="corner">{corner}</div>
    </div>
  </div>
);



export default customCard;