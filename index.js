function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`};
    
function mondayWork(activity = "go to the office"){
return `This Monday, I will ${activity}.`};

function wrapAdjective(outter = "*") {
    return function inner(inner = "special") {
        return `You are ${outter}${inner}${outter}!`;
    }
}

const Calculator = {
    add: (x,y) => x + y,
    subtract: (x,y) => x - y,
    multiply: (x,y) => x * y,
    divide: (x,y) => x / y,
};

function actionApplyer(start, array) {
    if(array.length === 0)
        return start
    else {
        var answer;
        answer = array[0](start);
        answer = array[1](answer);
        answer = array[2](answer);
        return answer
    }
}