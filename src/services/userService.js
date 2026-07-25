const { ObjectId } = require("mongodb");
const { createUser } = require("../models/userModel");

async function saveUser(db, userData) {

    const usersCollection = null;

    const user = createUser(
    userData.name,
    userData.role,
    userData.country
);

    return await usersCollection.insertOne(user);

}

async function getUsers(db) {

    const usersCollection = db.collection("users");

    return await usersCollection.find({}).toArray();

}
async function updateUser(db, id, updates) {

    const usersCollection = db.collection("users");

    return await usersCollection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: updates
        }
    );
    
}; 
async function deleteUser(db, id) {

    console.log("Deleting ID:", id);

    const usersCollection = db.collection("users");

    const result = await usersCollection.deleteOne({
        _id: new ObjectId(id)
    });

    console.log("Delete Result:", result);

    return result;
}


module.exports = {
    saveUser,
    getUsers,
    updateUser,
    deleteUser
};
