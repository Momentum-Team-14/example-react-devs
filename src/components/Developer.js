import axios from 'axios'
import { useEffect, useState } from 'react'

const Developer = ({ name, github, selectDev }) => {
  const [avatarURL, setAvatarURL] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${github}`)
      .then((res) => setAvatarURL(res.data.avatar_url))
  }, [github])

  return (
    <div class="tile u-items-center m-3" onClick={selectDev}>
      {avatarURL && (
        <div class="tile__icon">
          <figure class="avatar">
            <img src={avatarURL} alt="avatar" />
          </figure>
        </div>
      )}
      <div class="tile__container">
        <p className="u-text pt-3 title font-light uppercase">{name}</p>
      </div>
      <div class="tile__buttons m-3">
        <button class="outline btn-info btn--sm uppercase">More Info</button>
      </div>
    </div>
  )
}

export default Developer
