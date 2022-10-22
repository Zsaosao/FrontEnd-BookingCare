import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';
import './Login.scss';
import { useState } from 'react';

import { handleLoginApi } from '../../services/userService';
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const [seePass, setSeePass] = useState(false);

    const handleSeePass = () => {
        setSeePass((prev) => !prev);
    };
    const handleLogin = async () => {
        try {
            let res = await handleLoginApi(email, password);
            setMessage(res.data.message);
            if (res.data.errCode === 0) {
                props.userLoginSuccesss(res.data.user);
            }
        } catch (e) {
            setMessage(e.response.data.message);
        }
    };
    return (
        <div className="login__background">
            <div className="login__container">
                <div className="login__content row">
                    <div className="col-12 text__login ">Login</div>
                    <div className="col-12 form-group login__input">
                        <label>Email</label>
                        <input
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-12 form-group login__input">
                        <label>Password</label>
                        <div className="wrapper">
                            <input
                                type={!seePass ? 'password' : 'text'}
                                className="form-control"
                                placeholder="Enter your passord"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {!seePass ? (
                                <i onClick={handleSeePass} className="fas fa-eye-slash eye"></i>
                            ) : (
                                <i onClick={handleSeePass} className="fas fa-eye eye"></i>
                            )}
                        </div>
                        <div style={message !== 'OK' ? { color: 'red' } : { color: 'green' }} className="message">
                            {message}
                        </div>
                    </div>
                    <div className="col-12 ">
                        <button onClick={handleLogin} className="btn__login">
                            Login
                        </button>
                    </div>
                    <div className="col-12">
                        <span className="forgot__ps">Forgot your password?</span>
                    </div>
                    <div className="col-12">
                        <span className="other_login">Or login with</span>
                    </div>
                    <div className="col-12 select__login">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-google"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccesss: (userInfor) => dispatch(actions.userLoginSuccesss(userInfor)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
