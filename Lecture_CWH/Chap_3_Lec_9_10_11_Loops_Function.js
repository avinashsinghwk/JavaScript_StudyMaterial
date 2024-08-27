
        console.log("In this lecture we are going to study about Loops and Function");

        // ---------- Fpr Loop -------------

        // for(let a = 1; a < 10; a++){
        //     console.log(a);
        // }

        // sum of first n naturla number
        // let sum = 0;
        // let n = prompt("Enter a number");
        // n = Number(n);
        // for (let a = 1; a <= n; a++) {
        //     sum = sum + a;
        // }
        // console.log("Sum of first", n, "natural number = ", sum);


        // -------------- For In Loop ---------------
        // It is used to acess key in a key value pair like object or array(it is also an object)

        let obj = {
            Neha: 43,
            Puja: 53,
            Sonika: 92,
            Manish: 62
        }
        // for(let a in obj){
        //     console.log("Marks of",a,"=",obj[a]);
        // }

        // ----------------- For of Loop ----------------
        // It is used to acess values of an iterable things like Array or String

        // for(let b of "Avinash"){
        //     console.log(b);
        // }


        // ----------- While loop -----------

        // let a = 1;
        // while(a <= 10){
        //     console.log(a);
        //     a++;
        // }

        // do while loop
        // let x = 10;
        // do{
        //     console.log(x);
        //     x++;
        // }while(x < 8);


        // ------------ Function ---------------

        function sum(g,h){
            return (g + h);
            console.log("Done");
        }

        let p = 5;
        let q = 6;
        let r = 9;
        // console.log("The sum of p + q =", sum(p,q));
        // console.log("The sum of q + r =", sum(q,r));
        // console.log("The sum of r + p =", sum(r,p));


        // -------------- Arrow function ----------------

        // const average = (t,y)=>{
        //     return (t + y)/2;
        // }
        // console.log(average(4,3));

        // const hello = ()=>{
        //     console.log("Hello, how are you?");
        // }
        // hello();