import React from "react";
import Board from "./Board";
import UserGridCard from "./UserGridCard";

function UserGrid(props) {
  const gridSize = 5;
  const gridData = Array(Math.pow(gridSize, 2)).fill(null);
  const tileData = [];
  return (
    <>
      <div class="inline items-end">
        <div class="inline mb-7">
          <UserGridCard
            name={props.name}
            rank={props.rank}
            upvotes={props.upvotes}
          />
        </div>

        <Board
          config={{
            rows: 5,
            cols: 5,
            name: <span>Board 1</span>,
            squareDataList: [
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
            ],
            tileDataList: [],
          }}
        />
      </div>
    </>
  );
}

export default UserGrid;
