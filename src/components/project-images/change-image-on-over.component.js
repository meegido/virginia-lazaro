import { useRef } from 'react'

export const ChangeImageOnOver = ({primaryImg, overImg, className}) => {
  const imageRef = useRef(null)
  return ( 
    <>
      <img src={primaryImg} 
        className={className}
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
