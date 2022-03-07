import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players : []
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

        fetch('https://api.pandascore.co/players?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    players : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Liste de joueurs</h1>
                <div>{this.state.players === 0 && "Aucun joueur trouvé"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Identifiant</th>
                                <th>Nom</th>
                                <th>Nationalité</th>
                                <th>Voir détail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.players.length > 0 && this.state.players.map(player =>
                                <tr>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                    <td>{player.nationality}</td>
                                    <td>
                                        <Link to={"/players/"+ player.id}>
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
}