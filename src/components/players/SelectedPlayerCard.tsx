import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayerCardProps {
  player: Iplayer;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayerCardProps) => {
  const handleRemovePlayer = (player: Iplayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );

    setSelectedPlayers(restPlayers);

    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };
  return (
    <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
      <div className="flex gap-2 items-center">
        <img src={player.playerImg} alt="" className="h-15 w-15 rounded-2xl" />
        <div>
          <h2 className="font-bold text-2xl">{player.playerName}</h2>
          <h2>{player.playerType}</h2>
        </div>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer hover:bg-red-300"
        onClick={() => handleRemovePlayer(player)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default SelectedPlayerCard;
