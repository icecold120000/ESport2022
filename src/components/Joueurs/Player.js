import React, { useState, useEffect }from "react";

export default function Player() {
    const [player, setPlayers] = useState([])

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/players/player_id', options)
            .then(response => response.json())
            .then(data => {
                setPlayers(data)
            });
    },[])

    return(
        <>
            <div>{player.length === 0 && "Aucun joueur trouvé"}</div>
            <div>
                {player.length > 0 && player.map(team =>
                    <div>
                        <h1>{team.name}</h1>
                        <p>{team.nationality}</p>
                        <p>{team.hometown}</p>
                        <p>{team.role}</p>
                        <p>{team.team_id}</p>
                    </div>
                )}
            </div>
        </>
    )
}