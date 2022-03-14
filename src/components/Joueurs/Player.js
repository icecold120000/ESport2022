import React, { useState, useEffect }from "react";
import { useParams } from 'react-router-dom';
import {Token} from "../Utils/Token";

export default function Player() {
    const [player, setPlayers] = useState({})
    const { id } = useParams()

    useEffect(()=> {
        const options = Token();

        fetch(`https://api.pandascore.co/players/${id}`, options)
            .then(response => response.json())
            .then(data => {
                setPlayers(data)
            })
        ;

    },[id])
    return(
        <>
            <div>
                <div>
                    <h1>Nom du joueur : {player.first_name} {player?.name}</h1>
                    <p>Nationalité : {player.nationality}</p>
                    <p>Son rôle dans l'équipe : {player.role === null && "Non renseigné"}</p>
                    <p>Leur équipe : {player.current_team?.name}</p>
                </div>
            </div>
        </>
    )
}