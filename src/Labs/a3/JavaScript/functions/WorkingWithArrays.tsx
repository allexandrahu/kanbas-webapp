function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    
    let variableArray1 = [
       functionScoped,   blockScoped,
       constant1,        numberArray1,   stringArray1
    ];    
    
      return (
        <>
          <h2>Working with Arrays</h2>
          numberArray1 = 12345<br />
          stringArray1 = string1string2<br />
          variableArray1 = 25-312345string1string2<br />
        </>
      )
    ;
  }
  export default WorkingWithArrays;
  