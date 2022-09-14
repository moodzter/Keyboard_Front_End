import { useEffect, useState } from "react";
import {Table} from 'reactstrap';
import axios from "axios";
// import Board0 from './components/Board0';
    
const ShowKeyboard0 = () => {
    const [board, setBoard] = useState([])
    // pagination code:
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [boardsPerPage, setBoardsPerPage] = useState(5);

    const getBoard = () => {
        axios   
            .get('http://localhost:8000/api/keyboards')
            .then (
                (response) => setBoard(response.data),
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