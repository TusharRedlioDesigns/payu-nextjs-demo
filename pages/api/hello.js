import PayU from "payu-websdk";

export default function handler(req, res) {
  const payuClient = new PayU({
    key: "<MERCHANT_KEY>",
    salt: "<MERCHANT_SALT>",
  }, "PROD");     // Possible value  = TEST/PROD

  let data = payuClient.paymentInitiate({
    txnid: Date.now().toString(),
    amount: "1.00",
    currency: "usd",
    firstname: "kshitij",
    productinfo: "payu",
    email: "kshitij.tomar@payu.in",
    phone: "7452892102",
    surl: "https://test.payu.in/admin/test_response",
    furl: "https://test.payu.in/admin/test_response",
    udf1: "1",
    udf2: "2",
    udf3: "3",
    udf4: "4",
    udf5: "5",
    // udf6: "6",
    // udf7: "7",
    // udf8: "8",
    // udf9: "9",
    // udf10: "10",
  });

  res.status(200).json(data);
}
