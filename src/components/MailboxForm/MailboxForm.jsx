import { useState } from 'react'
import { useNavigate } from 'react-router'

function MailboxForm({ addBox }) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        _id: null,
        boxSize: 'Small',
        boxOwner: '',
    }) 

    const handleChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addBox(formData)
        navigate('/mailboxes')

    }

  return (
    <div>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxOwner">Enter a Boxholder: </label>
            <input
            type="text"
            id='boxOwner'
            name='boxOwner'
            value={formData.boxOwner}
            onChange={handleChange} />

            <label htmlFor="boxSize">Select a Box Size: </label>
           <select name="boxSize" id="boxSize" value={formData.boxSize} 
           onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
           </select>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MailboxForm