function isNumber(val){
    return !Number.isNaN(Number(val))
}
export default function between(min, max,decimal_digits=0){
    if(isNumber(min) && isNumber(max) && isNumber(decimal_digits)){
        return Number((Math.random() * (max - min) + min).toFixed(decimal_digits))
    }  
}