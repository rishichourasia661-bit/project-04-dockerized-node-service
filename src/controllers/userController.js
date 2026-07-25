const userService = require("../services/userService");
const asyncHandler = require("../utils/asyncHandler");
const saveUser = asyncHandler(async (req, res) => {

    const db = req.app.locals.db;

    const result = await userService.saveUser(
        db,
        req.body
    );

    res.send(`Inserted Document ID: ${result.insertedId}`);

});
async function getUsers(req, res) {

    const db = req.app.locals.db;

    const users = await userService.getUsers(db);

    res.json(users);

}
async function updateUser(req, res) {

    console.log("✅ PUT /users/:id reached");
    console.log("ID:", req.params.id);
    console.log("Body:", req.body);

    const db = req.app.locals.db;

    const id = req.params.id;

    const updates = req.body;

    const result = await userService.updateUser(
        db,
        id,
        updates
    );

    res.send(
        `Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`
    );
}
async function deleteUser(req, res) {

    console.log("✅ DELETE /users/:id reached");
    console.log("ID:", req.params.id);

    const db = req.app.locals.db;
    const id = req.params.id;

    const result = await userService.deleteUser(
        db,
        id
    );

    console.log(result);

    res.send(`Deleted Documents: ${result.deletedCount}`);
}

module.exports = {
    saveUser,
    getUsers,
    updateUser,
    deleteUser
};