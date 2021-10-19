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
}

const piece = new Piece("Blanco", "E", 1); // Error TS2511: Cannot create an instance of an abstract class.
