import React, { useState, useEffect }from "react";
import {Button, Table} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {Token} from "../Utils/Token";

export default function Game() {
    const [jeu, setJeux] = useState([])
    const [ligues, setLigues] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const options = Token()

        fetch(`https://api.pandascore.co/videogames/${id}`, options)
            .then(response => response.json())
            .then(data => {
                setJeux(data)
            })
        ;
        fetch(`https://api.pandascore.co/videogames/${id}/leagues?sort=&page=1&per_page=50`, options)
            .then(response => response.json())
            .then(data2 => {
                setLigues(data2)
            })
        ;

    },[id])

    return(
        <>
            <div>
                <div>
                    <h1>{jeu.name}</h1>
                </div>
                <h2>Liste des ligues associés :</h2>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Nom</th>
                                <th>Voir détail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ligues.length > 0 && ligues.map(ligue =>
                                <tr>
                                    <td><img src={ligue.image_url} alt={ligue.name} width={100} height={100} /></td>
                                    <td>{ligue.name}</td>
                                    <td>
                                        <Link to={"/leagues/"+ ligue.id}>
                                            <Button>
                                                Voir détail ligue
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}