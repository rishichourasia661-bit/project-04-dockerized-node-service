function createUser(name, role, country) {

    return {

        name,

        role,

        country,

        createdAt: new Date(),

        updatedAt: new Date()

    };

}

module.exports = {
    createUser
};