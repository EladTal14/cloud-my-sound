import { useState, useEffect, useRef } from "react";

export function Song({ videoUrl, SC }) {
  const [embedVideo, setEmbedVideo] = useState('')
  const divRef = useRef(null)
  useEffect(() => {
    SC.oEmbed(videoUrl, {
      auto_play: true
    }).then(function (embed) {
      setEmbedVideo({ __html: embed.html })
    })
  }, [SC, videoUrl])
  useEffect(() => {
    divRef.current?.classList.remove('fade-in')
    console.log('first', divRef.current?.classList);
    divRef.current?.classList.add('fade-in')
    divRef.current?.classList.add('moahad')
    console.log(divRef.current?.classList);
  }, [videoUrl])
  if (!embedVideo) return <div>Loading...</div>
  return (
    <div ref={divRef} className="song fade-in" dangerouslySetInnerHTML={embedVideo ? embedVideo : { __html: <iframe title="new" width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F225558827&show_artwork=true"></iframe> }}></div>
  )
}
