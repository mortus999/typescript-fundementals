import { User } from '../types/types';

const UserList: React.FC = () => {
  const users: User[] = [
    { name: 'Marcus', age: 45 },
    { name: 'Joe', age: 45 },
    { name: 'Donald', age: 27 },
  ];

  return (
    <div>
      <h5>List of Users</h5>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;