import { useEffect, useState } from 'react'
import styles from './Login.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useAuthentication }  from '../../hooks/useAuthentication'

const Login = () => {
  
  const [formError, setFormError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, error, loading } = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(!email || !password ){
      return setFormError("Preencha todos os campos!")
    }

    await login({
      email,
      password
    })

  }

  useEffect(() => {
    
    if(error){
      setFormError(error)
    }

  }, [error])

  return (
    <div className='form'>
      <div className='form_container'>

        <div className='banner_left_form'>
          <h3>Logo<span>LG</span></h3>
          <div className='container_box_questions'>
            <div className="question_box">
              <h3>Este sistema é adequado para pequenas empresas?</h3>
              <p>Sim, é adequado para empresas de todos os tamanhos, desde pequenas startups até grandes corporações.</p>
            </div>
            <div className="question_box">
              <h3>Posso acessar o sistema de qualquer lugar?</h3>
              <p>Sim, nosso sistema é baseado na web e pode ser acessado de qualquer dispositivo com conexão à internet.</p>
            </div>
          </div>
        </div>

        <div className='form_main'>

          <div className="form_wrapper_wrapper">
            <h2>Seja bem-vindo de volta!</h2>
            
            <div className="form_wrapper">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>

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
                  <span>Senha</span>
                  <input
                    className='inputs_form'
                    type="password"                    
                    placeholder='Digite a senha'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </label>

                {!loading && <button className='btn btn_form'>Continuar</button>}
                {loading && <button className='btn btn_form'>Aguarde...</button>}
                
              </form>

              {formError && <p className='box_error'>{formError}</p>}

              <div className="redirectUser">
                <Link>Esqueceu sua senha?</Link>
                <span>OU</span>
                <p>Não tem uma conta?<Link to="/register">Cadastre-se</Link></p>
                <Link className='redirect_home' to="/">Ir para a Home</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login