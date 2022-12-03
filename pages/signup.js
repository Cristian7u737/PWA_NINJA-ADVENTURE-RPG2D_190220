import Link from "next/link";
import SignupForm from "../components/form/SignupForm";

function SignUp() {
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-4">
                                <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                </Link>
                                <h4 className="card-title mt-5">
                                    Registrar Nuevo Jugador 
                                </h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <SignupForm />
                                    <div className="text-center">
                                        <p className="mt-3 mb-0">
                                            <Link href="/signin">
                                                <a className="text-primary">
                                                    Iniciar Sesión
                                                </a>
                                            </Link>
                                            en tu cuenta
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="privacy-link">
                                <Link href="#">
                                    <a>
                                        Have an issue with 2-factor
                                        authentication?
                                    </a>
                                </Link>
                                <br />
                                <Link href="#">
                                    <a>Privacy Policy</a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;
