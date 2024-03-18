import React, { useState } from 'react';
import './cadastro.css'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../service/firebaseConfig';
import { useActionData, useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md"
import imgLogin from "../../assets/login.png"
import { HiEye, HiEyeOff } from "react-icons/hi"

function App() {
   const [email, setEmail] = useState("")
   const [senha, setsenha] = useState("")
   const [show, setShow] = useState(false)
   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
   const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate();

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   const handleCadastro = async (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(email, senha)
         .then((userCredential) => {
            const user = userCredential.user;
            alert('Usuário cadastrado com sucesso!');
            navigate('/Efetuado');
         }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
               alert('E-mail já está em uso.');
            } else {
               alert('Erro ao criar usuário: ' + error.message);
            }
         });
   }

   const handleLogin = async (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, senha)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuário logado:", user);
            navigate('/Efetuado');
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

               <button type="submit">
                  Cadastrar
               </button>
               </form>

            </div>

      </div>

   )
}

export default App;