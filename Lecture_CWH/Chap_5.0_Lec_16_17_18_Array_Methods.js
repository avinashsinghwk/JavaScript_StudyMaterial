
        // console.log("In this lectre we will be studying about Arrays and it's Methods");

        // let fruits = ["Apple", "Banana", "Papaya", "Guava", false, 34];
        // let vegetable = ["Potato", "Carrot", "Pea", "Chilly", "Onion"];
        // let num = [1, 52, 83, 14, 5];

        // console.log(fruits);

        // console.log(fruits[2]);

        // console.log(fruits.length);

        // Adding or Changing values to an array

        // fruits[7] = "Adding Value";
        // fruits[4] = "Changed Value";
        // console.log(fruits);

        // console.log(typeof fruits);   // Array is an object

        // ------------ Array Methods (From here lecture 17 starts) ------------------

        // let toStr = fruits.toString();
        // console.log("typeof of toStr: ", typeof toStr, toStr);

        // let join = fruits.join("$");
        // console.log(join);
        // console.log(typeof join);

        // let pop = fruits.pop();
        // console.log(fruits, pop);
        // pop return the popped element

        // let push = fruits.push("Hello");
        // console.log(fruits, push);
        // push return the new array length

        // let shift = fruits.shift();
        // console.log(fruits, shift);
        // shift return the shifted element

        // let unshift = fruits.unshift("Hello");
        // console.log(fruits, unshift);
        // unshift return the new array length

        // the only difference between pop and shift is that pop pops from last while shift shifts from first
        // the only difference between push and unshift is that push pushes from last while unshift pushes from first

        // ------------------- From here lecture - 18 starts ------------------------

        // delete fruits[5];
        // console.log(fruits,fruits.length);
        // If we use delete method it won't affect the length of the array

        // let concat = fruits.concat(vegetable,num);
        // console.log(concat);
        // console.log(fruits,vegetable,num);

        // let sort = fruits.sort();
        // console.log(sort);
        // console.log(fruits);
        // It modify the original array and sort alphabetically

        // If we want to use sort for ascendimg or descending
        // let compare = (a,b)=>{
        //     return a - b;
        // }
        // let sort2 = num.sort(compare);
        // console.log(sort2);

        // let sort3 = num.sort(compare2 = (c,d)=>{
        //         return d - c;
        //     });
        // console.log(sort3);

        // let reverse = num.reverse();
        // console.log(reverse, num);

        // let splice = fruits.splice(2, 3, "Splice1", "Splice2", "Splice3", 'Splice4');
        // console.log(splice);
        // console.log(fruits);
        // The first thing tells us that from which index we have to start , second will tell that how many thing we have to displace and then all remaining tell that what we have to add

        // let slice = fruits.slice(3);
        // let slice = fruits.slice(3,5);
        // console.log(slice);
        // console.log(fruits);
        // Slice will give a new array 
