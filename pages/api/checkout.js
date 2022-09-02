const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              mode: "subscription",
              line_items: [
                {
                  price: process.env.PRICE_ID,
                  quantity: 1,
                },
              ],
              success_url: `${process.env.CLIENT_URL}/api/success?session_id={CHECKOUT_SESSION_ID}&email=${req.body.email}&billing=${req.body.billing}&payment=${req.body.payment}&address=${req.body.address}&fullName=${req.body.fullName}&cvc=${req.body.cvc}&date=${req.body.date}`,
        
              cancel_url: `${process.env.CLIENT_URL}/api/cancel`,
            })
            res.json({ url: session.url })
          } catch (e) {
            res.status(500).json({ error: e.message })
          }

    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }