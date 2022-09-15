import { useState, useEffect } from 'react'
import axios from 'axios'
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
    <div>
      <button
        onClick={() => {
          handleSelectedDev(null)
        }}
      >
        Go Back to List
      </button>
      <p>{name}</p>
      <p>Expertise: {expertise}</p>
      <ul>
        {repos.map((repo) => (
          <li>
            <a href={repo.url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeveloperDetail
