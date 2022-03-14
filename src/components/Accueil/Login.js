import React from "react";
import {Formik, Form, Field } from "formik";
import {Button , Form as FormBootstrap} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "../Utils/Axios";

export default function Login() {
    return (
        <>
            <h1>Connexion</h1>
            <Formik initialValues={{email: '', password: ''}} onSubmit={(values) => {
                axios.get('/http://localhost:3001/user', {
                    params: {
                        email: values.email,
                        password: values.password
                    }
                }).then(function (response) {
                    console.log(response);
                })
            }}>
                {({
                      values,
                      isSubmitting,
                  }) => (
                    <Form className="mx-auto">
                        <FormBootstrap.Label>Email :</FormBootstrap.Label>
                        <Field className="form-control"
                            type="email"
                            name="email"
                            value={values.email}
                        />
                        <FormBootstrap.Label>Mot de passe :</FormBootstrap.Label>
                        <Field className="form-control"
                            type="password"
                            name="password"
                            value={values.password}
                        />
                        <Button variant="success" type="submit" disabled={isSubmitting}>
                            Se connecter
                        </Button>
                    </Form>
                )}
            </Formik>
            <Link to={"/signup"}>
                <Button>
                    S'inscrire
                </Button>
            </Link>
        </>
    );

}