import React from 'react';
import '../screens/SignUp.css';

const SignupForm = () =>  {
    const [firstName, setFirstName] = React.useState("");
    const [cedulaUser, setcedulaUser] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div id = 'formSign'>
            <h2>REGISTRARSE</h2>
            <div class = 'form'>
                <label htmlFor="firstName">Nombre:</label><br />
            </div>
            <div class = 'form'>
                 <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div class = 'form'>
                <label htmlFor="cedulaUser">Cedula:</label><br />
            </div>
            <div class = 'form'>
                <input type="text" id="cedulaUser" value={cedulaUser} onChange={(e) => setcedulaUser(e.target.value)} />
            </div>
            <div class = 'form'>
                <label htmlFor="email">Correo electrónico:</label><br />
            </div>
            <div class = 'form'>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class = 'form'>
                <label htmlFor="password">Contraseña:</label><br />
            </div>
            <div class = 'form'>
                <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class = 'buttoms'>
                <button type="submit">Crear Cuenta</button>
            </div>
        </div>
    )
}
export default SignupForm;
