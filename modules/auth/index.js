const userProfileModel = require('./model')

let crypto = require('crypto')

// let sourcePassword = 'longbody'


const handler = {
    async createUser(req, res, next) {

        // let password = hashMd5(sourcePassword)

        // let user = {
        //     email: 'nguyenthanhlong11200@gmail.com',
        //     password: password,
        //     fullName: "LongBody",
        //     roles: ['admin']
        // }

        // let item = await userProfileModel.create(user)

        // res.json(item)

    },
    async logIn(req, res, next) {

        console.log(req.query)
        console.log("ok")
        try {
            let { email, password } = req.query
            console.log(email)
            let hashPassword = hashMd5(password)
            if (!email) {
                throw new Error("Missing email")
            }
            if (!password) {
                throw new Error("Missing password")
            }

            let user = await userProfileModel.find({
                email: 'nguyenthanhlong11200@gmail.com'
            })


            if (hashPassword != user[0].password) {
                throw new Error("Wrong email or password")
            }
            if (!user) {
                throw new Error("Wrong email or password")
            }




            user[0].password = ""
            res.json(user)


        } catch (error) {
            next(error)
        }

    }

}

function hashMd5(string) {
    return crypto.createHash('md5').update(string).digest("hex")
}

module.exports = handler