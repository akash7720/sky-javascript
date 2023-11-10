 

//reverse for loop 
// 10 -1

for(var i = 10; i > 0; i--){
    console.log(i)      //10,9,8,7,6,5,4,3,2,1
}

//750 -350, 5

for(var i = 750; i >=350; i -=5){
    console.log(i)        //750,745,,740,735,730,725,720......
}

//50 - 10 ,2

 for(var i =50; i >=10; i-=2){
    console.log(i)      //50,48,46,,44,42,40,38....
 }


for (var i =10; i >0 ; i--){
    console.log(i)      //10,9,8,7,6,5....

}

for(var i = 30; i > 10; i-=5){
    console.log(i)       //30,25,20,15
}


var students = ["Virat", "Rohit", "Rahul", "Surya"];

for (var i = 0; i < students.length; i++){
    console.log(students[i], i)   //v,R,R,S
}                                 //0,1,2,3


var numbers = [2, 3, 4, 5, 6, 7, 8]

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i], i)      //8,7,6,5,4,3,2
                                    //6,5,4,3,2,1,0
}

var numbers = [10, 20, 30, 40, 50, 60]

for (var i = numbers.length - 2; i >= 0; i -= 10) {
    console.log(numbers[i])        
                                      //50
    
}


var numbers = [1,2,3,4,5,6]

for (var i = 10; i > 1; i -= 5) {
    console.log(numbers[i])   

                            //6
}


