import React from 'react';
import '../screens/Login.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div id = 'formlogin'>
        <h2>INICIAR SESION</h2>
        <div class = 'form'>
            <label htmlFor="email">Correo electronico:</label>
        </div>
        <div class = 'form'>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class = 'form'>
            <label htmlFor="password">Contraseña:</label>
        </div>
        <div class = 'form'>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
         <div class = 'bottoms'>
            <button type="submit">Iniciar Sesión</button>
            <button type="submit">Registrate</button>
        </div>
    </div>
   
    

  )

}
export default LoginForm;