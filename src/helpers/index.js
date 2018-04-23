/**
 * This function has no default export, which means every exported
 *  item must be imported elsewhere by name. The default export will
 *  be an object containing all the exported stuff.
 *
 * This is analogous to exports.function or module.exports = {}
 *  when using Node/Common.js modules
 */

/**
 * This function generates a random valid CSS hex color code.
 *  Credit: https://www.paulirish.com/2009/random-hex-color-code-snippets/
 */
export function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// ew gross, a stateful variable being kept in memory
let cycle = 1;

/**
 * Helper function for pretty console logs!
 * @param {String} title - what console.group to log out in large text
 * @param {String} color - what color do you want the title to be
 * @param {Array} nested - anything in this array gets looped over and console.log'd on its own line
 * @param {Boolean} begin - whether or not the console.log is the started of a new Redux cycle
 */
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
