var Calculator = function() {
    var stack = [];
    return {
        value: function() {
            if (stack.length === 0) {
                return null;
            } else {
                let popOff = stack.pop();
                stack.push(popOff);
                return popOff;
            }
        },
        push: function(value) {
            stack.push(value);
        },
        popThenPush: function() {
            let top = stack.pop();
            stack.push(top);
            return top;
        }
        plus: function() {
            if (stack.length <= 1) {
                throw "calculator is empty";
            }
            let oneBack = stack.pop();
            let twoBack = stack.pop();
            let newVal = oneBack + twoBack;
            stack.push(newVal);
            // console.log('newVal: ', newVal);
            // console.log('here is the stack: ', stack);
        },
        minus: function() {
            if (stack.length <= 1) {
                throw "calculator is empty";
            }
            let oneBack = stack.pop();
            let twoBack = stack.pop();
            let newVal = twoBack - oneBack;
            stack.push(newVal);
        },
        divide: function() {
            if (stack.length <= 1) {
                throw "calculator is empty";
            }
            let oneBack = stack.pop();
            let twoBack = stack.pop();
            let newVal = twoBack / oneBack;
            stack.push(newVal);
        },
        times: function() {
            if (stack.length <= 1) {
                throw "calculator is empty";
            }
            let oneBack = stack.pop();
            let twoBack = stack.pop();
            let newVal = twoBack * oneBack;
            stack.push(newVal);
        }
    }
}

module.exports = Calculator;