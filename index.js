class Polygon{
    constructor(array){
    this.array = array
    this.count = this.array.length
}
 get countSides(){
  return  this.array.length 
 }

 get perimeter(){
     return this.array.reduce((total, side) =>{
         return total + side
     },0)
 }
}

class Triangle extends Polygon{
    constructor(array){
        super(array)
    }

    get isValid(){
        if (this.count == 3 ){
        let side1= this.array[0]
        let side2= this.array[1]
        let side3= this.array[2]
        return (side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1)
        }
    }
}

class Square extends Polygon{
    constructor(array){
        super(array)
    }

    get isValid(){
        if(this.count == 4){
            let side1= this.array[0]
            let side2= this.array[1]
            let side3= this.array[2]
            let side4= this.array[3]
        return (side1 === side2) && (side3 === side4) && (side3 === side4) && (side1 === side4)
        }
    }

    get area(){
      return  (this.array[0]) * (this.array[1])
    }
}
