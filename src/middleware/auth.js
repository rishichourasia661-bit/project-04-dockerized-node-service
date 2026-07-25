require("dotenv").config();

function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.set("WWW-Authenticate", 'Basic realm="Secret Area"');
        return res.status(401).send("Authentication Required");
    }

    const encodedCredentials = authHeader.split(" ")[1];

    const decodedCredentials =
        Buffer.from(encodedCredentials, "base64").toString("utf8");

    const [username, password] = decodedCredentials.split(":");

    console.log("Username:", username);
    console.log("Password:", password);

    if (
        username === process.env.USERNAME &&
        password === process.env.PASSWORD
    ) {
        return next();
    }

    res.set("WWW-Authenticate", 'Basic realm="Secret Area"');
    return res.status(401).send("Invalid Username or Password");
}

module.exports = authMiddleware;