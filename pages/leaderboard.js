import LayoutFront from "../components/layout/LayoutFront";
import axios from 'axios';
const Leaderboard = ({ games, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Leaderboard - Ninja Adventure RPG2D"}
                pageTitle={"Leaderboard"}
                pageTitleSub={"Bienvenido al Leaderboard"}
                parent={"Inicio"}
                child={"Leaderboard"}

            >
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="leaderboard-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>Num. Partida</th>
                                                    {/* <th>ID del Jugador</th> */}
                                                    <th>Num Enemigos Derrotados</th>
                                                    <th>Misiones Cumplidas</th>
                                                    <th>Monedas</th>
                                                </tr>
                                                {games.map((game) => (
                                                    <tr key={game.id}>
                                                        <td /* width='40%' */>{game.id}</td>
                                                        {/* <td width='40%'>{game.tb_players[0].id}</td> */}
                                                        <td /* width='40%' */>{game.numEnemigosDerrotados}</td>
                                                        <td /* width='40%' */>{game.misionesCumplidas}</td>
                                                        <td /* width='40%' */>{game.monedas}</td>
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
Leaderboard.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:8080/games/');
        const games = res.data;
        return { games };
    } catch (error) {
        return { error };
    }
};
export default Leaderboard;