import { useRef } from 'react'


export function Result({ title, picture, formationTile, setVideoUrl, embedUrl }) {
  const resultRef = useRef(null)
  const handleClick = () => {
    setVideoUrl(embedUrl)
    resultRef.current.classList.add('fade-out')
    setTimeout(() => { resultRef.current.classList.add('hidden') }, 1000)
  }
  return (
    <div ref={resultRef} className={`${formationTile ? 'no-pic' : ''} result flex`} onClick={handleClick}>
      {!formationTile && <span className="fs16">{title}</span>}
      {formationTile && <img src={picture ? picture : require('../../../assets/img/no-img.jpg').default} alt={title} />}
    </div>
  )
}
