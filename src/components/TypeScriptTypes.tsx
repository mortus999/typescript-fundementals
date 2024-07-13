

const TypeScriptTypes = () => {
    let greeting: string = "Hello, TypeScript!";
    
    let numberList: number[] = [5, 10, 15];
    const calculateSum = (a: number, b: number): number => a + b;
  

  return (
    <div>
      <h1>{greeting}</h1>
      <h5>List of Numbers:</h5>
      <ul>
        {numberList.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <h5>The sum of 10 and 5</h5>
      <p>{calculateSum(5, 10)}</p>
    </div>
  );
};

export default TypeScriptTypes