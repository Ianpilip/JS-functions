/**
 * Transform an array with only unique values
 * @param array array
 * @return array
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
 * @param array array
 * @return mixed
 */
const getProps = (array) => array.map(obj => obj.prop);
const getMinProp = (array) => Math.min(...getProps(array));
const getMaxprop = (array) => Math.max(...getProps(array));

/**************************************************************************************************************/

/**
 * Group by property (including nested properties)
 * Set the param about property (nested property) like that - 'prop1.prop2.prop3'
 * Below is the usage example
 * @param array array
 * @param string key
 * @return object
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
 * Lets suppose that we have an array of objects
 * And we have to find in this array an object, which prop's value mathes to the transmitted value
 * @param array array
 * @param string prop
 * @param string value
 * @return object
 */
const findBy = (array, prop, value) => {
    return array.find(obj => {
        return obj[prop] === value;
    });
}

/**************************************************************************************************************/

/**
 * Removes an element from an array (strong typing comparison)
 * @param array array
 * @param string value
 * @return array
 */
const unsetFromArray = (array, value) => {
   return array.filter(element => element !== value);
}


/**************************************************************************************************************/

/**
 * Gives a random hash with combined string symbols and integers
 * @return string
 */
function getRandHash() {
  return Math.random().toString(16).substring(2);
}
