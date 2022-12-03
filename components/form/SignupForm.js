import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    email: "",
    password: "",
    name: "",
    birthdate: "",
    nickname: "",
    avatar_url: "",
    acceptTerms: false,
};

const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    name: Yup.string().required("Full is required"),
    birthdate: Yup.date().required("Full is required"),
    nickname: Yup.string().required("Full is required"),
    avatar_url: Yup.string().required("Full is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

function SignupForm() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupFormSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.email && touched.email
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    className={
                                        "form-control" +
                                        (errors.password && touched.password
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.name && touched.name
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Birthdate</label>
                                <Field
                                    name="birthdate"
                                    type="date"
                                    className={
                                        "form-control" +
                                        (errors.birthdate && touched.birthdate
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="birthdate"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Nickname</label>
                                <Field
                                    name="nickname"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.nickname && touched.nickname
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="nickname"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Avatar</label>
                                <Field
                                    name="avatar_url"
                                    type="file"
                                    className={
                                        "form-control" +
                                        (errors.avatar_url && touched.avatar_url
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="avatar_url"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <Field
                                        type="checkbox"
                                        name="acceptTerms"
                                        className={
                                            "form-check-input " +
                                            (errors.acceptTerms &&
                                                touched.acceptTerms
                                                ? " is-invalid"
                                                : "")
                                        }
                                    />
                                    <label className="form-check-label">
                                    Certifico que tengo 18 años de edad o más, y acepto los <a href="#" className="text-primary">Acuerdo del Usuario</a> y <a href="#" className="text-primary">Política de privacidad</a>.
                                    </label>
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2"
                            >
                                Registrarse
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default SignupForm;
