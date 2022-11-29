import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const KEY ="AIzaSyD0tWOnKRjFl61XqM2nDfRxEATCrSfC4G4"


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 20,
      key: KEY
  }
});