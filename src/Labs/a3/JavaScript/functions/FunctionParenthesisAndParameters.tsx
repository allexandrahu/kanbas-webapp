function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    
      return (
        <>
          <h3>Parenthesis and parameters</h3>
          twoSquared = 4<br />
          square(2) = 4<br />
          threePlusOne = 4<br />
          plusOne(3) = 4<br />
        </>
      )
    ;
  }
  export default FunctionParenthesisAndParameters;
  