const users = [
    {
        id:1,
        name: 'anik',
        job: 'painter'
    }
]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {
            id: 1,
            name: 'Rifat',
            job: 'manager'
        },
        {
            id: 2,
            name: 'Sifat',
            job: 'leader'
        }
    ]
}

console.log(data.data[0].job);

const user ={
    id: '001',
    name: 'Thomas Shelby',
    address:{
        street:{
            first: '35/A Kolabagan',
            second: 'third floor',
            third: 'left side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);