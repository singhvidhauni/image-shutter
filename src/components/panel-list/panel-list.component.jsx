import React from "react";
import {Panel} from '../panel/panel.component';
import './panel-list.styles.css';
export const PanelList = props => (
    <div className="panel-list">
        {
            props.photos.map(photo => <Panel key={photo.id} photo={photo}/>)
        }
    </div>
);