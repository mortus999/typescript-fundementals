const ColorList: React.FC = () => {
    const colors: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
  
    return (
      <div>
        <h5>List of Colors</h5>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ColorList;