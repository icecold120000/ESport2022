import React from 'react';
import  withRouter from '../WithRouter';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Token} from "../Utils/Token";

class Serie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serie : {}
        };
    }
    componentDidMount() {
        const options = Token();

        fetch(`https://api.pandascore.co/series/${this.props.router.params.id}`, options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    serie : data
                });
            })
        ;
    }

    render() {
        return(
            <>
                <div>{this.state.serie === 0 && "Aucun série trouvé"}</div>
                <div>
                    <div>
                        <h1>Nom de la série : {this.state.serie.name}</h1>
                        <p>Date de début : {this.state.serie.begin_at} - Date de fin : {this.state.serie.end_at === null && "En cours"}</p>
                        <p>
                            Ligue :
                            <Link to={"/leagues/"+ this.state.serie.league_id}>
                                <Button>
                                    Détail ligue
                                </Button>
                            </Link>
                        </p>
                        <p>Saison : {this.state.serie.season}</p>
                        <p>Tier : {this.state.serie.tier}</p>
                        <p>Année : {this.state.serie.year}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(Serie)