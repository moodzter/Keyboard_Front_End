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
        <summary className='btn btn-warning'>Edit Build</summary>
        <form className=' showRows form-control' onSubmit={handleSubmit}>
          <label htmlFor="brand">Keyboard: </label>
          <input className='form-control' type="text" name="brand" value={keyboard.brand} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="switches">Switches: </label>
          <input className='form-control' type="text" name="switches" value={keyboard.switches} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="keycaps">Keycaps: </label>
          <input className='form-control' type="text" name="keycaps" value={keyboard.keycaps} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="stabilizers">Stabilizers: </label>
          <input className='form-control' type="text" name="stabilizers" value={keyboard.stabilizers} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="price">Price: </label>
          <input className='form-control' type="number" name="price" value={keyboard.price} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="size">Keyboard Size: </label>
          <input className='form-control' type="text" name="size" value={keyboard.size} onChange={handleChange}/>
          <br />
          <br />
          <input className='btn btn-outline-success' type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit;


