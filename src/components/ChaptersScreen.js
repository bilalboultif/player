import { useState } from 'react'

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState('')
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
    <div className='min-vh-80 shadow-lg p-1 bg-red'>
      
      <h1 className='fs-3 fw-bold text-center '></h1> <hr />
      <ul className='list-group text-end'>
      
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter.id}>
              <li
              
                onClick={(e) => {
                  chapterHandler(chapter)
                  setActiveId(chapter.id)
                }}
                
                className={`list-group-item bg-transparent border-0 text-light py-1 d-flex justify-content-center cursor fs-6 ${
                  chapter.id === activeId && 'active'
                }`}
                
              >

                <b  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}b
      title={`رقم الصفحة   ${chapter.pages[1]} عدد الآيات ${chapter.verses_count}`}>〘{chapter.name_arabic}〙</b> <span>{chapter.translated_name.name}</span>
              </li>
              <hr />
            </div>
          ))
        ) : (
          <div className='text-center'>
            <span className='spinner-border'></span>
          </div>
        )}
      </ul>
      
    </div>
  )
}

export default ChaptersScreen