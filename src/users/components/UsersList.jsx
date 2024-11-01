import './UsersList.css';

import UserItem from './UserItem';
import Card from '../../shared/components/UI/Card';

const UsersList = ({ items }) => {

    return (
        <>
            {items.length === 0 ? (
                <div className='center'>
                    <Card >
                        <h2>No users found.</h2>
                    </Card>
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