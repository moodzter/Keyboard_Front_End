import {useState} from 'react';

const Edit = (props) => {
  const [keyboard, setKeyboard] = useState({...props.keyboard})


  const handleChange = (event) => {
    setKeyboard({...keyboard, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(keyboard)
  }


  return (
    <>
      <details>
        <summary>Edit Keyboard Build</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="brand">Keyboard: </label>
          <input type="text" name="brand" value={keyboard.brand} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="switches">Switches: </label>
          <input type="text" name="switches" value={keyboard.switches} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="keycaps">Keycaps: </label>
          <input type="text" name="keycaps" value={keyboard.keycaps} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="stabilizers">Stabilizers: </label>
          <input type="text" name="stabilizers" value={keyboard.stabilizers} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" value={keyboard.price} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="size">Keyboard Size: </label>
          <input type="text" name="size" value={keyboard.size} onChange={handleChange}/>
          <br />
          <br />
          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit;


