 function reverseString(text){
    let reverseText = '';
    for(let i = text.length-1; i>=0; i--){
      reverseText = reverseText + text[i];
    }
    return reverseText;
 }

function reverseWords(str){
   const words = str.split(' ');
   const reverse = [];
   for(let i = words.length-1; i >= 0; i--){
      const element = words[i];
      reverse.push(element);
   }
   const reversed = reverse.join(' ');
   return reversed;
}


 const myString = 'I will kick you';
 let reversed = reverseString(myString);
 console.log(reversed);

 reversed = reverseWords(myString);
 console.log(reversed);