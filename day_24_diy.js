 resturantList = [
    {
        id:1,
        resturantName :'KFC',
        address: 'Anand Vihar',
        city :'Delhi',
    },
    {
        id:2,
        resturantName :'Dominos',
        address: 'Savita Vihar',
        city :'Delhi',
    },
    {
        id:3,
        resturantName :'Burger king',
        address: 'Civil Lines',
        city :'Pune',
    },
    {
        id:4,
        resturantName :'Subway',
        address: 'Cantonment',
        city :'Mumbai',
    },
];
let usersData =[
    {
        userId:1,
        id:1,
        title:'fugiat aut autem',
        completed :false,
    },
    {
        userId:1,
        id:2,
        title:'quis ut nam facilis et officia qui',
        completed :false,
    },
    {
        userId:1,
        id:3,
        title:'fugiat veniam minus',
        completed :false,
    },
    {
        userId:1,
        id:4,
        title:'et porro tempora',
        completed :false,
    },
    {
        userId:1,
        id:5,
        title:'laborarism mollitia et enim ',
        completed :false,
    },
    {
        userId:1,
        id:6,
        title:'fugiat',
        completed :false,
    },
];
var data = async()=> {
    let x = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(usersData);
        },2000);
    })
    const y = await x;
    console.log(y);//1st question
    y.map((item)=>{
        console.log(item.title);
    })//2nd question
    let ary =[...resturantList,[1,2,3]];
    console.log(ary);//spread operator
    const rest = (...variable) => {
        variable.map((ele)=> {
            console.log(ele);
        });
    };
    rest(...resturantList);//rest operator
    return y;
}
data();

