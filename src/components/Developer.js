const Developer = ({ devObj, selectDev }) => {
  return (
    <div
      style={{ border: '1px solid purple', margin: '10px', padding: '5px' }}
      onClick={() => selectDev(devObj)}
    >
      {devObj.name}
    </div>
  )
}

export default Developer
