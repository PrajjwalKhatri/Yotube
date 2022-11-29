import React from "react";
import Videoitem from "./VideoItem";

const VideoList =(props)=>{
    const renderedList = props.videos.map((newVideo)=>{
            return(

                <Videoitem 
                key={newVideo.id.videoId}
                newVideo={newVideo} onVideoSelect={props.onVideoSelect}/>)
    })
    return(<div className="ui relaxed divided list">{renderedList}</div>)
}

export default VideoList