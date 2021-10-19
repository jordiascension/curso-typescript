/* eslint-disable @typescript-eslint/no-unused-vars */
function logPerimeter< // 1
Shape extends HasSides & SidesHaveLength // 2
>(s: Shape): Shape { // 3
  console.log(s.numberOfSides * s.sideLength);
  return s;
}
