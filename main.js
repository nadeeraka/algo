//reverse string 
// number == rebmun

/** 
 * split string
 * put in to a array
 * create a new array
 * put in to a that array 
*/

// first aproch
// function rev(s)
// {    
//     //var array = JSON.parse("["+s+"]");   
//    return  s.split('').reverse().join('');
// }
// var hold =rev(string);
// console.log(hold);

// second approach
var string = "boo";
var new_array = [];
var my_array = [];
var hold;
function rev(s)
{
    new_array = s.split('');
  // console.log(new_array.length);
   for(var i = new_array.length; i>=0; i-- )
   {
       my_array.push(new_array[i]);
      hold =  my_array.join('');
       
   }
return hold;
}
console.log(rev(string));