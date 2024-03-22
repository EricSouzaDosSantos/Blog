import React, { useState } from 'react';
import './login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md"
import imgLogin from "../../assets/login.png"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { Link } from 'react-router-dom';



function LoginUsuario() {
   const [email, setEmail] = useState("")
   const [senha, setsenha] = useState("")
   const [show, setShow] = useState(false)
   const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate();

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   const handleLogin = async (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, senha)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuário logado:", user);
            window.location.href = '/blog.html';
         }).catch((error) => {
            if (error.message == "Cannot read properties of undefined (reading 'user')") {
               alert('email ou senha incorreto')
            } else {
               alert('Erro ao fazer login: ' + error.message);
            }
         });
   };

   return (
      <div className="login">
            <div className="login-logo">

               <img
                  src={imgLogin}
                  alt="MdLockLogin App"
               />
            </div>

            <div className="login-right">
               <h1>Acessar App</h1>
               <form>

               <div className="login-loginInputEmail">
                  <MdEmail />
                  <input
                     type="email"
                     placeholder="Digite um email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>

               <div className="login-loginInputPassword">
                  <MdLock />
                  <input
                     placeholder="Digite sua senha"
                     type={show ? "text" : "password"}
                     value={senha}
                     onChange={e => setsenha(e.target.value)}
                  />
                  <div className="login-eye">
                     {show ? (
                        <HiEye
                           size={20}
                           onClick={handleClick}
                        />
                     ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
                  </div>
               </div>

               <button onClick={handleLogin}>
                  Entrar
               </button>

               <h4>Não tenho conta!</h4>

               <Link to={'../Cadastro'}><button type="submit">
                  Cadastrar
               </button></Link>
               </form>

            </div>

      </div>

   )
}

export default LoginUsuario;