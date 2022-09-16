import { useState, useEffect } from 'react'
import axios from 'axios'
import orderBy from 'lodash/orderBy'

const DeveloperDetail = ({ name, expertise, github, handleSelectedDev }) => {
  const [repos, setRepos] = useState([])
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    console.log('useEffect runs 🍳')
    axios.get(`https://api.github.com/users/${github}/repos`).then((res) => {
      const repoData = res.data.map((repo) => ({
        name: repo.name,
        url: repo.html_url,
      }))
      setRepos(repoData)
      setAvatar(res.data[0].owner.avatar_url)
    })
  }, [github])

  console.log('About to return content 🥥')
  return (
    <div className="dev-detail content m-3">
      <button
        onClick={() => {
          handleSelectedDev(null)
        }}
        className="btn-link"
      >
        Go Back to List
      </button>

      <div class="tile u-items-center mb-3">
        <div class="tile__icon">
          <figure class="avatar avatar--xl">
            {avatar && <img src={avatar} />}
          </figure>
        </div>
        <div class="tile__container">
          <h2 className="uppercase tile__title m-0">{name}</h2>
        </div>
      </div>
      <p>Expertise: {expertise}</p>
      <div className="repo-list">
        <h4>Github Repos</h4>
        <ul>
          {orderBy(repos, ['updated_at', 'desc']).map((repo) => (
            <li key={repo.id}>
              <a href={repo.url}>{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeveloperDetail
