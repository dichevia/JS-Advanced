function makeObject(arr){
    let obj = {};
    for(let i=0; i<arr.length;i+=2){
        key = arr[i];
        el = Number(arr[i+1]);
        obj[key]=el;
    }
    console.log(obj);
}

makeObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);