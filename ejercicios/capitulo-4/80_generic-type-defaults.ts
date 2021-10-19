/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
type MyEvent<T> = {
  target: T
  type: string
}

const buttonEvent: MyEvent<HTMLButtonElement> = {
  target: myButton,
  type: string
};
