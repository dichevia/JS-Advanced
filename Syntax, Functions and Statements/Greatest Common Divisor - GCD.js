function commonDivisor(x, y){
    while(y){
        let t = y;
        y=x%y;
        x=t;
    }
    console.log(x);
}

commonDivisor(2154, 458)