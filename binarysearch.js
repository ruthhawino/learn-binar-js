//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [19,13,3,74,17,64]
//let target = 69


 function devideArray(arr1){
    if(arr1.length <=1){
        return arr1;
    }
    let middle =Math.floor(arr1.length/2);
    let left = arr1.slice(0,middle);
    let right =arr1.slice(middle);
    
    return sortedArray(devideArray(left),devideArray(right))

 }
function sortedArray(left,right){
    let emptyArray=[];
    while (left.length && right.length){
        
        if (right[0]<left[0]){
            emptyArray.push(right.shift())
            
        }
        else{
            emptyArray.push(left.shift())
        }
    }
    return[...emptyArray,...left,...right]
}
let arr=[19,13,3,74,17,64]
console.log(devideArray(arr1))



function binarysearch(arr1,target){
    let leftIndex = 0
    let rightIndex = arr1.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = (leftIndex + rightIndex)/2
        if(target === arr1[middleIndex]){
            return middleIndex
        }
         else if(target<arr1[middleIndex]){
            rightIndex = middle-1
        }
          else {
            leftIndex = middleIndex+1
        }
    }
    return null
}
 
 let arr1 = [3,13,17,19,64];
 let target=69

 console.log((arr1,target))
 console.log(binarysearch(arr1,target));





















