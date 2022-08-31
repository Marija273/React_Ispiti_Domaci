import LoginForma from "../komponente/LoginForma";
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();


    var studenti = [
        { ime: 'Nikola', brojIndeksa: '1/18', korisnickoIme: '20180001', lozinka: '1', smer: 'ISIT' },
        { ime: 'Jovana', brojIndeksa: '2/18', korisnickoIme: '201800023', lozinka: '2', smer: 'ISIT' },
        { ime: 'Dragana', brojIndeksa: '3/18', korisnickoIme: '2018000', lozinka: '3', smer: 'ISIT' }
    ]

    function login(korisnickoIme, lozinka) {
        studenti.forEach(student => {
            if (student.korisnickoIme === korisnickoIme && student.lozinka === lozinka) {
                navigate('/ispitiprijava')
            }
        });
    }



    return (
        <div className="login">

            <LoginForma login={login} />

        </div>
    );
}

export default Login;