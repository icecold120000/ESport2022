import React, { useState, useEffect }from "react";
import {Table} from "react-bootstrap";

export default function Game() {
    const [jeux, setJeux, ligues, setLigues] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/videogames/videogame_id', options)
            .then(response => response.json())
            .then(data => {
                setJeux(data)
            })
        ;
    },[])


    return(
        <>
            <div>{jeux.length === 0 && "Aucun jeu trouvé"}</div>
            <div>
                {jeux.length > 0 && jeux.map(jeu =>
                    <div>
                        <h1>{jeu.name}</h1>
                    </div>
                )}
                <h2>Liste des ligues associés :</h2>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Nom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*{ligues.length > 0 && ligues.map(ligue =>
                                <div>
                                    <h1>{ligue.name}</h1>
                                </div>
                            )}*/}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}