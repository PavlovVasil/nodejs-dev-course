const users = [];

const addUser = ({id, username, room}) => {
    //Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate data
    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //Check for existing user
    const existingUser = user.find(user => {
        return user.room === room && user.username === username
    })

    //Validate username
    if(existingUser) {
        return {
            error: "Username is in use!"
        }
    }

    //Store user
    const user = { id, username, room };

    user.push(user);
    return { user }
}