import './UsersList.css';
import UserItem from './UserItem';

const UsersList = ({ items }) => {

    return (
        <>
            {items.length === 0 ? (
                <div className='center'>
                    <h2>No users found.</h2>
                </div>
            ) : (
                <ul className='users-list'>
                    {items.map(user => <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />
                    )}
                </ul>
            )}
        </>

    );
};

export default UsersList;