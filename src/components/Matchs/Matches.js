import React from 'react';
import {Button, Table, Form as FormBootstrap} from "react-bootstrap";
import {Formik, Form, Field } from "formik";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches : []
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

        fetch('https://api.pandascore.co/matches/upcoming?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    matches : data
                });
            });
    }

    componentDidMount2() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/matches/past?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    matches : data
                });
            });
    }

    componentDidMount3() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch('https://api.pandascore.co/matches/running?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    matches : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Liste de matchs</h1>
                <Formik initialValues={{selected: '1'}} onSubmit={(values) => {
                    axios.post('https://localhost:3000/user', {
                        selected: values.selected
                    })
                }}>
                    {({
                          values,
                          isSubmitting,
                      }) => (
                        <Form className={"mx-auto"}>
                            <FormBootstrap.Label>Filtre :</FormBootstrap.Label>
                            <Field as={"select"}>
                                <option value={1}>Match futur</option>
                                <option value={2}>Match en cours</option>
                                <option value={3}>Match passé</option>
                            </Field>
                            <Button variant="success" type="submit" disabled={isSubmitting}>
                                Se connecter
                            </Button>
                        </Form>
                    )}
                </Formik>
                <div>{this.state.matches === 0 && "Aucun match trouvé"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Identifiant</th>
                                <th>Nom</th>
                                <th>Type de match</th>
                                <th>Nombre de jeux</th>
                                <th>Statut</th>
                                <th>Voir détail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.matches.length > 0 && this.state.matches.map(match =>
                                <tr>
                                    <td>{match.serie_id}</td>
                                    <td>{match.name}</td>
                                    <td>{match.match_type}</td>
                                    <td>{match.number_of_games}</td>
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