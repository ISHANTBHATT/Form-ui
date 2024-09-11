// import { MongoClient } from "mongodb";
// import bcrypt from "bcryptjs";

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     try {
//       await client.connect();
//       const database = client.db("your-db-name");
//       const usersCollection = database.collection("users");

//       // Find the user by email
//       const user = await usersCollection.findOne({ email });

//       if (!user) {
//         return res.status(401).json({ error: "Invalid email or password" });
//       }

//       // Compare the entered password with the stored hashed password
//       const isPasswordValid = await bcrypt.compare(password, user.password);

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: "Invalid email or password" });
//       }

//       // Success, user is authenticated
//       return res.status(200).json({ message: "Authenticated successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Something went wrong" });
//     } finally {
//       await client.close();
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
