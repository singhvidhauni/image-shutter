import React from 'react';
import './panel.styles.css';

export const Panel = (props) => (
    <div className='panel-container'>
        <img src={`https://picsum.photos/250/180?random=${props.photo.id}`} loading="lazy" alt={`random graphic`}/>
        <h2>{props.photo.id}</h2>
        <h3>{props.photo.title}</h3>
    </div>
)
