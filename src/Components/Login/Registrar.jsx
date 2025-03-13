import { useState } from "react";
import {FaUser, FaLock, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import "./Registrar.css";
import { Link } from "react-router-dom";//essa linha está vinculada a linha 55

    const Registrar = () => {
        const [nomeCompleto, setNomeCompleto] = useState("");
        const [idade, setIdade] = useState("");
        const [facebook, setFacebook] = useState("");
        const [email, setEmail] = useState("");
        const [github, setGithub] = useState("");
        const [linkedln, setLinkedln] = useState("");
        const [senha, setSenha] = useState("");

         // Função que é chamada quando o formulário é enviado
         const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Dados de cadastro: ", { nomeCompleto, idade, facebook, email, github, linkedln, senha})       
         };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Registre-se no sistema</h1>
                <div className="input-field">
                    <input
                     type="text"
                     placeholder="Nome"
                     required
                     value={nomeCompleto}
                     onChange={(e) => setNomeCompleto(e.target.value)}
                     />
                     <FaUser className="icon"/>
                </div>
                <div className="input-field">
                <input 
                type="number"
                placeholder="Idade"
                required
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                />
                </div>
                <div className="input-field">
                    <input 
                    type="text"
                    placeholder="Facebook"
                    required
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                     />
                     <FaFacebook className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                    type="text"
                    placeholder="Github"
                    required
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    />
                    <FaGithub className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="text"
                        placeholder="Linkedln"
                        required
                        value={linkedln}
                        onChange={(e) => setLinkedln(e.target.value)}
                    />
                    <FaLinkedin className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                    type="text"
                    placeholder="Senha"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className="icon"/>
                </div>
                <button type="submit"> Criar conta</button>

                <div className="login-link">
                    <p>
                    <Link to="/Login">Já tem uma conta? Entrar</Link>
                    </p>
                </div>
            
                
            </form>
        </div>
    );


    } 
    export default Registrar;

