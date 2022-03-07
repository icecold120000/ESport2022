import React, { useState, useEffect }from "react";

export default function League() {
    const [league, setLeagues] = useState([])

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/leagues/league_id', options)
            .then(response => response.json())
            .then(data => {
                setLeagues(data)
            });
    },[])

    return(
        <>
            <div>{league.length === 0 && "Aucune ligue trouvée"}</div>
            <div>
                {league.length > 0 && league.map(ligue =>
                    <div>
                        <h1>{ligue.name}</h1>
                    </div>
                )}
            </div>
        </>
    )
}