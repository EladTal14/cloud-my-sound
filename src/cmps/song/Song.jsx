import { useState, useEffect } from "react";

export function Song({ videoUrl, SC }) {
  const [embedVideo, setEmbedVideo] = useState('')
  useEffect(() => {
    SC.oEmbed(videoUrl, {
      auto_play: true
    }).then(function (embed) {
      setEmbedVideo({ __html: embed.html })
    })
  }, [SC, videoUrl])

  if (!embedVideo) return <div>Loading...</div>
  return (
    <div className="song fade-in" dangerouslySetInnerHTML={embedVideo ? embedVideo : { __html: <iframe title="new" width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F225558827&show_artwork=true"></iframe> }}></div>
  )
}
