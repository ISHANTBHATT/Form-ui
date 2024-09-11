// // pages/api/verify.js
// // import { mongooseconnect } from "../../lib/mongoose";
// // import { Form } from "../../models/form";

// // export default async function handler(req, res) {
// //   const { email, type } = req.body;

// //   await mongooseconnect();

// //   const update = {};
// //   if (type === "proposer") {
// //     update.verifiedByProposeremail = true;
// //   } else if (type === "seconder") {
// //     update.verifiedBySeconderemail = true;
// //   }

// //   const form = await Form.findOneAndUpdate({ proposeremail: email }, update, {
// //     new: true,
// //   });

// //   if (!form) {
// //     return res.status(404).json({ error: "Verification failed." });
// //   }

// //   res.status(200).json({ success: true, form });
// // }

// import mongoose from "mongoose";
// import { Form } from "../../models/form";

// const handler = async (req, res) => {
//   const { email, id, type } = req.query;

//   if (!email || !id || !type) {
//     return res.status(400).json({ message: "Invalid request" });
//   }

//   try {
//     const contact = await Form.findById(id);
//     if (!contact) {
//       return res.status(404).json({ message: "Contact not found" });
//     }

//     if (type === "proposer" && contact.proposeremail === email) {
//       contact.verifiedByProposer = true;
//     } else if (type === "seconder" && contact.seconderemail === email) {
//       contact.verifiedBySeconder = true;
//     } else {
//       return res.status(400).json({ message: "Invalid verification type" });
//     }

//     await contact.save();
//     return res
//       .status(200)
//       .json({ success: true, message: "Verification successful" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export default handler;

//-----working-----
// import { mongooseconnect } from "../../lib/mongoose";
// import { Form } from "../../models/form";

// export default async function handler(req, res) {
//   try {
//     await mongooseconnect();

//     const { token } = req.query;
//     console.log(token);
//     if (!token) {
//       return res.status(400).json({ message: "Invalid token" });
//     }

//     // Decode token (assuming Base64 encoding)
//     const email = Buffer.from(token, "base64").toString("ascii");

//     // Find form document by proposer or seconder email
//     const formDoc = await Form.findOne({
//       $or: [{ proposeremail: email }, { seconderemail: email }],
//     });

//     if (!formDoc) {
//       return res.status(404).json({ message: "Form not found" });
//     }

//     const updateField =
//       formDoc.proposeremail === email
//         ? { verifiedByProposeremail: true }
//         : { verifiedBySeconderemail: true };

//     await Form.updateOne({ _id: formDoc._id }, { $set: updateField });

//     return res.status(200).json({ message: "Verification successful" });
//   } catch (error) {
//     console.error("API Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// import { mongooseconnect } from "../../lib/mongoose";
// import { Form } from "../../models/form";

// export default async function handler(req, res) {
//   try {
//     await mongooseconnect();

//     if (req.method === "GET") {
//       const { id, type } = req.query;

//       if (!id || !type) {
//         return res.status(400).json({ error: "Invalid request" });
//       }

//       const updateField =
//         type === "proposer"
//           ? { verifiedByProposeremail: true }
//           : type === "seconder"
//           ? { verifiedBySeconderemail: true }
//           : null;

//       if (!updateField) {
//         return res.status(400).json({ error: "Invalid type" });
//       }

//       const formDoc = await Form.findByIdAndUpdate(id, updateField, {
//         new: true,
//       });

//       if (!formDoc) {
//         return res.status(404).json({ error: "Form not found" });
//       }

//       return res.status(200).json({ success: true, form: formDoc });
//     } else {
//       res.setHeader("Allow", ["GET"]);
//       return res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   } catch (error) {
//     console.error("Verification Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

import { mongooseconnect } from "../../lib/mongoose";
import { Form } from "../../models/form";

export default async function handler(req, res) {
  try {
    await mongooseconnect();

    const { token, id } = req.query;

    if (!token || !id) {
      return res.status(400).json({ message: "Invalid token or id" });
    }

    // Decode token (assuming Base64 encoding)
    const email = Buffer.from(token, "base64").toString("ascii");

    // Find the specific document by _id and the email (to ensure integrity)
    const formDoc = await Form.findOne({
      _id: id,
      $or: [{ proposeremail: email }, { seconderemail: email }],
    });

    if (!formDoc) {
      return res.status(404).json({ message: "Form not found" });
    }

    // Determine which field to update based on the email
    let updateField;
    if (formDoc.proposeremail === email && !formDoc.verifiedByProposeremail) {
      updateField = { verifiedByProposeremail: true };
    } else if (
      formDoc.seconderemail === email &&
      !formDoc.verifiedBySeconderemail
    ) {
      updateField = { verifiedBySeconderemail: true };
    } else {
      return res
        .status(400)
        .json({ message: "Email already verified or not found" });
    }

    // Update the specific field
    await Form.updateOne({ _id: formDoc._id }, { $set: updateField });

    return res.redirect(302, "/success");
    // return res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
