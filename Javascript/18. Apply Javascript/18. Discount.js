function ticketPrice(quantity){
    const rate1 =100;
    const rate2 =90;
    const rate3 =70;

    if(quantity <=100){
        const price = quantity * rate1;
        return price;
    }
    else if(quantity <= 200){
        const first100price = 100*rate1;
        const restTicketQuantity = quantity - 100;
        const restTicketPrice = restTicketQuantity * rate2;
        const price = first100price + restTicketPrice;
        return price;
    }
    else{
        const first100price = 100 * rate1;
        const second100price = 100 *rate2;
        const restTicketQuantity = quantity - 200;
        const restTicketPrice = restTicketQuantity *rate3;
        const price = first100price+second100price+restTicketPrice;
        return price;
    }
    
}

const price = ticketPrice(220);
console.log(price);

let str = 'hello';
str[2]='5';
console.log(str.length);

const nayoks=['Bangla Bhai','English Bhai','Korean Bhai ','Turkish Bhai'];
for(const nayok of nayoks){
    console.log(nayok);
}