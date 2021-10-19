/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
type Color = 'Negro' | 'Blanco';
type FilePosition = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type RankPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: FilePosition, private rank: RankPosition) {}
}

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

class King extends Piece {} // error TS2515: Non-abstract class 'King'
                            // does not implement inherited abstract member
