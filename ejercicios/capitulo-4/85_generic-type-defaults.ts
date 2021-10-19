type MyEvent3<
  Target extends HTMLElement = HTMLElement,
  Type extends string // Error TS2706: Required type parameters may not follow
  // optional type parameters.
> = {
  target: T;
  type: string;
};
