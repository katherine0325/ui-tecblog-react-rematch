import React from 'react';
import './index.css';

export default function ArticleLine({number, title, date}) {
  return (
    <div className="article-line">
      <div className="number">{number}</div>
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </div>
  )
}
