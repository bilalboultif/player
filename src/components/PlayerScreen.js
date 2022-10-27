import { useEffect } from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayerScreen = ({ reciterDetail, chapterDetail }) => {
  const audiLink = (reciter, number) =>
    reciter + '/' + ('00' + number).slice(-3) + '.mp3'

  useEffect(() => {}, [chapterDetail, reciterDetail])
  const handleMouseEnter = e => {

    e.target.style.color="#e09b7d"
    e.target.style.textShadow = "2px 2px 4px #000000"
    e.target.style.fontWeight = "bold"
    e.target.style.textAlign= "center";
    
  }
  const handleMouseLeave = e => {
    e.target.style.color="white"
    e.target.style.textShadow = "2px 2px 4px #000000"
    e.target.style.textAlign= "center";
  }

  return (
    <div style={{border: '1px black'}}>
    <div style={{border: '1px black'}} className='width-vh-50 height-vh-50 shadow-lg p-2 bg-red'>
      <h1 className='menu fs-3 fw-bold text-center'>الاستماع للقرآن الكريم</h1> <hr />

      <h6
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`text-center`}
      >
        اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد
      </h6>
      {reciterDetail !== null && chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <li
              className={`list-group-item bg-transparent border-0 text-light py-1 d-flex justify-content-around cursor fs-6`}
            >
             
              <span>{reciterDetail.name}</span>
              <span className='fw-bold'>:القارئ </span>{' '}
            </li>
           
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-around cursor fs-7 p-0`}
            >
              <span>{chapterDetail.name_arabic}</span>
              <span  className='fw-bold color-blue'> :السورة  </span>{' '}
              
            </li>
          

          
            

      
      
        {/*<audio />*/}
        <AudioPlayer
          autoPlay
          src={audiLink(reciterDetail.Server, chapterDetail.id)}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
     
    
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'>بلال </span>
        </div>
      )}
    </div>
    </div>
  )
}

export default PlayerScreen
