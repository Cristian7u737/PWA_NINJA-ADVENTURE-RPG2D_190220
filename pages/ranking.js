import LayoutFront from "../components/layout/LayoutFront";
import axios from 'axios';

const IgoRanking = ({ players, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Ranking - Ninja Adventure RPG2D"}
                pageTitle={"Ranking"}
                pageTitleSub={"Bienvenido al Ranking"}
                parent={"Inicio"}
                child={"Ranking"}
            >
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ranking-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>ID del Jugador</th>
                                                    <th>Avatar</th>
                                                    <th>Nombre Player</th>
                                                    <th>Nickname</th>
                                                </tr>
                                                {players.map((player) => (
                                                    <tr key={player.id}>
                                                        <td /* width='40%' */>{player.id}</td>
                                                        <td /* width='40%' */>{player.avatar_url}</td>
                                                        <td /* width='40%' */>{player.name}</td>
                                                        <td /* width='40%' */>{player.nickname}</td>
                                                        {/* <td width='40%'>{player.tb_games[0].monedas}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};
IgoRanking.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:8080/players/');
        const players = res.data;
        return { players };
    } catch (error) {
        return { error };
    }
};

export default IgoRanking;