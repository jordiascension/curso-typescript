/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
abstract class Piece {
  protected position: Position;

  constructor(
    private readonly color: Color,
    file: FilePosition,
    rank: RankPosition
  ) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}
