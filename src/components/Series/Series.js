import React, { useState, useEffect }from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Series() {
    const [series, setSeries] = useState([])

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/series?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                setSeries(data)
            });
    },[])

    return(
        <>
            <h1>Liste de séries</h1>
            <div>{series.length === 0 && "Aucune série trouvé"}</div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Saison - Année</th>
                            <th>Tier</th>
                            <th>Description</th>
                            <th>Voir détail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {series.length > 0 && series.map(serie =>
                            <tr>
                                <td>{serie.name}</td>
                                <td>Saison : {serie.season} - {serie.year} </td>
                                <td>{serie.tier}</td>
                                <td>{serie.description}</td>
                                <td>
                                    <Link to={"/series/"+ serie.id}>
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