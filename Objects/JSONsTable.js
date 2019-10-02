function main(input) {
    let employees = [];
    console.log('<table>');
    input.forEach(element => {
        employees.push(JSON.parse(element));
    });
    employees.forEach(employee => {
        console.log(`   <tr>       
        <td>${employee.name}</td>       
        <td>${employee.position}</td>       
        <td>${employee.salary}</td> 
        </tr>`);
    });
    console.log('</table>');
}

main(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);