import { getRandomColor, logStuff } from '../../helpers';

export const CHANGE_COLOR = 'CHANGE_COLOR';

export function changeColor() {
  const randomColor = getRandomColor();
  logStuff(
    'Action Creator Invoked',
    '#c62828',
    ['Action', { type: CHANGE_COLOR, payload: randomColor }],
    true
  );
  // debugger;

  return {
    type: CHANGE_COLOR,
    payload: randomColor
  };
}
