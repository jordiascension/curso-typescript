/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable max-classes-per-file */
type Color = 'Negro' | 'Blanco';
type FilePosition = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type RankPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // 1

class Position {
  constructor(
    private file: FilePosition, // 2
    private rank: RankPosition
  ) {}
}

class Piece {
  protected position: Position; // 3

  constructor(
    private readonly color: Color, // 4
    file: FilePosition,
    rank: RankPosition
  ) {
    this.position = new Position(file, rank);
  }
}
