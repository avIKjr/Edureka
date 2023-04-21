let arr = [1, 2, 3];
//Q.1
arr.push(4);
console.log(arr);
//Q.2
arr.pop();
console.log(arr);
//Q.3
arr.shift();
console.log(arr);
//Q.4
arr.unshift(5);
console.log(arr);
//Q.5
let arr2 = [
    {
        name: 'Rahul',
        empId: 3567,
        mailId: 'mailme@gmail.com',
        Address: {
            city: 'Vijayawada',
            District: 'Krishna district',
            pin: 526894,
        },
        Hobbies: ['Netflix', 'Tennis', 'Coding'],
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            city: 'Guntur',
            District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking'],
    },
    {
        name: 'Santosh',
        empId: 8876,
        mailId: 'santoshmail@gmail.com',
        Address: {
            city: 'Warangal',
            District: 'Hanamkonda district',
            Pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels'],
    },
    {
        name: 'Surya',
        empId: 3469,
        mailId: 'suryamail@gmail.com',
        Address: {
            City: 'Nazamabad',
            District: 'Nazamabad district',
            Pin: 648597,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kirammail@gmail.com',
        Address: {
            city: 'Karimnagar',
            district: 'Karimnagar district',
            pin: 666954,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kirammail@gmail.com',
        Address: {
            city: 'Karimnagar',
            district: 'Karimnagar district',
            pin: 666954,
        },
         Hobbies: ['Gaming', 'Cooking', 'Music'],
    },
];

arr2.forEach((item) => {
    console.log(item.name);
    let arr3 = [];
    Object.keys(item.Address).forEach((ix)=> {
        arr3.push(item.Address[ix]);
    });
    console.log(arr3);
    console.log(item.Hobbies);
});


