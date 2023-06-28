const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
   let sort = [...arr];
   let arr1 = [];
   let res = sort.map((el) => {
      if (el !== -1) {
         arr1.push(el);
         el = ' ';
      }
      return el
   });
   arr1.sort((a, b) => a - b);
   return res.map(x => {
      if (x === ' ') {
         return x = arr1.shift();
      }
      return x;
   });


}

module.exports = {
   sortByHeight
};
