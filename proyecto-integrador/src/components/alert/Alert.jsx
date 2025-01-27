import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AlertTitle, Alert as AlertUI, Collapse, IconButton } from "@mui/material";
import "./alert.scss";

import CloseIcon from "@mui/icons-material/Close";

const Alert = (props) => {
    const { openAlert, setOpenAlert, message, redirectUrl, severity, messageTitle } = props;

    const navigate = useNavigate();

    const handleOnClickClose = () => {
        setOpenAlert(false);

        if (redirectUrl) {
            navigate(redirectUrl);
        }
    };

    useEffect(() => {
        if (openAlert) {
            setTimeout(() => {
                handleOnClickClose();
            }, 4000);
        }
    }, [openAlert] );

    return (
        <Collapse
            className="alert"
            in={openAlert}>
            <AlertUI
                severity={severity}
                action={
                    <IconButton
                        size="small"
                        onClick={handleOnClickClose}>
                        <CloseIcon/>
                    </IconButton>
                }><AlertTitle>{messageTitle}</AlertTitle>
                <span className="alert__message">{message}</span>
            </AlertUI>
        </Collapse>
    );
};

Alert.propTypes = {
    openAlert: PropTypes.bool.isRequired,
    setOpenAlert: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    messageTitle: PropTypes.string,
    redirectUrl: PropTypes.string,
    severity: PropTypes.string,
};

Alert.defaultProps = {
    message: "El formulario se procesó correctamente",
};

export default Alert;