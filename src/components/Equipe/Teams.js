import React, { useState, useEffect }from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Teams() {
    const [teams, setTeams] = useState([])

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/teams?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                setTeams(data)
            });
    },[])

    return(
        <>
            <h1>Liste des équipes</h1>
            <div>{teams.length === 0 && "Aucune équipe trouvée"}</div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Nom</th>
                            <th>Voir détail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.length > 0 && teams.map(team =>
                            <tr>
                                <td>{team.id}</td>
                                <td>{team.name}</td>
                                <td>
                                    <Link to={"/teams/"+ team.id}>
                                        <Button>
                                            Détail
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}