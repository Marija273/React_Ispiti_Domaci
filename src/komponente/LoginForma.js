import { useState } from 'react';


function LoginForma(props) {


    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');

    function updateKIme(e) {
        setKorisnickoIme(e.target.value);
    }

    function updateLoz(e) {
        setLozinka(e.target.value);
    }

    return (
        <div className="loginforma">

            <h4 id="username-h3">Korisničko ime</h4>
            <input type="text" className="form-control" id="username-login" value={korisnickoIme} onChange={updateKIme} />

            <h4 id="password-h3">Lozinka</h4>
            <input type="password" className="form-control" id="password-login" value={lozinka} onChange={updateLoz} />

            <button className="btn btn-primary" onClick={() => props.login(korisnickoIme, lozinka)} id="login-dugme">Prijavi se</button>

        </div >
    )
}

export default LoginForma;