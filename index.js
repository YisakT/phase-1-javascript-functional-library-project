function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}
function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      result.push(callback(collection[key]));
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let result = acc;
  let values = [];
  if (Array.isArray(collection)) {
    values = collection;
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      values.push(collection[key]);
    }
  }
  if (result === undefined) {
    result = values[0];
    values = values.slice(1);
  }
  for (let i = 0; i < values.length; i++) {
    result = callback(result, values[i], collection);
  }
  return result;
}
function myFind(collection, predicate) {
  let values = [];
  if (Array.isArray(collection)) {
    values = collection;
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      values.push(collection[key]);
    }
  }
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = [];
  let values = [];
  if (Array.isArray(collection)) {
    values = collection;
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      values.push(collection[key]);
    }
  }
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      result.push(values[i]);
    }
  }
  return result;
}

function mySize(collection) {
    let size = 0;
    if (Array.isArray(collection)) {
      size = collection.length;
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        size++;
      }
    }
    return size;
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }


  function myKeys(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
  
  function myValues(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(object[key]);
      }
    }
    return result;
  }
  