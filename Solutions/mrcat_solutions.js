// Write a function identity that takes an argument and returns that argument
    const identity = x => x;


// Write a binary function addb that takes two numbers and returns their sum
    const addb = (a, b) => a + b; 

    
// Write a binary function subb that takes two numbers and returns their difference
    const subb  = (a, b) => a - b;

    
// Write a binary function mulb that takes two numbers and returns their product
    const mulb = (a, b) => a * b;


// Write a binary function minb that takes two numbers and returns the smaller one
    const minb = (a, b)=> (a < b) ? a : b;


// Write a binary function maxb that takes two numbers and returns the larger one
    const maxb = (a, b)=> (a > b) ? a : b;


// Write a function add that is generalized for any amount of arguments
    const add = (...nums)=>  nums.reduce((acc, val)=> acc + val); 
   

// Write a function sub that is generalized for any amount of arguments
    const sub = (...nums)=> nums.reduce((acc, val)=> acc - val) ; 
    
    // method 2
    const _sub = (...nums)=>{
        let result = 0;
        nums.forEach((i, k)=>{
            result = (k == 0) ? i : result -= i ;
        })
        return  result;
    }


// Write a function mul that is generalized for any amount of arguments
    const mul = (... nums) =>{
        let result= 1;
        for(const element of nums){
            result *= element;
        }   
        return result;
    }



// Write a function min that is generalized for any amount of arguments
    const _min = (...nums)=> Math.min(...nums);
    const __min = (...nums)=>{
        let result = nums[0];
          nums.forEach((num,k)=> {
            result =  result < num ? result : num;
         });
         return result;
    } 
    const min= (...nums) => nums.reduce((acc,cur)=> acc < cur ? acc : cur);



//  Write a function max that is generalized for any amount of arguments
    const _max = (...nums)=> Math.max(...nums);
    const max = (...nums) => nums.reduce((acc,cur)=> acc > cur ? acc : cur);
    

// Write a function addRecurse that is the generalized add function but uses recursion
    const addRecurse = (...nums)=>{
        if(nums.length <= 0){
            return 0;
        }else{
          return  nums.shift() + addRecurse(...nums);        
        }
    }

/*****
 * 
 * 
 * 
 * . . . . . . . . . . . . .                     . . . . . . . . . . . .
 * . . . . . . . . . . . . . Happy New Year 2021 . . . . . . . . . . . . 
 * . . . . . . . . . . . . .                     . . . . . . . . . . . .
 * 
 * 
 * 
 * 
 * 
 */


 // Write a function mulRecurse that is the generalized mul function but uses recursion
    const mulRecurse = (...nums) => {
        if(nums.length <=0) return 1;
        nums = nums[0] * mulRecurse(...nums.slice(1)); 
        return nums; 
    }

// Write a function minRecurse that is the generalized min function but uses recursion
    const minRecurse = (...nums) =>{
        if(nums.length - 1 <= 0) return nums[0];
        return nums[0] < minRecurse(...nums.slice(1)) ? nums[0] : minRecurse(...nums.slice(1));
    }


// Write a function maxRecurse that is the generalized max function but uses recursion
    const maxRecurse = (...nums) =>{
        if(nums.length -1 <= 0) return nums[0];
        return nums[0] >  maxRecurse(...nums.slice(1)) ? nums[0] : maxRecurse(...nums.slice(1));
       
    }


//Write a function not that takes a function and returns the negation of its result
    const not =(...nums)=>{

    }











//    console.log(maxRecurse(1,41,23,13));    

// Export
    module.exports = {
        add,
        addb,
        addRecurse,
        identity,
        max,    
        maxb,
        maxRecurse,
        min,
        minb,
        minRecurse,
        mul,
        mulb,
        mulRecurse,
        sub,
        subb
    } ;   