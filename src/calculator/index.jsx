class Calculator {
  
  constructor() {
    this.numbersR = /\-*\d+(\.\d+)*/g
  }
  
  isThereMultiply(expression) {
    return expression.indexOf("x") > -1
  }
  
  isThereDivision(expression) {
    return expression.indexOf("/") > -1
  }
  
  calculate(expression) {
    const expressionRegex = /\-*\d+(\.\d+)*[\/x]\-*\d+(\.\d+)*/
    
    while(this.isThereDivision(expression) || this.isThereMultiply(expression)) {
      
      const exp = expression.match(expressionRegex)[0]
      
      if (this.isThereMultiply(exp)) {
        const result = this.multiply(exp)
        expression = expression.replace(exp, result)
        continue
      } 
      
      if (this.isThereDivision(exp)) {
        const result = this.divide(exp)
        expression = expression.replace(exp, result)
      }
    }
    
    const numbers = expression.match(this.numbersR)
    
    const result = this.sumAndSubtract(numbers)
    
    return result
  }
  
  sumAndSubtract(numbers) {
    while (numbers.length > 1) {
      const result = +numbers[0] + +numbers[1]
      numbers.splice(0, 2, result)
    }
    
    const result = numbers[0]
    
    return result
  }
  
  multiply(expression) {
    const numbers = expression.match(this.numbersR)
    const result = +numbers[0] * +numbers[1]
    
    return result > 0 ? "+" + result : result
  }
  
  divide(expression) {
    const numbers = expression.match(this.numbersR)
  
    const result = +numbers[0] / +numbers[1]
    
    return result > 0 ? "+" + result : result
  }
}

export { Calculator }