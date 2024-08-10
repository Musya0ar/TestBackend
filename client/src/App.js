import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    ) 
  }, [])


  return (
    <div>
      {typeof backendData.result === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        backendData.result.map((result, i) => (
          <p key={i}>{result}</p>
        ))
      )}
    </div>
    
  )
}

export default App