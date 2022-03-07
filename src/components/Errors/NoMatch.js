import React from "react";
import {Button} from "react-bootstrap";

export default function Teams() {
    return (
        <>
            <div>
                <h1 className="erreur">Erreur 404</h1>
            </div>
            <div>
                <h2>Votre page n'existe pas. Veuillez vérifier votre url.</h2>
                <Button href="/" size="lg" variant="primary">Revenir dans la page d'accueil</Button>
            </div>
        </>
    )
}