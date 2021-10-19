type MyEvent2<
  Type extends string,
  Target extends HTMLElement = HTMLElement
> = {
  target: Target;
  type: Type;
};
