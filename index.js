/**
 * Transform an array with only unique values
 * @param array array
 * @return array
 */
const array_unique = (array) => {
  return array.filter(function(currentItem, currentIndex) {
    return array.indexOf(currentItem) == currentIndex;
  });
}

/**************************************************************************************************************/

/**
 * Lets suppose that we have an array of objects
 * And we need to get minimum or maximum value of the certain property within all objects
 * @return mixed
 */
const getProps = () => data.map(obj => obj.prop);
const getMinProp = () => Math.min(...getProps());
const getMaxprop = () => Math.max(...getProps());

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

// Usage example (e.g. we want to group by 'uid' property, which id in the 'dataset' property)
groupBy([].slice.call(document.querySelectorAll('.class1 .class2')), 'dataset.uid');


/**************************************************************************************************************/

/**
 * Lets suppose that we have an array of objects
 * And we have to find in this array an object, which prop's value mathes to the transmitted value
 * @param array array
 * @param string prop
 * @param string val
 * @return object
 */
const findBy = (array, prop, val) => {
    return array.find(obj => {
        console.log('qwe ' + obj[prop] + ' qwe');
        return obj[prop] === val;
    });
}
