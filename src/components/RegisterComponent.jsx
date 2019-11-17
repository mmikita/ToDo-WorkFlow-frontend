import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import '../css/Login.css';
import { Link, withRouter } from 'react-router-dom'


class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/5starflow`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
        // const { history, location } = this.props;
        // if (location.pathname === '/courses') {
        //   history.replace(`/reload`);
        //   setTimeout(() => {
        //     history.replace(`/5starflow`);
        //   });
        // } else {
        //   history.push('/5starflow');
        // }
        // this.props.history.push(`/5starflow`)
        // this.setState({showSuccessMessage:true})
        // this.setState({hasLoginFailed:false})
        // }
        // else {
        //      this.setState({showSuccessMessage:false})
        //      this.setState({hasLoginFailed:true})
        // }
    }

    render() {
        return (
            <div className="loginContainer">

                <div className="login">
                    <div className="logo">Klikaj 5stary</div>
                    <div>
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Nieprawidłowe dane</div>}
                        {this.state.showSuccessMessage && <div>Zalogowany</div>}
                        <div className="form-field">

                            <label className="user" htmlFor="login-username"><span className="hidden">Login</span></label>
                            <input id="login-username" type="text" className="form-input" placeholder="Login" name="username" value={this.state.username} onChange={this.handleChange} required />
                        </div>
                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Hasło</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Hasło" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Powtórz hasło</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Powtórz hasło" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                               <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Tajne hasło</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Tajne hasło" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>

                        <div className="row form-field">
                            <button className="btn btn-success" onClick={this.loginClicked}>Rejestracja</button>
                        </div>

                    </div>
                </div>
                    <div className="register">
                        <Link className="nav-link" to="/" onClick={AuthenticationService.logout}>Zaloguj sie</Link>
                    </div>
               
            </div>


        )
    }
}

export default RegisterComponent