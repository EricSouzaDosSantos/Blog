# Cadastro e Login de Usuários com Firebase Authentication

## Introdução
Este projeto é uma aplicação de cadastro e login de usuários utilizando o Firebase Authentication. A aplicação permite que novos usuários se cadastrem com um email e senha, e usuários existentes façam login. Este é um passo importante no aprendizado de autenticação e gerenciamento de usuários em aplicações web.

## Tecnologias Utilizadas
- React
- Firebase Authentication
- Firebase Firestore
- React Firebase Hooks
- React Router
- CSS

## Estrutura do Projeto
O projeto está estruturado da seguinte forma:


## Configurando o Firebase
Antes de executar o projeto, é necessário configurar o Firebase. Crie um projeto no Firebase, habilite o Authentication com Email/Password e configure o Firestore.

### `firebaseConfig.js`
Certifique-se de incluir suas credenciais do Firebase no arquivo de configuração:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

## Componente de Cadastro
O componente CadastrarUsuario permite que os usuários se cadastrem com um email e senha. Ele utiliza hooks do React para gerenciar o estado e hooks do Firebase para lidar com a autenticação.

## Notas
lembrando que as páginas que vem após o cadastro ou login foram retiradas do site https://www.free-css.com/

## Conclusão
Este projeto é uma implementação básica de cadastro e login de usuários utilizando Firebase Authentication em uma aplicação React. É uma excelente maneira de começar a entender como autenticar usuários e gerenciar suas sessões em aplicações web modernas.

## Contribuição

Este é um projeto de código aberto, então sinta-se à vontade para contribuir com sugestões, correções de bugs ou até mesmo novas funcionalidades. Todas as contribuições são bem-vindas!

## Licença 

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

