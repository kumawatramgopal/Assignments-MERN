console.log('\nHARD');
console.log('\nQ1 - Get Real Type\n\n');

/* Create a function that takes a value as an argument and returns the type of this value. You should get
the real type of a value (JavaScript typeof doesn&#39;t return the real object type of values and you need to
fix that). */

function realType(value){

    if(value == null){
        return 'null';
    }

    switch(typeof value){
        case(typeof 0):         return 'number';

        case(typeof ''):        return 'string';

        case(typeof true):      return 'boolean';

        case(typeof []):        return 'array';

        default:                return 'Please use correct type';

    }
}

console.log(realType (1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));

console.log('\nQ2 - Numbers in Strings\n\n');

/* Create a function that takes an array of strings and returns an array with only the strings that have
numbers in them. If there are no strings containing numbers, return an empty array. */

function numInStr(arrOfStr){
    let strHaveNum = arrOfStr.filter( function (element){
        if(element.includes('0') || element.includes('1')|| element.includes('2')
        || element.includes('3') || element.includes('4')|| element.includes('5')
        ||element.includes('6') || element.includes('7')|| element.includes('8')
        || element.includes('9')
        ){
            return true;
        }
    });
    return strHaveNum;
}

console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log(numInStr (['abc', 'abc10']));
console.log(numInStr (['abc', 'ab10c', 'a10bc', 'bcd']));
console.log(numInStr (['this is a test', 'test1']));

