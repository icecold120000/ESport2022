import React from "react";
import {Button, Form as FormBootstrap} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import axios from "../Utils/Axios";

export default function Signup() {
    return (
        <>
            <h1>S'inscrire</h1>
            <Formik initialValues={{email: '', password: ''}} onSubmit={(values) => {
                axios.post('http://localhost:3001/user', {
                    email: values.email,
                    password: values.password,
                    playCoins : 100
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
                            S'inscrire
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
