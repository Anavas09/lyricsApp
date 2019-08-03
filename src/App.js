import React, { Fragment ,useEffect, useState} from 'react';
import axios from 'axios'
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';

function App() {

  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setInfo] = useState({});

  const fetchLyric = async (search) => {
    const { artist, song } = search
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`

    await axios.get(url)
      .then(res => {
        const { lyrics } = res.data;
        setLyric(lyrics)
        setArtist(artist)
      })
  }



  useEffect(()=>{
    
    const fethInfo = async () => {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
      if(artist){
        await axios.get(url)
        .then(res => {
          const { artists } = res.data
          setInfo(artists[0])
        })
      }
    }

    fethInfo();

  },[artist])



  return (
    <Fragment>
      <Form fetchLyric={fetchLyric}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}/>
          </div>
          <div className="col-md-6">
            <Song lyric={lyric}/>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
