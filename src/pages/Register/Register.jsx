import styles from './Register.module.css'

//hooks react
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//hooks created
import { useAuthentication } from '../../hooks/useAuthentication'
 
const Register = () => {

  //variable page
  const [formError, setFormError] = useState("")

  //functions
  const handleSubmit = (e) => {
  e.preventDefault()

  if(!email || !password || !admName || !companyName || !confirmPassword || !description){
    return setFormError("Preencha todos os campos do formulário")
  }

  if(password !== confirmPassword){
    return setFormError("As senhas não são iguais!")
  }

  createUser({
    email,
    password,
    displayName: admName,
  })

}

  //variable other pages
  const { loading, error, createUser } = useAuthentication()

  useEffect(() => {
    if(error){
      setFormError(error)
    }
  }, [error])

  //E-mail, senha e name irão para autenticação
  //Outros irão para outro collection
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [admName, setAdmName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [description, setDescription] = useState("")

  //update error

  return (
    <div className='form'>
      <div className='form_container'>

        <div className='banner_left_form'>
          <h3>Logo<span>LG</span></h3>
          <div className='container_box_questions'>
            <div className="question_box">
              <h3>Em que setores este sistema é útil?</h3>
              <p>É útil para empresas de todos os setores que desejam simplificar a gestão de pedidos e vendas.</p>
            </div>
            <div className="question_box">
              <h3>Quais benefícios este sistema oferece às empresas?</h3>
              <p>Ajuda a economizar tempo, recursos e a aumentar a eficiência operacional.</p>
            </div>
          </div>
        </div>

        <div className='form_main'>

          <div className="form_wrapper_wrapper">
            <h2>Seja bem-vindo!</h2>
            
            <div className="form_wrapper">
              <h3>Cadastre-se</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Nome da empresa</span>
                  <input 
                    className='inputs_form'
                    type="text"
                    placeholder='Digite o nome da empresa'
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                  />
                </label>

                <label>
                  <span>Email da empresa</span>
                  <input
                    className='inputs_form'
                    type="email"
                    placeholder='Digite o email da empresa'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
                
                <label>
                  <span>Nome do Administrador</span>
                  <input
                    className='inputs_form'
                    type="text"
                    placeholder='Digite o nome do administrador'
                    onChange={(e) => setAdmName(e.target.value)}
                    value={admName}
                  />
                </label>

                <label>
                  <span>Senha</span>
                  <input
                    className='inputs_form'
                    type="password"
                    placeholder='Digite a senha'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </label>

                <label>
                  <span>Confirme a Senha</span>
                  <input
                    className='inputs_form'
                    type="password"
                    placeholder='Digite a senha'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </label>

                <label>
                  <span>Descrição da empresa</span>
                  <textarea
                    className='inputs_form'
                    type="text"
                    placeholder='Descreva sua empresa...'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </label>

                {!loading && <button className='btn btn_form'>Continuar</button>}
                {loading && <button className='btn btn_form btn_disabled' disabled>Aguarde...</button>}
                
              </form>
              {formError && <p className='box_error'>{formError}</p>}
              <div className="redirectUser">
                <p>Já tem uma conta? <Link to="/login">Login</Link></p>
                <Link className='redirect_home' to="/">Ir para a Home</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register
