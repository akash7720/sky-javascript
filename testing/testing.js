

var array = [1,2,3,4,5,6,7,8,9,10]

var target = 8; 

for(var i = 0; i < array.length -1; i++){

for(var j = i +1; j < array.length; j++){

    if (array[i] + array[j] == target){
       console.log(i,j)
    }
}
}

