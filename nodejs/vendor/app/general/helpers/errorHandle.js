module.exports = (error, req, res, next) => {
    // Logger
    console.log('Error=>', error);

    res.status(error.statusCode || 500).json({ success:0, message: error.message || "Server error",
    });
};
