// POST INFO FROM FORM AND INSERT INTO DATABASE
 app.post('/trainers/', (request, response) => {

   const queryString = 'INSERT INTO trainers (name) VALUES ($1);'
   const values = [request.body.name];

   // POST INFO FROM FORM AND INSERT INTO DATABASE
 //get have slash
 app.get('/pokemontrainers/', (request, response) => {

   const queryString = 'SELECT * FROM pokemon_trainers';
   pool.query(queryString, (err, result) => {
     if (err) {
       console.error('Query error:', err.stack);
       response.send('Error!');
     } else {
       // console.log('Query result:', result);
       // redirect to home page
       response.render('pokemon_trainers/pokemontrainers', {pokemontrainers: result.rows});
     }
   });
 });

 // POST INFO FROM FORM AND INSERT INTO DATABASE
 app.post('/pokemontrainers', (request, response) => {

   const queryString = 'INSERT INTO pokemon_trainers (pokemon_id, trainers_id) VALUES ($1, $2)';
   const values = [request.body.pokemonid, request.body.userid];
   // console.log(values);

   pool.query(queryString, values, (err, result) => {
     if (err) {
       console.error('Query error:', err.stack);
       response.send('Error!');
     } else {
       console.log('Query result:', result);
       // redirect to home page
       response.redirect('/trainers')
     }
   });
 });


 /**
 * ===================================
 * Password creation feature
 * ===================================
 */
 const sha256 = require('js-sha256');
 const cookieParser = require('cookie-parser');
 app.use(cookieParser());

 app.get('/createaccount/', (request, response) => {

       response.render('login/createaccount');
     });



 app.post('/createaccount', (request, response) => {

 const queryString = 'INSERT INTO trainers (name, password) VALUES ($1, $2)';
 let username = request.body.name;
 let hashedPassword = sha256(request.body.password);
 const values = [username, hashedPassword];

   pool.query(queryString, values, (err, result) => {

     if (err) {
         console.error('Query error:', err.stack);
         response.send('Error!');
     } else {
         console.log('Query result:', result);

         response.cookie('login', username);
         response.send("Account Created!");
     }
   });
 });


 app.get('/login/', (request, response) => {

       response.render('login/login');
     });


 app.post('/login', (request, response) => {

 const queryString = 'SELECT password FROM trainers WHERE name = ($1)'
 let hashedPassword = sha256(request.body.password);
 let username = request.body.name;
 const values = [username];

   pool.query(queryString, values, (err, result) => {

     if (err) {
         console.error('Query error:', err.stack);
         response.send('Error!');
     } else if

         (hashedPassword === result.rows[0].password) {
         response.cookie('login', username);
         response.render('login/letsgo');
     } else {
         response.redirect('/login');
     }
   });
 });

 app.post('/logout', (request, response) => {
     response.clearCookie('login');
     response.redirect('/login');
 });

 const server = app.listen(3002, () => console.log('~~~ Ahoy we go from the port of 3002!!!'));


