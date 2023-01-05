const parentObj = {
    calAge : function(){
        console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
}

const childObj = Object.create(parentObj);

childObj.fname="Andrew",
childObj.lname="Tate",
childObj.age=32;


childObj.calAge();

// ----------------------- Q.3 ---------------------

const CalSum = {
    Sum : function(arr){
        let sum = 0;
        for (let i=0; i<arr.length; i++){
            sum=sum+arr[i];
        }
        console.log(sum);
    }
}

CalSum.Sum([1,2,3,4,5,6])


