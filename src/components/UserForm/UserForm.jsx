import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const UserForm = () => {
    let dataUser = JSON.parse(localStorage.getItem("DATOS")) || [];
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    text:""
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const initialState = {
    name: "",
    phone: "",
    email: "",
    text:""
  };
  const clearState = () => {
    setData({ ...initialState });
  };
  const handleInputChange = (event) => {
    if ( data.name.length < 3) {
        setMessage("Nombre debe tener 3 caracteres como mínimo");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false);
      }    
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dataUser.push(data);
    localStorage.setItem("DATOS", JSON.stringify(dataUser))
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 2000);
    };
  
  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Rellena todos los campos</legend>
            <div>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Escribe tu nombre" onChange={handleInputChange} name="name"/>
                </div>
                <div >
                    <label>Teléfono</label>
                    <input type="text" placeholder="Escribe tu teléfono" onChange={handleInputChange} name="phone"/>
                </div>
                <div >
                    <label>Correo</label>
                    <input type="email" placeholder="Escribe tu correo" onChange={handleInputChange} name="email"/>
                </div>
                <div >
                    <label>Mensaje</label>
                    <textarea placeholder="Escriba aquí lo que quieras" name="text"></textarea>
                </div>
            </div>
            <div>
                <button type="submit" disabled={btnDisabled}>Enviar</button>{message}
            </div>
        </fieldset>
        
    </form>
  );
};

export default UserForm
