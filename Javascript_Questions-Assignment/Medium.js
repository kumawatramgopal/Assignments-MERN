console.log('\nMEDIUM');
console.log('\nQ1 - Reverse Words Starting with a Particular Letter\n\n');

/* Write a function that reverses all the words in a sentence that start with a particular letter. */

function spe_Reverse(sent,letter){
    let words = sent.toLowerCase().split(' ');
    for(let i = 0; i<words.length; i++){
        if(words[i][0] == letter){
            words[i] = words[i].split('').reverse('').join('');
        }
    }
    return words.join(' ');
}

console.log(spe_Reverse('word searches are super fun', 's'));
console.log(spe_Reverse('first man to walk on the moon', 'm'));
console.log(spe_Reverse('peter piper picked pickled peppers', 'p'));
console.log(spe_Reverse('It is weird madam', 'm'));

console.log('\nQ2 - Hitting the Jackpot\n\n');

/* Create a function that takes in an array (slot machine outcome) and returns true if all elements in the
array are identical, and false otherwise. The array will contain 4 elements. */

function testJackpot(jackpotarr){
    for(let i = 0; i<jackpotarr.length-1; i++){
        if(jackpotarr[i] !== jackpotarr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(testJackpot (['@', '@', '@', '@']));
console.log(testJackpot (['abc', 'abc', 'abc', 'abc']));
console.log(testJackpot (['SS', 'SS', 'SS', 'SS']));
console.log(testJackpot (['&&', '&', '&&&', '&&&&']));
console.log(testJackpot (['SS', 'SS', 'SS', 'Ss']));

console.log('\nQ3 - Remove Duplicates from an Array\n\n');

/* Create a function that takes an array of items, removes all duplicate items and returns a new array in
the same sequential order as the old array (minus duplicates). */

function removeDuplicate(items){
     let newItems = items.filter((element,index) => items.indexOf(element) === index); 
     
    return newItems;
}

console.log(removeDuplicate ([1, 0, 1, 0]));
console.log(removeDuplicate (['The', 'big', 'cat']));
console.log(removeDuplicate (['John', 'Taylor', 'John']));