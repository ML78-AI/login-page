import classes from "./styles.module.css";
import loginImg from "../assets/login.png";
import eyeImg from "../assets/eye.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EMAIL = "anais@exemple.com";
const MDP = "LGBTQIABZUTJDBRS++";

function LoginScreen() {
    const [togglePrintPassword, setTogglePrintPassword] = useState(false);
    const [printErrorMessageOfConnection, setPrintErrorMessageOfConnection] =
        useState(false);
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        const emailSubmitted = e.target.form[0].value;
        const mdpSubmitted = e.target.form[1].value;
        if (emailSubmitted === EMAIL && mdpSubmitted === MDP) {
            navigate("/dashboard");
        } else {
            setPrintErrorMessageOfConnection(true);
        }
    };

    return (
        <div className={classes["container"]}>
            <h1 className={classes["title"]}>
                Se connecter
                <img src={loginImg} alt="login" className={classes["img"]} />
            </h1>
            <p className={classes["info"]}>
                Entrez vos identifiants pour accéder à votre espace personnel.
            </p>
            <form className={classes["form-data"]}>
                <div className={classes["container-field"]}>
                    <h3 className={classes["label-data"]}>Adresse mail</h3>
                    <input
                        type="email"
                        name="mail"
                        placeholder="adresse@mail.com"
                        className={`${classes["field"]} ${
                            printErrorMessageOfConnection
                                ? classes["field-error-conn"]
                                : null
                        }`}
                    />
                </div>
                <div className={classes["container-field"]}>
                    <h3 className={classes["label-data"]}>Mot de passe</h3>
                    <div className={classes["password-container"]}>
                        <input
                            type="text"
                            name="mdp"
                            className={`${classes["field"]} ${
                                !togglePrintPassword
                                    ? classes["password-field"]
                                    : classes["unprotected-password-field"]
                            } ${
                                printErrorMessageOfConnection
                                    ? classes["field-error-conn"]
                                    : null
                            }`}
                        />
                        <img
                            src={eyeImg}
                            alt="show"
                            className={classes["eye-img"]}
                            onClick={() => setTogglePrintPassword((p) => !p)}
                        />
                    </div>
                </div>
                {printErrorMessageOfConnection ? (
                    <p className={classes["error-conn"]}>
                        Adresse mail ou le mot de passe incorrect.
                    </p>
                ) : null}
                <div className={classes["connection-info"]}>
                    <div className={classes["auto-connection"]}>
                        <input
                            type="checkbox"
                            id="autoco"
                            className={classes["checkbox-autoco"]}
                        />
                        <label htmlFor="autoco" className={classes["autoco"]}>
                            Se souvenir de moi
                        </label>
                    </div>
                    <p className={classes["forgot-pwd"]}>
                        Mot de passe oublié ?
                    </p>
                </div>
                <input
                    type="submit"
                    className={classes["submit-connection"]}
                    onClick={handleClick}
                    value="Se Connecter"
                />
            </form>
        </div>
    );
}

export default LoginScreen;
