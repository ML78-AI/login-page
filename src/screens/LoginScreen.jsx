import classes from "./styles.module.css";
import loginImg from "../assets/login.png";
import eyeImg from "../assets/eye.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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

    useEffect(() => {
        document.body.classList.add(classes["body-style"]);
        return () => document.body.classList.remove(classes["body-style"]);
    }, []);

    return (
        <div className={classes["container"]}>
            <h1 className={classes["title"]}>
                <FormattedMessage id="connect" />
                <img src={loginImg} alt="login" className={classes["img"]} />
            </h1>
            <p className={classes["info"]}>
                <FormattedMessage id="infoConnection" />
            </p>
            <form className={classes["form-data"]}>
                <div className={classes["container-field"]}>
                    <h3 className={classes["label-data"]}>
                        <FormattedMessage id="emailAdress" />
                    </h3>
                    <input
                        type="email"
                        name="mail"
                        placeholder=" adresse@mail.com"
                        className={`${classes["field"]} ${
                            printErrorMessageOfConnection
                                ? classes["field-error-conn"]
                                : null
                        }`}
                    />
                </div>
                <div className={classes["container-field"]}>
                    <h3 className={classes["label-data"]}>
                        <FormattedMessage id="password" />
                    </h3>
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
                    <small>
                        <p className={classes["error-conn"]}>
                            <FormattedMessage id="wrongCreds" />
                        </p>
                    </small>
                ) : null}
                <div className={classes["connection-info"]}>
                    <div className={classes["auto-connection"]}>
                        <input
                            type="checkbox"
                            id="autoco"
                            className={classes["checkbox-autoco"]}
                        />
                        <label htmlFor="autoco" className={classes["autoco"]}>
                            <FormattedMessage id="rememberMe" />
                        </label>
                    </div>
                    <p className={classes["forgot-pwd"]}>
                        <FormattedMessage id="forgotPassword" />
                    </p>
                </div>
                <button
                    className={classes["submit-connection"]}
                    onClick={handleClick}
                >
                    <FormattedMessage id="connection" />
                </button>
            </form>
        </div>
    );
}

export default LoginScreen;
