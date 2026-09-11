import { use } from "react";
import type { Iplayer } from "../../types/player";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players);
  return <div></div>;
};

export default Players;
