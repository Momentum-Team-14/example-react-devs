const Developer = ({ name, selectDev }) => {
  return (
    <div
      style={{ border: '1px solid purple', margin: '10px', padding: '5px' }}
      onClick={selectDev}
    >
      {name}
    </div>
  )
}

export default Developer
