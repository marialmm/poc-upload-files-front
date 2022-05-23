import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [form, setForm] = useState({
        files: [],
        value: "",
        name: "",
    });

    const navigate = useNavigate();

    function sendSubmit(e) {
        e.preventDefault();
        console.log(form);
        const dataForm = new FormData();
        for (const image of form.files) {
            dataForm.append("image", image);
        }
        dataForm.append("name", form.name);

        const promise = axios.post("http://localhost:5000/images", dataForm);
        promise.then((res) => {
            console.log(res.data);
            navigate("/images");
        });
    }

    return (
        <Forms onSubmit={sendSubmit} encType="multipart/form-data">
            <label htmlFor="images">Escolher imagens</label>
            <input
                type="file" value={form.value} accept="image/*" multiple
                onChange={(e) =>
                    setForm({
                        ...form,
                        files: e.target.files,
                        value: e.target.value,
                    })
                }
                name="images"
                id="images"
                required
            />
            {form.files.length > 0 ? (
                Array.from(form.files).map((file) => <p>{file.name}</p>)
            ) : (
                <p>Nenhum arquivo selecionado</p>
            )}
            <input
                type="text" value={form.name} placeholder="Nome"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <button type="submit">Enviar</button>
        </Forms>
    );
}

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 10px;

    input[type="file"] {
        display: none;
    }

    label,
    button {
        border: solid 2px;
        border-radius: 10px;
        padding: 15px;
        background-color: #f78b4d;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    button {
        margin: 10px 0 0;
        border-radius: 30px;
        padding: 10px;
    }

    p {
        font-size: 18px;
        text-align: center;
    }

    input{
        width: 190px;
        height: 45px;
        padding: 10px;
        margin-top: 15px;
        border-radius: 15px;
    }
`;
