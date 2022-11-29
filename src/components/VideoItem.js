import React from "react";
import './VideoItem.css'
const Videoitem =(props)=>{
    return(<div  className="video-item item" onClick={()=>{props.onVideoSelect(props.newVideo)}}>
        <img alt={props.newVideo?.snippet?.title} className="ui image" src={props.newVideo.snippet.thumbnails.medium.url}/>
        <div className="content">
       <div className="header"> {props.newVideo?.snippet.title}</div>
       </div>
        </div>)
}

export default Videoitem