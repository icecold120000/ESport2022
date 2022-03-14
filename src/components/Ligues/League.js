import React, { useState, useEffect }from "react";
import {useParams} from "react-router-dom";
import {Table} from "react-bootstrap";
import {Token} from "../Utils/Token";

export default function League() {
    const [league, setLeagues ] = useState([])
    const [matchs, setMatches] = useState([])
    const { id } = useParams();

    useEffect(()=> {
        const options = Token();

        fetch(`https://api.pandascore.co/leagues/${id}`, options)
            .then(response => response.json())
            .then(data => {
                setLeagues(data)
            })
        ;
        fetch(`https://api.pandascore.co/leagues/${id}/matches?sort=&page=1&per_page=50`, options)
            .then(response => response.json())
            .then(data => {
                setMatches(data)
            })
        ;
    },[id])
    return(
        <>
            <div>
                <div>
                    <h1>{league.name}</h1>
                    <img src={league.image_url} alt={league.name} width={100} height={100} />
                    <h2>Liste des matchs de la ligue :</h2>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Type</th>
                                    <th>Nombre de jeux</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchs.length > 0 && matchs.map(match =>
                                    <tr>
                                        <td>{match.name}</td>
                                        <td>{match.match_type}</td>
                                        <td>{match.number_of_games}</td>
                                        <td>{match.status}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}