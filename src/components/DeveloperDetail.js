import { useState, useEffect } from 'react'
import axios from 'axios'
const DeveloperDetail = ({ name, expertise, github, handleSelectedDev }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    console.log('useEffect runs 🍳')
    axios
      .get(`https://api.github.com/users/${github}/repos`)
      .then((res) => console.log(res))
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
        <li>repo1</li>
        <li>repo2</li>
        <li>repo3</li>
      </ul>
    </div>
  )
}

export default DeveloperDetail
