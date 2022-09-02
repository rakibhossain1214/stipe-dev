const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


export default async function handler(req, res) {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    let results = "";

    // try {
    //     const client = await pool.connect();
    //     await client.query(`insert into clientInfo (name, surname, email, cpf, check1, payment_method, session) values ('${req.query.name}', '${req.query.surname}', '${req.query.email}', '${req.query.cpf}', '${req.query.Check1}', '${req.query.payment_method}', '${JSON.stringify(session)}');`);
    //     client.release();
    // } catch (err) {
    //     console.error(err);
    //     res.send("Error " + err);
    // }

    // try {
    //     const client = await pool.connect();
    //     const result = await client.query('SELECT * FROM clientInfo');
    //     results = { 'results': (result) ? result.rows : null };
    //     client.release();
    // } catch (err) {
    //     console.error(err);
    //     res.send("Error " + err);
    // }

    res.send(`<html>
              <body>
                <h1>Thanks for your order, ${customer.name}!</h1>
                <br>
                <p>User Details:</p>
                <p>Name:  ${req.query.name}</p>
                <p>Email: ${req.query.email}</p>
                <p>Surname: ${req.query.surname}</p>
                <p>CPF: ${req.query.cpf}</p>
                <p>check1: ${req.query.Check1}</p>
                <p>Payment Method: ${req.query.payment_method}</p>
                <br>
                <p>Session and User details from database: </p>
                <p>${JSON.stringify(session)}</p>
              </body>
            </html>`);
}