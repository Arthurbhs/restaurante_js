var conn = require("./db");

module.exports = {
   render(req, res, error){
res.render('reservations', {
title: 'Reservas - Restaurante Saboroso!',
background: 'images/img_bg_2.jpg',
h1: 'Reserve uma mesa!',
body: req.body,
error
});
},
save(fields){

    return new Promise((resolve, reject) => {  

conn.query(`INSERT INT  tb_reservations (name, email, people, date, time)
VALUES (?, ?, ?, ?, ?)
`,[ fields.name,
    fields.email,
    fields.people,
    fields.date,
    fields.time,],
    (err, results) => {
        if (err) {
        reject(err);
        }else{
            resolve(results);
        }


    }
);
});

}

}
