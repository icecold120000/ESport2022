import React from "react";

export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team : {}
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/teams/team_id', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    team : data
                });
            });
    }
    render() {
        return(
            <>
                <div>{this.state.team === 0 && "Aucune équipe trouvée"}</div>
                <div>
                    {this.state.team.length > 0 && this.state.team.map(team =>
                        <div>
                            <h1>{team.name}</h1>
                            <p>{team.acronym}</p>
                            <p>{team.location}</p>
                        </div>
                    )}
                </div>
            </>
        )
    }
}