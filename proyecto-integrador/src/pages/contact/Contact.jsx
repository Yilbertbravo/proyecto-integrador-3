import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import "./contact.scss";

import {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
} from "../../constants/regexPattern.js";

import InputField from "../../components/form/inputField/InputField";
import Button from "../../components/button/Button";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Alert from "../../components/alert/Alert.jsx";

const Contact = () => {
    const [ openAlert, setOpenAlert ] = useState(false);

    const validationSchema = yup.object({
        fullname: yup
            .string("Ingresa tu nombre y apellido")
            .min(7, "Ingresa un nombre y apellido que tenga mas de 7 carateres")
            .required(MESSAGE_REQUIRED),
        telephone: yup
            .string("Ingresa tu teléfono")
            .matches(REGEX_TELEPHONE, MESSAGE_TELEPHONE_INVALID)
            .required(MESSAGE_REQUIRED),
        email: yup
            .string("Ingresa tu email")
            .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
            .required(MESSAGE_REQUIRED),
        consult: yup
            .string("Ingresa tu consulta")
            .min(11, "Ingresa una consulta que tenga entre 15 y 150 carateres")
            .required(MESSAGE_REQUIRED),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
            email: "",
            consult: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setOpenAlert(true);
            resetForm();
        },
    });

    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <Box
                    component="form"
                    className="contact__section__form"
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}>
                    <InputField
                        label="Nombre y apellido"
                        name="fullname"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        errorMessage={formik.touched.fullname && formik.errors.fullname}
                        inputProps={{ maxLength: 25 }}>
                    </InputField>

                    <InputField
                        label="Teléfono"
                        name="telephone"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                        errorMessage={formik.touched.telephone && formik.errors.telephone}
                        inputProps={{ maxLength: 15 }}>
                    </InputField>

                    <InputField
                        label="E-mail"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.touched.email && formik.errors.email}
                        inputProps={{ maxLength: 50 }}>
                    </InputField>

                    <InputField
                        label="Consulta"
                        name="consult"
                        multiline
                        rows={5}
                        value={formik.values.consult}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.consult && Boolean(formik.errors.consult)}
                        errorMessage={formik.touched.consult && formik.errors.consult}
                        inputProps={{ maxLength: 150 }}>
                    </InputField>

                    <Button type="submit">Envíar consulta</Button>
                    <Alert
                        openAlert={openAlert}
                        setOpenAlert={setOpenAlert}
                        message="Tu consulta se ha enviado correctamente"/>
                </Box>

            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box className="contact__section__data">
                    <Box>
                        <PlaceIcon/>
                        <span>Av. Humbolt - Mérida - Vnezuela.</span>
                    </Box>
                    <Box>
                        <PhoneIcon/>
                        <span>0424-7300050</span>
                    </Box>
                    <Box>
                        <MailIcon/>
                        <span>yilbertjosebravo@gmail.com</span>
                    </Box>
                </Box>
                <Box className="contact__section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54078.251813893665!2d-58.448408681371326!3d-34.61245896355464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1ea91fd4cf%3A0xbaee7969a08f24df!2sPlaza%20Irlanda!5e0!3m2!1ses-419!2sar!4v1710202459491!5m2!1ses-419!2sar"
                        loading="lazy">
                    </iframe>
                </Box>

            </Box>
        </Box>
    );
};

export default Contact;