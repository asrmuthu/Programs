import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nextpage_impesis2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      
        <p>This is the first page of the Impesis component.</p>
        <p>Click the button to navigate to the next page.</p>
          <button onClick={() => navigate('/')}>back</button>
    </div>
  )
}

export default Nextpage_impesis2