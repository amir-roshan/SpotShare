import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 1,
            image: "https://cdn.pixabay.com/photo/2015/04/01/19/12/menger-702863_1280.jpg",
            name: "Alice Johnson",
            placeCount: 5
        },
        {
            id: 2,
            image: "https://cdn.pixabay.com/photo/2015/04/01/19/12/menger-702863_1280.jpg",
            name: "Bob Smith",
            placeCount: 3
        },
        {
            id: 3,
            image: "https://cdn.pixabay.com/photo/2015/04/01/19/12/menger-702863_1280.jpg",
            name: "Catherine Lee",
            placeCount: 8
        },
        {
            id: 4,
            image: "https://cdn.pixabay.com/photo/2015/04/01/19/12/menger-702863_1280.jpg",
            name: "David Brown",
            placeCount: 2
        },
        {
            id: 5,
            image: "https://cdn.pixabay.com/photo/2015/04/01/19/12/menger-702863_1280.jpg",
            name: "Ella Martinez",
            placeCount: 4
        }
    ];

    return (
        <>
            <UsersList items={USERS} />
        </>
    );
};

export default Users;