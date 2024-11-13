/*let nums = [67,89,43,72]
let newArr = nums.map((val) => {
    return val*val;
})
console.log(nums)
console.log(newArr)

let arr=[1,2,3,4,5,6,7]
arr.forEach((nums)=>{
    console.log(nums*nums)
})*/
//filter element

/*let arr=[1,2,3,4,5,6,7,8,9,10]
let evenArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(evenArr)*/
//task-
//we are given array of marks of students.fiter out of the mark of student that score more than 90.
//marks=[78,90,45,90,95,97,70] 

let marks=[78,90,45,90,95,97,70] 
let moreMark=marks.filter((val)=>{
        return val > 90;
})
console.log(moreMark)