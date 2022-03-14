import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Token} from "../Utils/Token";

export default class Leagues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues : []
        }
    }

    componentDidMount() {
        const options = Token();

        fetch('https://api.pandascore.co/leagues?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    leagues : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Liste de ligues</h1>
                <div>{this.state.leagues === 0 && "Aucune ligue trouvé"}</div>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Voir détail</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.leagues.length > 0 && this.state.leagues.map(league =>
                                <tr>
                                    <td>{league.id}</td>
                                    <td><img src={league.image_url} alt={league.name} width={100} height={100} /></td>
                                    <td>{league.name}</td>
                                    <td>
                                        <Link to={"/leagues/"+ league.id}>
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