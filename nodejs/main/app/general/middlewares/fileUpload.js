const fs = require("fs");
let upload = (folderPath)=>{
    return (req, res, next) => {
        let dir = `./public/upload/${folderPath}`

        // check if folder exists
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        try {
            let fileName = new Date().getTime() + Math.random()
            const sha256 = require("sha256")
            fileName = sha256(fileName.toString())

            // check
            let sampleFile = req.files.ImagePath;
            let mimi = sampleFile.mimetype.split("/");

            if (sampleFile.size > 10000000) {
                console.log("File is big");
                req.ImagePath = "/"
                return next()
            }

            // mv() to save
            sampleFile.mv(require("path").join(dir, `${fileName}.${mimi[1]}`), async(err) => {
                req.ImagePath = fileName + "." + mimi[1]
                return next()
            })
        } catch (err) {
            req.ImagePath = "/";
            console.log(err)
            return next()
        }
    }
}

module.exports = upload