import React from "react";
import {Button, Table} from "react-bootstrap";
import {Token} from "../Utils/Token";
import {Link} from "react-router-dom";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lives: [],
        }
    }
    componentDidMount() {
        const options = Token();

        fetch('https://api.pandascore.co/lives?page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    lives : data
                });
                console.log(data)
            })
        ;
    }

    render () {
        return(
                <>
                    <h1>Bienvenue dans le site e-sport !</h1>
                    <p>Vous pouvez vous connecter pour parier avec ce bouton !</p>
                    <Button href="/login">Se connecter</Button>
                    <h2>Match en direct :</h2>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Type de match</th>
                                    <th>Voir détail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.lives.length > 0 && this.state.lives.map(matchLive =>
                                    <tr>
                                        <td>{matchLive.begin_at}</td>
                                        <td>{matchLive.match_type}</td>
                                        <td>
                                            <Link to={"/matches/"+ matchLive.match_id}>
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