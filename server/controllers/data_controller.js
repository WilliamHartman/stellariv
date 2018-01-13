
module.exports = {
    authorize: (req, res) => {
        const db = req.app.get('db');

        db.get_admin([req.body.username, req.body.password])
            .then(user => {
                if(user.length === 1){
                    req.session.userData = {userID: user[0].user_id, username: user[0].username, password: user[0].user_password};
                    req.session.authorized = true;
                    req.session.save();
                } else {
                    req.session.authorized = false;
                    req.session.save();
                }
                res.status(200).send(req.session)
            })        
    },

    authMe: (req, res) => {
        if(req.session) {
            return res.status(200).send(req.session)
        } else {
            return res.status(200).send(false)            
        }
    }
}