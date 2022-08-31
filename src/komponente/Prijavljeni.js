function Prijavljeni(props) {
    return (
        <div className="prijavljeni">

            <h2 id="naslovjun">JUN</h2>

            <table className="table" id="tableprijavljeni">
                <thead>
                    <tr>
                        <th>Ispit</th>
                        <th>ESPB</th>
                    </tr>
                </thead>


                <tbody>
                    {props.prijavljeni.map(ispit => {
                        return (
                            <tr key={ispit.id}>
                                <td>{ispit.ispit}</td>
                                <td>{ispit.espb}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default Prijavljeni;