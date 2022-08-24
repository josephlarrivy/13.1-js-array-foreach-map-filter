/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr){
    let arr1 = [];
    arr.forEach(function(num) {
        arr1.push (num*2);
    })
    return arr1;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let arr2 = [];
    arr.forEach(function(num) {
        if (num%2 === 0) {
            arr2.push(num)
        }
    })
    return arr2;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let arr3 = [];
    arr.forEach(function(str) {
        arr3.push(str[0])
        arr3.push(str[str.length -1])
    })
    return arr3;
}



/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value){
    arr.forEach(function(val) {
        val[key] = value;
    })
    return arr;
}

//above code^^
//arr is the input array
//val is the assigned value for each object as the array is iterated
//val[key] creates a new key for each iterated val ('title')
//value is the value that we want to assign to each key as we pass over them ('intructor')



/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let vowels = 'aeiou'
    let splitArr = str.split('')
    let obj = {};

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
   return obj;
}

function vowelCountSolution(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
//above code^^
//str - string is passed into the function
//splitArr splits the string into an array
//splitArr is iterated over with .forEach, assigning each element to letter as we pass through
//each letter is lowercased
//if statement starts by passing the const variable 'vowels' over the array and checking to see if the vowel is present by asking if the index is not -1
//if the index is not -1, the splitArr does contains that vowel and we progress to the inner if statement. if theindex of the vowel is -1, the first if statement is evaluated to false as we do nothing with that letter because it is not a vowel
//the inner if statement asks if obj[lowerCasedLetter] is true. if it is true, the counter for that letter in incremented
//if the inner if statement is false, the counter for that letter is set to 1
//the object is returned




/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubleArr = arr.map(function(num) {
        return num*2;
    });
    return doubleArr;
}

function doubleValuesWithMapSolution(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//in the above code^^
//an array is passed into the function
//the .map mathod iterates over the the array, assigning val to each element as it is passed into the function
//the inner function doubles the val and returns it in a new array





/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val*idx;
    });
}

//in the above code^^
//the .map method iterates over the array that is passed into the main function
//val is assigned to each element of the array and idx pulls the indes for that val element
//a new array is returned that multiplies that val times the idx






/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

//in the above code^^
//an array and a key are passed in to the function
//the .map function iterates over the array assigning each object in the array to val as it passes over
//the inner function searches for the key inside of each val
//if the key exists, the value for that key is mapped into a new array







/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function(name) {
        return `${name.first} ${name.last}`
    }) 
}

function extractFullNameSolution(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }

//in the above code^^
//an array is passed into the function
//the .map method inerates over the array and assignes val to each element as it does so
//the inner function looks at each element as if is passed into the function as val
//the inner function looks for the keys of 'first' and 'last'
//if the object in that array assigned to val has the .first or .last properties, they are returned in the newly mapped array as a string






/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    })
}

//in the above code^^
//the function accepts an array and a key
//the .filter menthod iterates over the array
//the inner function is called for each val in the array
//each val in the array is checked to see if the stated key is not undefined
//if the stated key is not undefined that means that the value is present in the array's objects and because this statement eavaluates as truthy, the current val will be passed to the new filtered array






/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
    })[0];
}

//in the above code^^
//an array and a searchValue ar passed into the fund function
//the .filter menthod assigns each lement in the array to val as it is passed into the inner function
//the inner functions evaluates each element (val) of the array against the searchValue
//if the searchValue == val on the element is true, that val is passed into the new array





/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}

//in the above code^^
//an array, a key, and a searchValue are passed into the function
//the .filter method assigns each element of the array to val as it iterates over
//the inner function looks at each val and assesses if the assigned kay is present and equal to the searchValue
//if the key is present and equal to the search value, the element is passed into the new object
//in the example, the functions accepts an array of objects and the key of isCatOwner and the boolean of true
//the objects are all evaluated and if the boolean of true for isCatOwner is stated as true, the entire object is added to the new object






/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(val) {
        return vowels.indexOf(val) === -1;
    })
    .join('');
}

//in the above code^^
//the fonction accepts a string
//the functions defines vowels
//the string is converted to lower case and the .split method turns it into and array of single-letter strings
//the filter method assigns each value of the new array to val as it iterates over it
//the second return line takes the variable 'aeiou' and checks to see if its index is -1
//if the index of that vowel is -1, that mean that the vowel is not present in the array
//if the vowel is not present in the array, the entire line evaluates to false and the vowel will not be added to the new array
//if the letter(val) is a consinent, the final return evaluates to true and the letter is added to the new array





/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val%2 !==0;
    })
    .map(function(val) {
        return val*2;
    });
}

//in the above code^^
//an array is passed into the function
//the .filter method arrigns each array element val as it iterates over it
//if when divided by 2, the remainder is anyhting but 0, the value must be odd
//if the value is even, the the val%2 !== 0 line will evaluate to false and nothing more will be done with the current val
//if the value is odd, the val%2 !== 0 line will evaluate to true and that value will be passed into the next part of the function
//the .map method assigns each element of the array to val as it is passed over
//it multiplies it by 2 and  maps it onto the new array