import React, { useState, useEffect }from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Token} from "../Utils/Token";

export default function Match() {
    const [match, setMatches] = useState([])
    const { id } = useParams();


    useEffect(()=> {
        const options = Token();

        fetch(`https://api.pandascore.co/matches/${id}`, options)
            .then(response => response.json())
            .then(data => {
                setMatches(data)
            });
    },[id])

    return(
        <>
            <div>{match.length === 0 && "Aucun match trouvé"}</div>
            <div>
                <div>
                    <h1>{match.name}</h1>
                    <p>Type de match : {match.match_type}</p>
                    <p>Nombre de jeux : {match.number_of_games}</p>
                    <p>Statut : {match.status}</p>
                    <p>
                        Série :
                        <Link to={"/series/"+ match.serie_id}>
                            <Button>
                                Voir détail série
                            </Button>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}