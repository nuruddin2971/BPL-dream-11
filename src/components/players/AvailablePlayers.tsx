import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-6">
      {players.map((player: Iplayer, ind: number) => {
        return <PlayerCard key={ind} player={player}></PlayerCard>;
      })}
    </div>
  );
};

export default AvailablePlayers;
