const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
   if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`)
   }
   let array = [...arr];


   for (let elem in array) {
      if (typeof elem === 'number') {
         return arr
      }
   }

   for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (typeof value === 'string') {
         if (value === '--discard-prev') {
            array[i] = '';
            i > 1 ? array[i - 1] = '' : '';
         }
         if (value === '--discard-next') {
            array[i] = ''
            i < array.length ? array[i + 1] = '' : '';
         }
         if (value === '--double-prev') {
            array[i] = array[i - 1] ? array[i - 1] : '';
         }
         if (value === '--double-next') {
            array[i] = array[i + 1] ? array[i + 1] : '';
         }
      }
   }
   return array.filter(elem => elem != '');
};

module.exports = {
   transform
};
