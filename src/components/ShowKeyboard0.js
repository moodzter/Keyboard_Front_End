import { useEffect, useState, useRef } from "react";
import {Table, Button} from 'reactstrap';
import axios from 'axios';
import Edit from './Edit';
import Dialog from './Dialog';
import Board0 from './Board0';
    
const ShowKeyboard0 = () => {
    // const [board, setBoard] = useState([])
    const [keyboard, setKeyboard] = useState([])
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        nameKeyboard: ""
    })
    const idBoardRef = useRef()
    const handleDialog = (message, isLoading, nameKeyboard) => {
        setDialog({
            message,
            isLoading,
            nameKeyboard
        })
    }
    // pagination code:
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [boardsPerPage, setBoardsPerPage] = useState(5);

    const getBoard = () => {
        axios   
            .get('http://localhost:8000/api/keyboards')
            .then (
                (response) => setKeyboard(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    // pagination code:
    // const fetchBoards = async () => {
    //     setLoading(true);
    //     const res = await axios.get('http://localhost:8000/api/keyboards')
    //     setBoard(res.data);
    //     setLoading(false);
    // }

    const handleUpdate = (editKeyboard) => {
        axios.put('http://localhost:8000/api/keyboards/' + editKeyboard.id, editKeyboard)
        .then((response) => {
          setKeyboard(keyboard.map((keyboard) => {
            return keyboard.id !== editKeyboard.id ? keyboard : editKeyboard
          }))
        })
      }

    const handleDelete = (event) => {
        idBoardRef.current=event.target.value;
        setDialog({ 
            message:"Are you sure you want to delete?",
            isLoading:true
        })
      }


    const rUSureRemove = (choose) => {
        // handleDialog("Are you sure you want to REMOVE?",true);
        if(choose) {
            axios.delete('http://localhost:8000/api/keyboards/' + idBoardRef)
            .then((response) => {
              getBoard()
            })
            handleDialog("",false);
        }else{
            handleDialog("",false);
        }
    }

    useEffect(() => {
        getBoard();
        // fetchBoards();
    }, [])

    // get current posts for pagination
    // const indexOfLastBoard = currentPage * boardsPerPage;
    // const indexOfFirstBoard = indexOfLastBoard - boardsPerPage;
    // const currentBoards = board.slice(indexOfFirstBoard, indexOfLastBoard);

    return (
        <div>
            <h1 className="text-primary mb-2 mt-2">Saved Builds</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th className="text-primary mb-1">ID #</th>
                        <th className="text-primary mb-1">Models</th>
                        <th className="text-primary mb-1">Switches</th>
                        <th className="text-primary mb-1">KeyCaps</th>
                        <th className="text-primary mb-1">Stabilizers</th>
                        <th className="text-primary mb-1">Price</th>
                        <th className="text-primary mb-1">Size</th>
                    </tr>
                </thead>
                <tbody>
                    {keyboard.map((keyboard) => {
                        return (
                            <tr>
                                <th scope="row">{keyboard.id}</th>
                                <td>{keyboard.brand}</td>
                                <td>{keyboard.switches}</td>
                                <td>{keyboard.keycaps}</td>
                                <td>{keyboard.stabilizers}</td>
                                <td>{keyboard.price}</td>
                                <td>{keyboard.size}</td>
                                <td> <Edit handleUpdate={handleUpdate} keyboard={keyboard}/> </td>
                                <Button onClick={handleDelete} color="info" value={keyboard.id}>REMOVE</Button>
                            </tr>
                        )
                    })}
                    {dialog.isLoading && 
                    <Dialog onDialog={rUSureRemove} message={dialog.message}/>}
                </tbody>
            </Table>
        </div>
    )
}

export default ShowKeyboard0


// brand = 
//     models.CharField(max_length=24)
//     switches = models.CharField(max_length=24)
//     keycaps = models.CharField(max_length=24)
//     stabilizers = models.CharField(max_length=24)
//     price = models.IntegerField()
//     size = models.CharField(max_length=24)

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "reactstrap"

// function App() {
// 	return (
// 		<div style={{
// 			display: 'block', width: 700, padding: 30
// 		}}>
// 			<h4>ReactJS Reactstrap Button Component</h4>
// 			<Button color="success">Success Color Button</Button> <br></br>
// 			<Button color="danger">Danger Color Button</Button> <br></br>
// 			<Button color="warning">Warning Color Button</Button> <br></br>
// 			<Button color="primary">Primary Color Button</Button> <br></br>
// 			<Button color="secondary">Secondary Color Button</Button> <br></br>
// 			<Button color="info">Info Color Button</Button> <br></br>
// 			<Button color="link">Link Color Button</Button>
// 		</div>
// 	);
// }

// export default App;
