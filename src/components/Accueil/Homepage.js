import React from "react";
import {Button} from "react-bootstrap";


export default class Homepage extends React.Component {
    render () {
        return(
                <>
                    <h1>Bienvenue dans le site e-sport !</h1>

                    <p>Vous pouvez vous connecter pour parier avec ce bouton !</p>
                    <Button href="/login">Se connecter</Button>
                </>
        )
    }
}