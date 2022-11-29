const checkHeaderKey = (req, res, next) => {
    const key = req.headers.validatehead;
    if (key === "Samplepgm") {
        next();
    } else {
        res.status(401).json({ message: "headers key is invlid" })
    }
}

module.exports = checkHeaderKey;