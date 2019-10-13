
function main(ticketData, sortCriteria) {
    
    class Ticket {
        constructor(destionation, price, status) {
            this.destination = destionation;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (const line of ticketData) {
        [destionationInp, priceInp, statusInp] = line.split("|");
        tickets.push(new Ticket(destionationInp, priceInp, statusInp));
    }
    
    return tickets.sort((a, b) => 
    typeof a[sortCriteria]!=="number"?
    a[sortCriteria].localeCompare(b[sortCriteria]):
    a[sortCriteria]-(b[sortCriteria])
    );
}

console.log(main(
    ['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'
))