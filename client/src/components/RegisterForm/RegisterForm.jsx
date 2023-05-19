import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";

import validation from "./vaildation.js";
import styles from "./RegisterForm.module.css";

const RegisterForm = (props) => {
    

    const [data, setData] = useState({});

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setData({
        ...data,
        [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setErrors(validation(data));
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;
        try {
            Object.values(errors).forEach((el) => {
                if (el.length) error = true;
            });
            Object.values(data).forEach((el) => {
                if (el === undefined) {
                error = true;
                }
            });

            if (error) throw new Error("Faltan completar datos")

            const result = await axios.post("/usuarios", data)
            console.log('OK1')
            setData({});
            console.log('OK2')

        } catch (e) {
            let toHighlight = {};
            let error = '';
            for (const key in errors) {
                if (data[key] === undefined) {
                    toHighlight[key] = ""
                    error = 'Falta llenar información'
                };
            }
            setData({ ...data, ...toHighlight });
            if(error) window.alert(error);
            else  {
                setData({})
            };
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formDiv}>
            <TextField
            name="nombre"
            label="Nombre"
            value={data.nombre || ''}
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            InputLabelProps={{
                style: { "backgroundColor":'white' },
            }}
            />
            {errors.nombre ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.nombre}
            </p>
            ) : null}
        </div>
        <div className={styles.formDiv}>
            <TextField
            name="apellido"
            label="Apellido"
            value={data.apellido || ''}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
                style: { "backgroundColor":'white' },
              }}
            />
            {errors.apellido ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.apellido}
            </p>
            ) : null}
        </div>
        <div className={styles.formDiv}>
            <TextField
            name="dni"
            label="DNI"
            value={data.dni || ''}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
                style: { "backgroundColor":'white' },
              }}
            />
            {errors.dni ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.dni}
            </p>
            ) : null}
        </div>
        <div className={styles.formDiv}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                disableFuture
                format="DD/MM/YYYY"
                label="Fecha de Nacimiento"
                name="nacimiento"
                value={data.nacimiento || undefined}
                fullWidth
                sx={{ width: "100%" }}
                onChange={(newValue) => {
                setData({ ...data, nacimiento: new Date(newValue) });
                }}
                
                
                renderInput={() => (
                    <TextField
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{
                            style: { "backgroundColor":'white' },
                        }}
                    />
                )}
            />
            </LocalizationProvider>
            {errors.nacimiento ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.nacimiento}
            </p>
            ) : null}
        </div>
        <div className={styles.formDiv}>
            <TextField
            name="email"
            label="Email"
            value={data.email || undefined}
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            InputLabelProps={{
                style: { "backgroundColor":'white' },
              }}
            />
            {errors.email ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.email}
            </p>
            ) : null}
        </div>
        <div className={styles.formDiv}>
            <TextField
            label="Celular"
            name="celular"
            fullWidth
            value={data.celular || ''}
            variant="outlined"
            onChange={handleInputChange}
            InputLabelProps={{
                style: { "backgroundColor":'white' },
              }}
            />
            {errors.celular ? (
            <p className={styles.formError}>
                <ErrorIcon />
                {errors.celular}
            </p>
            ) : null}
        </div>

        <div className={styles.submit}>
            <button type="submit">
            Submit
            </button>
        </div>
        </form>
    );
};

export default RegisterForm;
