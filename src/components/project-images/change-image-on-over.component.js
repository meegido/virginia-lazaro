import { useRef } from 'react'

export const ChangeImageOnOver = ({primaryImg, overImg}) => {
  const imageRef = useRef(null)
  return ( 
    <>
      <img src={primaryImg} 
        className="cover" 
        alt="" 
        ref={imageRef} 
        onMouseOver={() => {
          imageRef.current.src = overImg
        }} 
        onMouseLeave={() => {
          imageRef.current.src = primaryImg
        }}/>
    </>
  )
}
