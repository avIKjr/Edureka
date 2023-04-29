class EmployeeData {
    emp1 = {
        name: 'Rahul',
        empId: 3567,
        mailId: 'maime@gmail.com',
        Address: {
            'city name': 'Vijaywada',
            district: 'Krishna District',
            pin: 526894,
        },
        Hobbies: ['Netflix', 'Tennis', 'coding'],
    };

    emp2 = {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            'city name': "Guntur",
            district: 'Prakasham District',
            pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Banking'],
    };
    emp3 = {
        name: 'Santosh',
        empId: 8876,
        mailId: 'santosh@gmail.com',
        Address: {
            'city name': 'Warangal',
            District: 'Hanamkonda District',
            pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels',],
    };
    emp4 = {
        name: 'Surya',
        empId: 3469,
        mailId: 'surya@gmail.com',
        Address: {
            'city name': 'Nazamabad',
            District: 'Nazamaba District',
            pin: 666954,
        },
        Hobbies: ['Badminton', 'E-Sport', 'Netflix'],
    };
    emp5 = {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kiran@gmail.com',
        Address: {
            city: 'Karimnagar',
            District: 'Karimnagar District',
            pin: 666954,
        },
        Hobbies: ['Gaming', 'Cooking', 'Music'],
    };
};
 var empData = new EmployeeData(); //selected the object
 var body = document.querySelector('#body'); //selected the body
 console.log(body);
  
 var main = document.createElement ('div');
 main.className = 'mainbox';
 body.appendChild(main);//inserted the main box inside the div

 Object.keys(empData).map((e,i) => {
    let emp = document.createElement('div');
    emp.className = e+[i+1];
    main.appendChild(emp); //created div for every employe details

    let h2 = document.createElement('h2');
    h2.innerHTML = 'Name:'+ empData[e].name;
    emp.appendChild(h2); //inside the div created h2 element for name

    let h3 = document.createElement('h3');
    h3.innerHTML = 'Employee Id:' + empData[e].empId;
    emp.appendChild(h3); //inside the div created h3 element for Employee Id

    let addBox = document.createElement('div');
    addBox.className = 'addressBox';
    emp.appendChild(addBox); ////inside the div created another div for address box

    let h32 = document.createElement('h3');
    h32.innerHTML = 'Address:';
    addBox.appendChild(h32); // inside the address box created a h3 element for address heading

    Object.keys(empData[e].Address).map((add) =>{
        var dress = document.createElement('p');
        dress.innerHTML ='<b>' +add+'</b>' +":"+empData[e].Address[add];
        addBox.append(dress);
    }); // created a array and map for the adrees box items

    var hobb = document.createElement('p'); //created a new p element inside the employee details box for hobbies
    emp.appendChild(hobb);
    empData[e].Hobbies.map(() =>{     
        hobb.innerHTML = '<b> Hobbies: </b>'+ empData[e].Hobbies; //mapped thr hobbirs for every emplyee
    });
 });