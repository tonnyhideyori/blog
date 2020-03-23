const { User, validateUser } = require('../models/user')
const bcrypt = require('bcrypt')
const reqAuth = require('../middleware/reqAuth')
const _=require('lodash')
module.exports = app => {
    app.post('/api/signup', async (req, res) => {
        const { error } = validateUser(req.body)
        if (error) {
            res.status(404).send(error.details[0].message)
            return
        }
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            res.status(401).send('the email is alread used by someone else ')
            return
        }
        user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password:req.body.password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.body.password, salt)
        const token=user.genToken()
        user = await user.save()
                res
                  .header("token", token)
                  .send({ token, user: _.pick(user, ["_id", "firstname"]) });

    })
    app.post('/api/signin', async (req, res) => {
        const { error } = validateUser(req.body)
        if (error) {
            res.status(401).send(error.details[0].message)
            return
        }
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).send('wrong email or password')
            return
        }
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if (!validPass) {
            res.status(400).send('wrong password or email')
            return
        }
        const token = user.genToken()
        res.header('token', token).send({token,user:_.pick(user,["_id","firstname"])})
    })
    
}