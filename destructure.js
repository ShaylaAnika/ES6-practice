const person ={
    name : 'Jack William',
    age: 17,
    job: 'facebook',
    gfName: 'Ema Watson',
    address: 'kochu khet',
    phone: '01753633281',
    friends: ['Tom hanks', 'Tom cruis', 'Tom yarn']
}

// const gfName = person.gfName;
// const phone = person.phone;
// console.log(phone);
// console.log(gfName);

const { phone , address , sallary , gfName } = person;
console.log( phone, address , sallary , gfName) ;

const complexObject = {
    name: 'abc',
    info: {
        address : 'kolaa bagan',
        leader: 'tiger leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);

const friends = ['sakib khan' , 'amir khan', 'salman khan', 'arman khan', 'sharuk khan'] ;

const [frstName,secondName, ...nextNamne] = friends;
console.log(nextNamne);
console.log(frstName, secondName);