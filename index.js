const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };




function standardInput (collection) {
    return collection instanceof Array 
    ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) { 
    let standardInp = standardInput(collection)

    for (let i=0; i < standardInp.length ; i++){
         callback(standardInp[i]);
    }

    return collection;
};


function myMap(collection, callback) { 
    let standardInp = standardInput(collection)

    let newArray = []

    for (let i=0; i < standardInp.length ; i++){
         newArray.push(callback(standardInp[i]))
    }

    return newArray;
};

function myReduce(collection, callback, acc) { 

    let standardInp = standardInput(collection)

    if (!acc) {
        acc = standardInp[0]
        standardInp = standardInp.slice(1); //slice out first value since already used
    }

    for (let i=0; i < standardInp.length ; i++){
  
     acc = callback(acc, standardInp[i], collection)

    }
    return acc

};




function myFind(collection, callback) { 
    let standardInp = standardInput(collection)

    for (let i=0; i < standardInp.length ; i++){
        if (callback(standardInp[i])) return standardInp[i]
    }
    return undefined;
};






function myFilter(collection, callback) { 
    let standardInp = standardInput(collection)

    let newArray = []

    for (let i=0; i < standardInp.length ; i++){
        if (callback(standardInp[i])) {
            newArray.push(standardInp[i])
        } 
    }

    
    return newArray;

    
};


function mySize(collection) { 
    let standardInp = standardInput(collection)
    return standardInp.length;
};


function myFirst(collection, elements) { 
    let standardInp = standardInput(collection)

    if (!elements) {
       return standardInp[0]
    } 

    return standardInp.slice(0,elements);
};


function myLast(collection, elements ) { 

    let standardInp = standardInput(collection)

    
    if (!elements) {
        let length = standardInp.length
        let last = standardInp[length - 1]
        return last
    } 
    let last = standardInp.slice(-1 * elements);


    return last
};


function myKeys(testObj) { 
    let objKeys = Object.keys(testObj)
    return objKeys
};

function myValues(testObj) { 
    let objValues = Object.values(testObj)
    return objValues
};




