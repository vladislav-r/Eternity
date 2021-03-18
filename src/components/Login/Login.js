import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import PreloaderNew from "../common/Preloader/PreloaderNew";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {LoginRequiredInput} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const maxPsswordLength =  maxLengthCreator(10)

const LoginForm = (props) => {

    return (
      <div className={s.loginFormBlock} >
          <h1 className={s.title}>Авторизация</h1>
          <form className={s.loginForm} onSubmit={props.handleSubmit}>
              <div className={s.loginEmailBlock}>
                  <Field validate={[required]} className={s.loginUsername} placeholder={'Email'} name={'email'} component={'input'} type={'email'}/>
              </div>
              <div className={s.loginPasswordBlock}>
                  <Field validate={[required]} className={s.loginPassword} placeholder={'Пароль'} type={'password'} name={'password'} component={'input'}/>
              </div>
              <div className={s.loginRememberMeBlock}>
                  <Field className={s.loginRememberMeCheckBox} type={'checkbox'} name={'rememberMe'} component={'input'}/>
                  <label className={s.loginRememberMeLabel} htmlFor="rememberMe">Запомнить меня</label>
              </div>
              <div className={s.errorsField}>
                    <span>{props.error}</span>
              </div>
              <div className={s.loginButtonBlock}>
                  <button className={s.loginButton}>Войти</button>
              </div>
          </form>
          {/*<PreloaderNew />*/}
      </div>
    )
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit  = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
          return <Redirect to={'/profile'}/>
    }
    
    return (
        <div className={s.loginPage}>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)

