import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const RecitersScreen = ({ reciters, reciterHandler }) => {
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
    <div className='min-vh-100 shadow-lg p-2 bg-red '>
      <h1 className='fs-3 fw-bold text-center'></h1> <hr />
      {reciters && reciters.length > 0 ? (
        reciters.map((reciter) => (
          <div key={reciter.id}>
            <div
              onClick={(e) => {
                reciterHandler(reciter)
                setActiveId(reciter.id)
                console.log(reciter)
              }}
              className={`list-group-item bg-transparent border-0 text-light py-1 d-flex justify-content-around cursor fs-6  ${
               
                reciter.id === activeId && 'active'
                
              }`}
            >
            
                         
              <span onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}><FaUserCircle className='fs-1 ' /> {reciter.name}</span> <span onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>{reciter.rewaya}</span> 
             
              
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  )
}

export default RecitersScreen
