
        console.log("In this lecture we are going to learn about data types and objects")

        // -------- Primitive Data Type -----------

        // null number boolean BigInt string Symbol undefined

        let a = null;
        let b = 34;
        let c = true;
        let d = BigInt("524") + BigInt("3");
        let e = "Avinash";
        let f = Symbol("I am a nice Symbol");
        let g
        // let g = undefined;

        // console.log(a, b, c, d, e, f, g)
        // console.log(typeof c)
        // console.log(typeof f)

        // -------- Non Primitive Data Type ---------

        // ------- Objects ------

        const items = {
            fruit: "sev",
            vegetable: "onion",
            price: 32,
            grocery: true
        }
        items.meat = "Chicken"
        items["meat"] = "Murga"
        console.log(items)
        items["vegetable"] = "potato"
        console.log(items["vegetable"])
        console.log(items.fruit)