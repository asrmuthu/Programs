import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nextpage_impesis1 = () => {
    const navigate = useNavigate();
  return (
    <div>
       
        <p>This is the first page of the Impesis component.</p>
        <p>Click the button to navigate to the next page.</p>

         <button onClick={() => navigate('/next')}>next</button>
    </div>
  )
}

export default Nextpage_impesis1