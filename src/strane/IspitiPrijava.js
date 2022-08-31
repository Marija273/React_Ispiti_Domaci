import { useState } from 'react';

function IspitiPrijava() {

    const ispiti = [
        { id: 1, ispit: 'Projektovanje softvera', espb: '6' },
        { id: 2, ispit: 'Internet tehnologije', espb: '6' },
        { id: 3, ispit: 'Inteligentni sistemi', espb: '6' },
        { id: 4, ispit: 'Projektovanje informacionih sistema', espb: '6' },
        { id: 5, ispit: 'Osnove kvaliteta', espb: '5' },
    ]


    const [prijavljeniIspiti, setPrijavljeniIspiti] = useState([]);


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
                                <td><button className="btn btn-primary" value={ispit.id}>Prijavi</button></td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>



        </div>
    );
}

export default IspitiPrijava;