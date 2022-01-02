const mysqldump = require('mysqldump');
const d = new Date();
const hour = d.getHours();
const dumpsql = (test) => {
    console.log('Sql Backup Successfully')
    mysqldump({
    connection: {
        host: "localhost",
        user: "root",
        password: "yourpassword",
        database: "yourdatabase"
    },
    dumpToFile: `./${test}.sql`,
    });
}

setInterval(dumpsql, 36000000, hour);