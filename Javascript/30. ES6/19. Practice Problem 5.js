// Problem 1
const oddArr = [1,3,5,7,9];
const evenArr = oddArr.map(number => number +1);
console.log(evenArr);

// Problem 2
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.filter(number => number % 10 == 0);
console.log(divisibleByTen);

// Problem 3
const array = [1, 9, 17, 22];
const total = array.reduce((previos, current) => previos + current,0);
console.log(total); 

// Problem 4
const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:20},
    {name: 'Suchitra', age:22}
];
const ageTotal = people.reduce((previos, current) => previos + current.age,0);
console.log(ageTotal);

// Problem 5
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hydrabad',
            country: 'India',
        }
    ]
}

const city = data.location[0].city;
console.log(city);


// Problem 6
const user ={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",

    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
        }
    },

    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

  const userEmail = user.email;
  const userAddress = user.address;
  const userCity = user.address.city;
  const userLat = user.address.geo.lat;
  const companyName = user.company.name;
  console.log(userEmail, userAddress, userCity, userLat, companyName);

  const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }
    const {price} = product.price;
  console.log(price);