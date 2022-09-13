import { useEffect, useState } from "react";
import {Table} from 'reactstrap';
import axios from "axios";
    
const ShowKeyboard0 = () => {
    const [board, setBoard] = useState([])

    const getBoard = () => {
        axios   
            .get('http://localhost:8000/api/keyboards')
            .then (
                (response) => setBoard(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getBoard()
    }, [])

    return (
        <div>
            <h1>Keyboards:</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>Models</th>
                        <th>Switches</th>
                        <th>KeyCaps</th>
                        <th>Stabilizers</th>
                        <th>Price</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {board.map((keyboard) => {
                        return (
                            <tr>
                                <th scope="row">{keyboard.id}</th>
                                <td>{keyboard.brand}</td>
                                <td>{keyboard.switches}</td>
                                <td>{keyboard.keycaps}</td>
                                <td>{keyboard.stabilizers}</td>
                                <td>{keyboard.price}</td>
                                <td>{keyboard.size}</td>
                            </tr>
                        )
                    })}

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