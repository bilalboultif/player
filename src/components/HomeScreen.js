import { useEffect, useState } from 'react'
import axios from 'axios'
import RecitersScreen from './RecitersScreen'
import PlayerScreen from './PlayerScreen'
import ChaptersScreen from './ChaptersScreen'


const HomeScreen = () => {
  const [reciters, serReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [chapterDetail, setChapterDetail] = useState(null)
  
  const [reciterDetail, setReciterDetail] = useState(null)
  
  


  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_arabic.php`)

      serReciters(reciters)
    }

    fetchData()
  }, [])

  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`)

      setChapters(chapters)
    }
    reciters && reciters.length > 0 && fetchData()
  }, [reciters])

 
  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  return (
   
    <div class="row p-0 home-body margin-0">
      <div class="col-md-12">
    <PlayerScreen
            reciterDetail={reciterDetail}
            chapterDetail={chapterDetail}
            
          />
    </div>
    <div class="col-md-12">  
     
  
  
      <div style={{"color": "yellow"}} class="p-5 text-center  col-lg-12 py-0 fs-2 fw-bold shadow-lg">
      قائمة القراء 
      </div>
      <div class="row p-0 home-body">
         
        <div class="col-md-12 scroll fs-2 fw-bold">
        <RecitersScreen style={{"color": "yellow"}} reciters={reciters} reciterHandler={reciterHandler} /> 
        </div>
        <div style={{"color": "yellow"}} class="p-5 text-center  col-lg-12 py-0 fs-2 fw-bold shadow-lg">
        فهرس السور   
      </div>
        <div class="col-md-12 scroll fs-2 fw-bold">
        <ChaptersScreen  chapters={chapters} chapterHandler={chapterHandler} />
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default HomeScreen