import { getRandomColor } from '../../helpers';

export const CHANGE_COLOR = 'CHANGE_COLOR';

export function changeColor() {
  const randomColor = getRandomColor();
  console.log(
    '*** ACTION CREATOR *** Dispatching CHANGE_COLOR action to the reducer...'
  );
  debugger;
  return {
    type: CHANGE_COLOR,
    payload: randomColor
  };
}
