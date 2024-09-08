(function() {
    function Calculator(xInput, yInput, output) {
        this.xInput = xInput
        this.yInput = yInput
        this.output = output
    }
    Calculator.xName = 'xInput'
    Calculator.yName = 'yInput'
    Calculator.prototype = {
        render: function(result) {
            this.output.innerText = String(result)
        }
    }
    function CalculateValue(calc, x, y) {
        this.calc = calc
        this.x = x
        this.y = y
        this.result = x + y
    }
    CalculateValue.prototype = {
        copyWith: function(name, value) {
            var number = parseFloat(value)
            if (isNaN(number) || !isFinite(number)) {
                return this
            }
            if (name === Calculator.xName) {
                return new CalculateValue(this.calc, number, this.y);
            }
            if (name === Calculator.yName) {
                return new CalculateValue(this.calc, number, this.x);
            }
            return this
        },
        render: function() {
            this.calc.render(this.result);
        }
    }
    
})