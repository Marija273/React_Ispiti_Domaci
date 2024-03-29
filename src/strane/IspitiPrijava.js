import { useState } from 'react';
import Prijavljeni from '../komponente/Prijavljeni';

function IspitiPrijava() {

    const ispiti = [
        { id: 1, ispit: 'Projektovanje softvera', espb: '6' },
        { id: 2, ispit: 'Internet tehnologije', espb: '6' },
        { id: 3, ispit: 'Inteligentni sistemi', espb: '6' },
        { id: 4, ispit: 'Projektovanje informacionih sistema', espb: '6' },
        { id: 5, ispit: 'Osnove kvaliteta', espb: '5' },
    ]


    const [prijavljeniIspiti, setPrijavljeniIspiti] = useState([]);


    function dodaj(id) {

        ispiti.forEach(ispit => {
            if (ispit.id === id) {
                setPrijavljeniIspiti(prijavljeniIspiti => [...prijavljeniIspiti, ispit]);
            }
        });
    }

    return (
        <div className="ispitiprijava">
            <h1 className="mt-3">Prijava ispita</h1>

            <table className="table" id="tableispiti">
                <thead>
                    <tr>
                        <th>Ispit</th>
                        <th>ESPB</th>
                        <th>Prijava</th>
                    </tr>
                </thead>


                <tbody>
                    {ispiti.map(ispit => {
                        return (
                            <tr key={ispit.id}>
                                <td>{ispit.ispit}</td>
                                <td>{ispit.espb}</td>
                                <td><button onClick={() => dodaj(ispit.id)} className="btn btn-primary" value={ispit.id}>Prijavi</button></td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

            <Prijavljeni prijavljeni={prijavljeniIspiti} />


        </div>
    );
}

export default IspitiPrijava;