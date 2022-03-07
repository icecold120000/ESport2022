import React, { useState, useEffect }from "react";

export default function Match() {
    const [match, setMatches] = useState([])

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/matches/match_id', options)
            .then(response => response.json())
            .then(data => {
                setMatches(data)
            });
    },[])

    return(
        <>
            <div>{match.length === 0 && "Aucun match trouvé"}</div>
            <div>
                {match.length > 0 && match.map(match =>
                    <div>
                        <h1>{match.name}</h1>
                        <p>{match.match_type}</p>
                        <p>{match.number_of_games}</p>
                        <p>{match.status}</p>
                        <p>{match.serie_id}</p>
                    </div>
                )}
            </div>
        </>
    )
}