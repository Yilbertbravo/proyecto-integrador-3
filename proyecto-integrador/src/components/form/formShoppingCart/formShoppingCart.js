import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
} from "../../../constants/regexPattern.js";

const validationSchema = yup.object({
    name: yup
        .string("Ingresa el nombre")
        .min(3, "Ingresa un nombre que tenga mas de 3 carateres")
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;