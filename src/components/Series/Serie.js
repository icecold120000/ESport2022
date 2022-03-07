import React from 'react';

export default class Serie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serie : {

            }
        }
    }

    componentDidMount() {
        const id = this.props.serie.params.id;
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }
        };

        fetch(`https://api.pandascore.co/series/${id}`, options)
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
                    {this.state.serie.length > 0 && this.state.serie.map(serie =>
                        <div>
                            <h1>{serie.name}</h1>
                            <p>{serie.begin_at}</p>
                            <p>{serie.end_at}</p>
                            <p>{serie.league_id} </p>
                            <p>{serie.season}</p>
                            <p>{serie.tier_id}</p>
                            <p>{serie.year}</p>
                        </div>
                    )}
                </div>
            </>
        )
    }
}