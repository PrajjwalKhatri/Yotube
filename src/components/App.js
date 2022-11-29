import React from "react";
import SearchBar from "./SearchBar";
import Youtbe from "./Youtbe";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state={videos:[],selectedVideo:null}

    onFormSubmit=async term=>{
      const response = await  Youtbe.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({videos:response.data.items})
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
 
    }
// term)=>{
    // Youtbe.get('/search',{
    //     params:{
    //         q: term
    //     }
    // });
    render(){
        return(
            
            <div className="ui container"><SearchBar onFormSubmit={this.onFormSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}

export default App;