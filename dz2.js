console.log(cartObj());
let Obj = cartObj()
let clone = {};
let sum = 0;
let dostavka = 9000;
for (const key in Obj) {
    // console.log(Obj[key]);
        for (const key2 in Obj[key]) {
            // if(key2 == 'info'){
            //     console.log(Obj[key][key2]);
            // }
            if (key2 == 'price')
                sum += Obj[key][key2]    
        }
    }
    let s = sum + dostavka;
    console.log(s);
    

    console.log("Sizning buyurtmangiz:" , "| yetqazib berish xizmati bilan bo'lgan narx", s, "yetkazish xaqqi (9000)");