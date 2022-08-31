import LoginForma from "../komponente/LoginForma";

function Login() {

    var studenti = [
        { ime: 'Nikola', brojIndeksa: '1/18', korisnickoIme: '20180001', lozinka: '1', smer: 'ISIT' },
        { ime: 'Jovana', brojIndeksa: '2/18', korisnickoIme: '201800023', lozinka: '2', smer: 'ISIT' },
        { ime: 'Dragana', brojIndeksa: '3/18', korisnickoIme: '2018000', lozinka: '3', smer: 'ISIT' }
    ]


    return (
        <div className="login">

            <LoginForma />

        </div>
    );
}

export default Login;