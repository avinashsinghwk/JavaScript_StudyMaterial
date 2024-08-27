
        console.log("In this lecture we will study about if else statements, switch case and ternary operator")

        let age = window.prompt("Hey, What's your age")
        // console.log(typeof age)
        
        // age = Number(age)
        // age = Number.parseInt(age)
        // console.log(typeof age)
        

        // --------- If Else Conditionals ----------

        // if(age <= 0){
        //     alert("Why are you typing a invalid age ?")
        // }
        // else if(age >= 18){
        //     console.log("You are above 18. So, you can drive!")
        // }
        // else if(age < 18 && age > 10){
        //     console.log("You are below 18. So, you can not drive!")
        // }
        // else if(age <= 10){
        //     console.log("Babu tum to bahut chote ho")
        // }


        // --------- Switch Case ----------

        // let fruit = "Papaya";
        // switch (fruit) {
        //     case "Papaya":
        //         console.log("You are Wrong");
        //         break;
        //     case "Apple":
        //         console.log("You are Right it is an apple");
        //         break;
        //     case "Banana":
        //         console.log("You are Wrong");
        //         break;
        //     default:
        //         console.log("Koi fruit match nhi ho rha h");
        // }

        // ------- Ternary Operator ----------

        console.log("You can", age >= 18 ? "drive" : "not drive");


