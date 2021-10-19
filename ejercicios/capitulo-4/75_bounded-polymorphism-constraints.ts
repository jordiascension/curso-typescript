type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): Shape {
  console.log(s.numberOfSides * s.sideLength);
  return s;
}

type Square = HasSides & SidesHaveLength;
const square: Square = { numberOfSides: 5, sideLength: 10 };
logPerimeter(square); // 50
