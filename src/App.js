import { useState } from 'react'
import Developer from './components/Developer'
import DeveloperDetail from './components/DeveloperDetail'
import { useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [selectedDev, setSelectedDev] = useState(null)
  const [devs, setDevs] = useState([])

  const handleSelectedDev = (dev) => {
    console.log('handleSelectedDev called 🌺 with ', dev)
    setSelectedDev(dev)
  }

  useEffect(() => {
    const url = 'https://node-api-devs-for-hire.glitch.me/devs'
    axios.get(url).then((res) => setDevs(res.data.data))
  }, [])

  if (selectedDev) {
    return (
      <DeveloperDetail
        name={selectedDev.name}
        expertise={selectedDev.expertise}
        github={selectedDev.gitHub}
        handleSelectedDev={setSelectedDev}
      />
    )
  }

  return (
    <>
      <h1>Developers for Hire! 👩‍💻</h1>
      <div className="dev-list">
        <div>
          {devs.map((dev, index) => (
            <Developer
              name={dev.name}
              key={index}
              selectDev={() => setSelectedDev(dev)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
