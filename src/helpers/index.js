export function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

let cycle = 1;

export function logStuff(title, color, nested, begin) {
  if (begin) {
    console.log(`%c<----- UPDATE CYCLE ${cycle++} ----->`, 'font-size: small');
  }
  console.groupCollapsed(`%c ${title}`, `color: ${color}; font-size: large`);
  nested &&
    nested.forEach(item => {
      console.log(item);
    });
  console.groupEnd();
}
