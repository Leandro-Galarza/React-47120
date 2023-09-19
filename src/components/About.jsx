import React, { useEffect } from 'react'
import { Center } from '@chakra-ui/react'

const About = () => {

  useEffect(() => {
    const clicking = () => {
    }
  window.addEventListener("click",clicking )

return () => {
  window.removeEventListener("click", clicking)

} }, [])

  return (
    <div  className='abC'>
        <Center>
        <div className='abT'>
      <p>
       Welcome to Fake Music Store, where we deliver dreams 
      </p>
      <h4 className='P2'>
      through the power of music.
      </h4>
      </div>
      <img className='abH' src="https://static.roland.com/assets/promos/jpg/billboard_me-90.jpg"/>
      </Center>

    </div>
  )
}

export default About