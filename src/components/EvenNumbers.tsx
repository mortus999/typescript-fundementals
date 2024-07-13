import { filterNumbers } from '../utils/utils';

const EvenNumbers: React.FC = () => {
  const numbers: number[] = [1001, 2311, 3233, 4142, 5544, 6768, 7895, 8482, 9366, 3452];
  const evenNumbers = filterNumbers(numbers);

  return (
    <div>
      <h5>List of Even Numbers</h5>
      <ul>
        {evenNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default EvenNumbers;