import React, { useState } from 'react';
import './cadastro.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle, MdEmail, MdLock } from "react-icons/md"
import imgLogin from "../../assets/login.png"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { db, collection, addDoc } from "../../service/firebaseConfig"; 
import 'firebase/firestore'

function CadastrarUsuario() {

   const [email, setEmail] = useState("")
   const [senha, setsenha] = useState("")
   const [Nome, setNome] = useState("")
   const [show, setShow] = useState(false)
   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
   const navigate = useNavigate();
   // const usersCollectionRef = collection(db, "users");


   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   const Cadastro = async (e) => {

      e.preventDefault();
      createUserWithEmailAndPassword(email, senha)
         .then((userCredential) => {
            const user = userCredential.user;
            // return
            // firebase.firestore().collection('usuarios').addDoc(user.uid).set({
            //    nome: Nome,
            //    email: email,
            //    senha: senha,
            //    id: user.uid
            // });
            // alert('Usuário cadastrado com sucesso!');
            window.location.href = './blog.html';
         }).catch((error) => {
            if (error.message === 'auth/email-already-in-use') {
               alert('E-mail já está em uso.');
            } else {
               alert('Erro ao criar usuário: ' + error.message);
            }
         });
   }


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

               {/* <div className="login-loginInputNome">
               <MdAccountCircle />
                  <input
                     type="text"
                     placeholder="Digite seu nome"
                     value={Nome}
                     onChange={e => setNome(e.target.value)}
                  />
               </div> */}

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

               <button onClick={Cadastro}>
                  Cadastrar
               </button>

               <h4>Já possui uma conta? </h4>

               <Link to={'/'}>
               <button>
                  Login
               </button>
               </Link>

               </form>

            </div>

      </div>

   )
}

export default CadastrarUsuario;