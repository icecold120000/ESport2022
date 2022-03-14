import React from "react";
import  withRouter from '../WithRouter';
import {Table} from "react-bootstrap";
import {Token} from "../Utils/Token";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team : {},
            matches : {}
        }
    }

    componentDidMount() {
        const options = Token();

        fetch(`https://api.pandascore.co/teams/${this.props.router.params.id}`, options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    team : data
                });
            })
        ;
        fetch(`https://api.pandascore.co/teams/${this.props.router.params.id}/matches?sort=&page=1&per_page=50`, options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    matches : data
                });
            })
        ;
    }


    render() {
        return(
            <>
                <div>{this.state.team === 0 && "Aucune équipe trouvée"}</div>
                <div>
                    <div>
                        <h1>{this.state.team.name}</h1>
                        <p>Acronyme : {this.state.team.acronym === null && "Aucun acronyme"}</p>
                        <p>Lieu : {this.state.team.location}</p>
                        <h2>Leur matchs :</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nom du match</th>
                                    <th>Date du match</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.matches.length > 0 && this.state.matches.map(match =>
                                    <tr>
                                        <td>{match.name}</td>
                                        <td>{match.begin_at}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Team)