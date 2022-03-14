import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Token} from "../Utils/Token";

export default class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games : []
        }
    }

    componentDidMount() {
        const options = Token();

        fetch('https://api.pandascore.co/videogames?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    games : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Liste de jeux</h1>
                <div>{this.state.games === 0 && "Aucun jeux trouvés"}</div>
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
                            {this.state.games.length > 0 && this.state.games.map(game =>
                                <tr>
                                    <td>{game.id}</td>
                                    <td>{game.name}</td>
                                    <td>
                                        <Link to={"/games/"+ game.id}>
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