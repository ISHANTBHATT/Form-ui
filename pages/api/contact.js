// import { mailOptions, transporter } from "../../config/nodemailer";
// import { Form } from "../../models/form";

// const CONTACT_MESSAGE_FIELDS = {
//   name: "Name",
//   email: "Email",
//   proposeremail: "Proposer Email",
//   seconderemail: "Seconder Email",
//   subject: "Subject",
//   message: "Message",
// };

// // const generateEmailContent = (data) => {
// //   const stringData = Object.entries(data).reduce(
// //     (str, [key, val]) =>
// //       (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
// //     ""
// //   );
// //   const htmlData = Object.entries(data).reduce((str, [key, val]) => {
// //     return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
// //   }, "");

// //   return {
// //     text: stringData,
// //     html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
// //   };
// // };
// const generateEmailContent = (data) => {
//   const { proposeremail, seconderemail } = data;
//   console.log("proposeremail & seconderemail", proposeremail);
//   const proposerToken = Buffer.from(proposeremail).toString("base64");
//   const seconderToken = Buffer.from(seconderemail).toString("base64");

//   const stringData = Object.entries(data).reduce(
//     (str, [key, val]) =>
//       (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//     ""
//   );

//   const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//     return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//   }, "");

//   return {
//     text: stringData,
//     html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div><p><a href="${process.env.BASE_URL}/api/verify?token=${proposerToken}">Verify Proposer Email</a></p><p><a href="${process.env.BASE_URL}/api/verify?token=${seconderToken}">Verify Seconder Email</a></p></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//   };
// };

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;
//     if (
//       !data ||
//       !data.name ||
//       !data.email ||
//       !data.subject ||
//       !data.proposeremail ||
//       !data.seconderemail ||
//       !data.message
//     ) {
//       return res.status(400).send({ message: "Bad request" });
//     }

//     try {
//       // const contact = new Form({
//       //   ...data,
//       //   verifiedByProposer: false,
//       //   verifiedBySeconder: false,
//       // });
//       // await contact.save();

//       // // Send verification emails
//       // const proposerUrl = `${process.env.NEXT_PUBLIC_URL}/api/verify?email=${data.proposeremail}&id=${contact._id}&type=proposer`;
//       // const seconderUrl = `${process.env.NEXT_PUBLIC_URL}/api/verify?email=${data.seconderemail}&id=${contact._id}&type=seconder`;

//       await transporter.sendMail({
//         ...mailOptions({
//           proposeremail: data.proposeremail,
//           seconderemail: data.seconderemail,
//         }),
//         ...generateEmailContent(data),
//         // subject: data.subject,
//         // subject: `Verification Required: ${data.subject}`,
//         // html: `<p>Please verify your approval:</p><p><a href="${proposerUrl}">Verify as Proposer</a></p><p><a href="${seconderUrl}">Verify as Seconder</a></p>`,
//       });

//       return res.status(200).json({ success: true });
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json({ message: err.message });
//     }
//   }
//   return res.status(400).json({ message: "Bad request" });
// };
// export default handler;

//<---working--->
// import { mailOptions, transporter } from "../../config/nodemailer";
// import { Form } from "../../models/form";

// const CONTACT_MESSAGE_FIELDS = {
//   name: "Name",
//   email: "Email",
//   proposeremail: "Proposer Email",
//   seconderemail: "Seconder Email",
//   subject: "Subject",
//   message: "Message",
// };

// const generateEmailContent = (data, id) => {
//   const { proposeremail, seconderemail } = data;

//   const proposerToken = Buffer.from(proposeremail).toString("base64");
//   const seconderToken = Buffer.from(seconderemail).toString("base64");

//   const stringData = Object.entries(data).reduce(
//     (str, [key, val]) =>
//       (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//     ""
//   );

//   const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//     return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//   }, "");

//   return {
//     text: stringData,
//     html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div>
//           <p><a href="${process.env.BASE_URL}/api/verify?token=${proposerToken}&id=${id}">Verify Proposer Email</a></p>
//           <p><a href="${process.env.BASE_URL}/api/verify?token=${seconderToken}&id=${id}">Verify Seconder Email</a></p>
//         </td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//   };
// };

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;

//     if (
//       !data ||
//       !data.name ||
//       !data.email ||
//       !data.subject ||
//       !data.proposeremail ||
//       !data.seconderemail ||
//       !data.message
//     ) {
//       return res.status(400).send({ message: "Bad request" });
//     }

//     try {
//       // Save the form data to the database
//       const form = new Form({
//         name: data.name,
//         email: data.email,
//         proposeremail: data.proposeremail,
//         seconderemail: data.seconderemail,
//         subject: data.subject,
//         message: data.message,
//         verifiedByProposeremail: false,
//         verifiedBySeconderemail: false,
//       });

//       const savedForm = await form.save();

//       // Send the email with verification links
//       await transporter.sendMail({
//         ...mailOptions({
//           proposeremail: data.proposeremail,
//           seconderemail: data.seconderemail,
//         }),
//         ...generateEmailContent(data, savedForm._id),
//       });

//       return res.status(200).json({ success: true });
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json({ message: err.message });
//     }
//   }
//   return res.status(400).json({ message: "Bad request" });
// };

// export default handler;

import { mailOptions, transporter } from "../../config/nodemailer";
import { mongooseconnect } from "../../lib/mongoose";
import { Form } from "../../models/form";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name of the Company / Firm",
  date: "Establishment / Incorporation Date",
  address: "Full Address",
  number: "Mobile Number",
  telnumber: "Telephone Number",
  email: "Email Id of the office applying this application",
  hoaddress:
    "Full address of the Head Office / Registered Office of the Company",
  gstin: "GSTIN of Head Office / Registered Office",
  iata: "Are you an IATA Accredited Air Cargo Sales Agent?",
  iatanumber: "IATA Approval Number",
  iatadate: "IATA Approval Date",
  proposerName: "Proposer Name",
  proposeremail: "Proposer Email",
  seconderName: "Seconder Name",
  seconderemail: "Seconder Email",
  region: "Region",
};

const generateEmailContent = (data, id, type) => {
  const { proposeremail, seconderemail } = data;
  const token = Buffer.from(
    type === "proposer" ? proposeremail : seconderemail
  ).toString("base64");

  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  // return {
  //   text: stringData,
  //   html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div>
  //         <p><a href="${
  //           process.env.BASE_URL
  //         }/api/verify?token=${token}&id=${id}">Verify ${
  //     type === "proposer" ? "Proposer" : "Seconder"
  //   } Email</a></p>
  //       </td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  // };
  return {
    text: stringData,
    html: `<!DOCTYPE html><html> 
    <head> 
      <title></title> 
      <meta charset="utf-8"/> 
      <meta name="viewport" content="width=device-width, initial-scale=1"/> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
      <style type="text/css"> 
        body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} 
        table{border-collapse: collapse !important;} 
        body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;} 
        @media screen and (max-width: 525px){ 
          .wrapper{width: 100% !important; max-width: 100% !important;} 
          .responsive-table{width: 100% !important;} 
          .padding{padding: 10px 5% 15px 5% !important;} 
          .section-padding{padding: 0 15px 50px 15px !important;} 
        } 
        .form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;} 
        .form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;} 
        .form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;} 
        div[style*="margin: 16px 0;"]{margin: 0 !important;}
        .button {
          background-color: #28a745; /* Green */
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 5px;
        }
        .button:hover {
          background-color: #218838; /* Darker green */
        }
      </style> 
    </head> 
    <body style="margin: 0 !important; padding: 0 !important; background: #fff"> 
      <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
        <tr> 
          <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding"> 
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table"> 
              <tr> 
                <td> 
                  <table width="100%" border="0" cellspacing="0" cellpadding="0"> 
                    <tr> 
                      <td> 
                        <table width="100%" border="0" cellspacing="0" cellpadding="0"> 
                          <tr> 
                            <td style="padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323;" class="padding message-content"> 
                              <h2>ACTIVE MEMBER APPLICATION FORM</h2> 
                              <div class="form-container">${htmlData}</div>
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td align="center">
                                    <a href="${process.env.BASE_URL}/api/verify?token=${token}&id=${id}" style="text-decoration: none;">
                                      <button class="button">Please Click here to Verify</button>
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table> 
                      </td>
                    </tr>
                  </table> 
                </td>
              </tr>
            </table> 
          </td>
        </tr>
      </table> 
    </body>
    </html>`,
  };
};

const handler = async (req, res) => {
  await mongooseconnect();
  if (req.method === "POST") {
    const data = req.body;
    // console.log("dddata", data);
    if (
      !data ||
      !data.name ||
      !data.email ||
      !data.region ||
      !data.proposeremail ||
      !data.seconderemail
    ) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      // Save the form data to the database
      const form = new Form({
        name: data.name,
        date: data.date,
        address: data.address,
        number: data.number,
        telnumber: data.telnumber,
        email: data.email,
        hoaddress: data.hoaddress,
        gstin: data.gstin,
        iata: data.iata,
        iatanumber: data.iatanumber,
        iatadate: data.iatadate,
        proposerName: data.proposerName,
        proposeremail: data.proposeremail,
        seconderName: data.seconderName,
        seconderemail: data.seconderemail,
        region: data.region,
        // subject: data.subject,
        // message: data.message,
        // verifiedByProposeremail: false,
        // verifiedBySeconderemail: false,
      });

      // console.log("form", form);
      const savedForm = await form.save();

      // Send the email to the proposer
      await transporter.sendMail({
        ...mailOptions({
          proposeremail: data.proposeremail,
        }),
        ...generateEmailContent(data, savedForm._id, "proposer"),
        subject: "ACTIVE MEMBER APPLICATION FORM",
      });

      // Send the email to the seconder
      await transporter.sendMail({
        ...mailOptions({
          seconderemail: data.seconderemail,
        }),
        ...generateEmailContent(data, savedForm._id, "seconder"),
        subject: "ACTIVE MEMBER APPLICATION FORM",
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
