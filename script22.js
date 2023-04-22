class resturantmanager {
    resturantlist= [
        {
            id: 1,
            resturantname: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi',
        },
        {
            id: 2,
            resturantname: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi',
        },
        {
            id: 3,
            resturantname: 'Burger King',
            address: 'civil lines',
            city: 'Pune',
        },
        {
            id: 4,
            resturantname: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai',
        },
    ];

    printallresturantnames = ()=> {
        return this.resturantlist.map((resturant) => resturant.resturantname);
    };
    filterresturantbycity =(cityName) => {
        return this.resturantlist.filter(
            (resturant) => resturant.city ==cityName
        );
    };

}

const resturantObj = new resturantmanager();
console.log(resturantObj.printallresturantnames());
console.log(resturantObj.filterresturantbycity('Pune'));

const date= new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getHours());

console.log('// Math');

console.log(Math.round(23.456));
console.log(Math.ceil(23.456));
console.log(Math.floor(23.456));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());

