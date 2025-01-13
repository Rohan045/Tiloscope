import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../assets/usergrid-background.svg";
import Board from "../components/Board";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import { getApiCall } from "../interceptors/ApiCallInterceptors";

const ShareViewPage = () => {
  const { id } = useParams();
  const [boardInfo, setBoardInfo] = useState();

  useEffect(() => {
    const getPlayerBoardInfo = async () => {
      try {
        const response = await getApiCall(`/shareView/${id}`, {});
        setBoardInfo(response);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayerBoardInfo();
  }, []);

  const convertToThisList = (playerBoardSquares) => {
    const thisList = [];
    playerBoardSquares.forEach((square) => {
      const thisSquare = {
        squareId: square.squareId,
        playerBoardSquareId: square.id,
        tiles: square.tiles === null ? [] : square.tiles,
      };
      thisList.push(thisSquare);
    });
    return thisList;
  };

  return (
    <>
      <Header />

      {boardInfo && (
        <div className="flex flex-col bg-black">
          <div className="p-5">
            <UserInfo
              config={{
                name: boardInfo?.player?.name,
                // email: "Player Email",
                description: boardInfo?.player?.description,
                // rank: "Player Rank",
                photoUrl: boardInfo?.player?.photoUrl,
              }}
            />
          </div>

          <div
            className="centered h-[70vh] overflow-auto"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover", // adjust to your needs
              backgroundPosition: "center", // adjust to your needs
            }}
          >
            <Board
              config={{
                rows: boardInfo?.board?.rows,
                cols: boardInfo?.board?.cols,
                name: <span>Board 1</span>,
                squareDataList: convertToThisList(
                  boardInfo?.playerBoardSquares
                ),
                tileDataList: [],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShareViewPage;
