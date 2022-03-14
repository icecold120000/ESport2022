import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Token} from "../Utils/Token";

export default class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMatches : [],
            upcomingMatches : [],
            pastMatches : []
        }
    }
    componentDidMount() {
        const options = Token();

        fetch('https://api.pandascore.co/matches/upcoming?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    upcomingMatches : data
                });
            })
        ;

        fetch('https://api.pandascore.co/matches/past?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pastMatches : data
                });
            })
        ;
        fetch('https://api.pandascore.co/matches/running?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currentMatches : data
                });
            })
        ;
    }

    render() {
        return(
            <>
                <h1>Liste de matchs</h1>
                <div>
                    <h2>Matchs en cours :</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Type de match</th>
                            <th>Statut</th>
                            <th>Voir détail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.currentMatches.length > 0 && this.state.currentMatches.map(match =>
                            <tr>
                                <td>{match.name}</td>
                                <td>{match.match_type}</td>
                                <td>{match.status}</td>
                                <td>
                                    <Link to={"/matches/"+ match.id}>
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
                <div>
                    <h2>Matchs future :</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Type de match</th>
                            <th>Statut</th>
                            <th>Voir détail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.upcomingMatches.length > 0 && this.state.upcomingMatches.map(match =>
                            <tr>
                                <td>{match.name}</td>
                                <td>{match.match_type}</td>
                                <td>{match.status}</td>
                                <td>
                                    <Link to={"/matches/"+ match.id}>
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
                <div>
                    <h2>Matchs passés :</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Type de match</th>
                            <th>Statut</th>
                            <th>Voir détail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.pastMatches.length > 0 && this.state.pastMatches.map(match =>
                            <tr>
                                <td>{match.name}</td>
                                <td>{match.match_type}</td>
                                <td>{match.status}</td>
                                <td>
                                    <Link to={"/matches/"+ match.id}>
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