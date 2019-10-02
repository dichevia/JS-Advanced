function main(input){
let rotations = Number(input.pop()%input.length);
for (let i = 0; i < rotations; i++) {
    const element = input[i];
    let popped = input.pop();
    input.unshift(popped);
}
return input.join(' ');
}

console.log(main(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']    
));