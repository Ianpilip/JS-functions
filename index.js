/**
 * Transform an array with only unique values
 * @param {Array} array
 * @return {Array}
 */
const arrayUnique = (array) => {
  return array.filter(function(currentItem, currentIndex) {
    return array.indexOf(currentItem) == currentIndex;
  });
}

/**************************************************************************************************************/

/**
 * Lets suppose that we have an array of objects
 * And we need to get minimum or maximum value of the certain property within all objects
 * @param {Array} array
 * @return {Mixed}
 */
const getProps = (array) => array.map(obj => obj.prop);
const getMinProp = (array) => Math.min(...getProps(array));
const getMaxprop = (array) => Math.max(...getProps(array));

/**************************************************************************************************************/

/**
 * Group by property (including nested properties)
 * Set the param about property (nested property) like that - 'prop1.prop2.prop3'
 * Below is the usage example
 * @param {Array} array
 * @param {String} key
 * @return {Object}
 */
const groupBy = (array, key) => {

    const _fetchFromObject = (obj, prop) => {
        let _index = prop.indexOf('.');

        // nested property was found, use a recursive
        if(_index > -1) {
            // get an object from the property, return a remainder
            return _fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
        }

        // if there wasn't nested properties
        return obj[prop];
    }

    return array.reduce((result, currentValue) => {
        let search;
        let _index = key.indexOf('.');
        if(_index < 0) {
            search = currentValue[key];
        } else {
            search = _fetchFromObject(currentValue, key);
        }
        result[search] = [...result[search] || [], currentValue];
        return result;
    }, {});

};

// Usage example (e.g. we want to group by 'uid' property, which is in the 'dataset' property)
groupBy([].slice.call(document.querySelectorAll('selector')), 'dataset.uid');

/**************************************************************************************************************/

/**
 * Works with multidimensional objects also and transforms nested properties
 * @param {Object} object
 * @return {Object}
*/
const objectPropertiesToLowerCase = (object) => {
  return Object.keys(object).reduce((res, prop) => {
    if(object[prop] && object[prop].constructor === Object) {
      res[prop.toLowerCase()] = objectPropertiesToLowerCase(object[prop]);
    } else {
      res[prop.toLowerCase()] = object[prop];
    }
    return res;
  }, {});
}

/**************************************************************************************************************/

/**
 * @param {Object} object
 * @param {String} key
 * @return {Boolean}
*/
const hasOwnPropertyCaseInsensitive = (object, key) => {
  return Boolean(object[Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase())]);
}

/**************************************************************************************************************/

/**
 * Lets suppose that we have an array of objects
 * And we have to find in this array an object, which prop's value mathes to the transmitted value
 * @param {Array} array
 * @param {String} prop
 * @param {String} value
 * @return {Object}
 */
const findBy = (array, prop, value) => {
    return array.find(obj => {
        return obj[prop] === value;
    });
}

/**************************************************************************************************************/

/**
 * Removes an element from an array (strong typing comparison)
 * @param {Array} array
 * @param {String} value
 * @return {Array}
 */
const unsetFromArray = (array, value) => {
   return array.filter(element => element !== value);
}


/**************************************************************************************************************/

/**
 * Gives a random hash with combined string symbols and integers
 * @return {String}
 */
function getRandHash() {
  return Math.random().toString(16).substring(2);
}
