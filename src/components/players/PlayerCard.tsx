import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchase successfully`);
    } else {
      toast.warning("Coin is not enough to purchase");
    }
    // Selected players logic
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <span className="absolute right-3 top-3 rounded-full bg-base-100/90 px-3 py-1 text-sm font-semibold shadow backdrop-blur">
          {player.playerType}
        </span>
      </figure>

      {/* Card Content */}
      <div className="card-body gap-4 p-5">
        {/* Player Name */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FaUser className="text-primary" />
            {player.playerName}
          </h2>

          <p className="mt-1 flex items-center gap-2 text-sm text-base-content/60">
            <FaFlag className="text-primary" />
            {player.origin}
          </p>
        </div>

        <div className="divider my-0"></div>

        {/* Playing Style */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Playing Style
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Batting</p>
              <p className="mt-1 font-semibold">{player.battingStyle}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Bowling</p>
              <p className="mt-1 font-semibold">{player.bowlingStyle}</p>
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-center">
            <p className="text-xl font-bold text-base-content/60">Price:</p>
            <p className="text-xl font-bold text-primary">${player.price}</p>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className="btn btn-primary rounded-xl px-5"
            disabled={isSelected === true ? true : false}
            // disabled={isSelected ? true : false}
            // disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
