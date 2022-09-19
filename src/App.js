import { useState } from 'react'
import Developer from './components/Developer'
import DeveloperDetail from './components/DeveloperDetail'
import { useEffect } from 'react'
import axios from 'axios'
import 'cirrus-ui'
import { InputField } from './components/Forms'

export const App = () => {
  const [selectedDev, setSelectedDev] = useState(null)
  const [devs, setDevs] = useState([])
  const showForms = true

  useEffect(() => {
    const url = 'https://node-api-devs-for-hire.glitch.me/devs'
    axios.get(url).then((res) => setDevs(res.data.data))
  }, [])

  if (showForms) {
    return <InputField />
  }

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
      <header className="header p-3-md">
        <div className="header-brand">
          <h1 className="header title">Developers for Hire! 👩‍💻</h1>
        </div>
      </header>
      <div className="content">
        <div className="dev-list">
          {devs
            .filter((dev) => dev.available)
            .map((dev, index) => (
              <Developer
                name={dev.name}
                github={dev.gitHub}
                key={index}
                selectDev={() => setSelectedDev(dev)}
              />
            ))}
        </div>
      </div>
    </>
  )
}
