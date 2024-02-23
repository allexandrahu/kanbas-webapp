function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    
      return (
        <>
          <h3>Implied return</h3>
          fourTimesFive = 20<br />
          multiply(4, 5) = 20<br />
        </>
      )
    ;
  }
  export default ImpliedReturn;
  