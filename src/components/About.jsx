import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    const clicking = () => {
    }
  window.addEventListener("click",clicking )

return () => {
  window.removeEventListener("click", clicking)

} }, [])

  return (
    <div  className='pp'>About
      <p>this is about page</p>
    </div>
  )
}

export default About