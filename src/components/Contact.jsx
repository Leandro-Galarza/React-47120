import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    const clicking = () => {

    }
  window.addEventListener("click",clicking )

return () => {
  window.removeEventListener("click", clicking)

} }, [])

  return (
    <div  className='pp'>Contact
      <p>this is contact page
        soon we will add things such as a number social networks and adress
      </p>
    </div>
  )
}

export default Contact