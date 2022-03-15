const indexR = require("./index");
const usersR = require("./users");
const toysR = require("./toys");

exports.routesInit = (app) => {
    app.use("/", indexR);
    app.use("/users", usersR);
    app.use("/toys", toysR);

    app.use((req, res) => {
        res.status(404).json({ msg_err: "Url not found - error 404" });
    })
}

// מאפשר לשרת בדומיין אחר לבצע בקשות לשרת שלנו דרך דפדפן
exports.corsAccessControl = (app) => {
    app.all('*', function (req, res, next) {
        if (!req.get('Origin')) return next();
        // * -> במציאות במקום כוכבית נכניס שם דומיין שיש לו אישור גישה// לשרת
        res.set('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
        res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token,auth-token');
        next();
    });
}


