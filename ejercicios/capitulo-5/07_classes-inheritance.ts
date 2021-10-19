/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      // Reyes
      new King('Blanco', 'E', 1),
      new King('Negro', 'E', 8),
      // Damas
      new Queen('Blanco', 'D', 1),
      new Queen('Negro', 'D', 8),
      // Alfiles
      new Bishop('Blanco', 'C', 1),
      new Bishop('Blanco', 'F', 1),
      new Bishop('Negro', 'C', 8),
      new Bishop('Negro', 'F', 8),
      // Caballos
      new Knight('Blanco', 'B', 1),
      new Knight('Blanco', 'G', 1),
      new Knight('Negro', 'B', 8),
      new Knight('Negro', 'G', 8),
      // Torres
      new Rook('Blanco', 'A', 1),
      new Rook('Blanco', 'H', 1),
      new Rook('Negro', 'A', 8),
      new Rook('Negro', 'H', 8),
      // Peones
      new Pawn('Blanco', 'A', 2),
      new Pawn('Blanco', 'B', 2),
      new Pawn('Blanco', 'C', 2),
      new Pawn('Blanco', 'D', 2),
      new Pawn('Blanco', 'E', 2),
      new Pawn('Blanco', 'F', 2),
      new Pawn('Blanco', 'G', 2),
      new Pawn('Blanco', 'H', 2),
      new Pawn('Negro', 'A', 7),
      new Pawn('Negro', 'B', 7),
      new Pawn('Negro', 'C', 7),
      new Pawn('Negro', 'D', 7),
      new Pawn('Negro', 'E', 7),
      new Pawn('Negro', 'F', 7),
      new Pawn('Negro', 'G', 7),
      new Pawn('Negro', 'H', 7),
    ];
  }
}
