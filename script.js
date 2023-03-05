//object
// var car1 = {
//     name:'BMW',
//     weight:'400kg',
//     cost:10000,
//     color:['blueviolet','red','blue','yellow'],
//     model:'modern',
//     anotherCar:{
//         name:'Saab',
//         weight:'500kg',
//         cost:50000,
//         color:['red','green','blue']
//     }
// }

// // console.log(car1.anotherCar.color[0]);
// // var Bmw = 'name';
// // console.log(car1[Bmw]);

// var car2 = {
//     name:'Fiat',
//     weight:'500kg',
//     cost:10000,
//     color:['white','green','blue','navyBlue'],
//     model:'classic'
// }

// console.log(car2.color[0]);
// console.log(car2.cost);

// var car3 = {
//     name:'Volvo',
//     weight:'600kg',
//     cost:10000,
//     color:['white','green','red','navyBlue'],
//     model:'classic'
// }

// function car (name,weight,cost,color,model){
//     this.carName = name,
//     this.carWeight = weight,
//     this.carCost = cost,
//     this.carColor = color,
//     this.carModel = model,
//     this.output = function()
//     {
//         console.log("car name")
//     }
// }
// let newCar = new car('Saab','300kg',125000,'green','classic');
// console.log(newCar.output());
/* constructor function */
// function car(name,weight,cost,color,model)
// {
//     this.carName = name,
//     this.carWeight = weight,
//     this.carCost = cost,
//     this.carColor = color,
//     this.carModel = model,
//     this.output = function(){
//         console.log("Car name = "+this.carName);
//         console.log("Car Weight = "+this.carWeight);
//         console.log("Car Cost = "+this.carCost);
//         console.log("Car Color = "+this.carColor);
//         console.log("Car Modal = "+this.carModel);

//     }
// }
// var car1 = new car('volvo','600kg',1000,['white','green','red','navyBlue'],'classic');
// console.log(car1.carName);
// console.log(car1.output());
// var car2 = new car('saab','400kg',8000,['orange','yellow','red','blue'],'modern');
// console.log(car2.carName);
// console.log(car2.output());



//Json start here
// var myData = require('./index.json');
// console.log(myData.person[0].Name);


// var anotherData = require('./students.json');
// console.log(anotherData.student_Details[1].Nationality);

// var Dhaka = require('./first.json');
// console.log(Dhaka.Bangladesh[0].FarFrom);

//convert object to json
// var person ={
//     name:'mdjasimuddim',
//     age:25,
//     occupation:'student',
//     DateOfBirth:1-1-1998
// }

// console.log(JSON.stringify(person));

//convert json to object
// console.log(JSON.parse('{"name":"jasimuddim","age":25,"institute":"ruet"}'));

// const person ={
//     name:'md rubel hossain',
//     age:25,
//     occupation:'private teacher',
//     Date_Of_birth:01-01-1992
// }

// console.log(JSON.stringify(person));


// let myData = require('./students.json');
// console.log(myData);
// let student_data = require('./university.json');
// console.log(student_data);
// console.log(JSON.parse(student_data));