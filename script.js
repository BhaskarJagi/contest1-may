/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if(element.marks > 50){
            console.log(element)
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.marks>50){
            console.log(element)
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:27, name:'bhaskar', age:22, marks:90})
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    for(let i=0; i<arr.length; i++){
        if(arr[i].marks<50){
            arr.splice(i,1);
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let students=[
        {id:27, name:'bhaskar', age:22, marks:90},
        {id:25, name:'vivek', age:21, marks:92},
        {id:19, name:'naveen', age:22, marks:87}
    ];
    for(let i=0; i<students.length;i++)
    {
        arr.push(students[i]);
    }
    console.log(arr);
  }
