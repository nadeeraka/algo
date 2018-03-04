
let string = 'string';

function rev(s)
{
 let reverse = '';

 for(let chr of s)
 {
      reverse = chr+reverse;
 }
 return reverse;
}

console.log(rev(string));