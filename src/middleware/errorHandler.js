function errorHandler(error, req, res, next) {

    console.log("========== ERROR HANDLER ==========");

    console.log("Request:", req.method, req.originalUrl);

    console.log("Message:", error.message);

    console.log("===================================");

    res.status(500).json({

        success: false,

        message: error.message

    });

}

module.exports = errorHandler;