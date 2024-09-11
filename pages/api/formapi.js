import { mongooseconnect } from "../../lib/mongoose";
import { Form } from "../../models/form";

export default async function handle(req, res) {
  try {
    await mongooseconnect();
    const { method } = req;

    if (method === "POST") {
      const {
        name,
        date,
        address,
        number,
        telnumber,
        email,
        hoaddress,
        gstin,
        iata,
        iatanumber,
        iatadate,
        proposerName,
        proposeremail,
        seconderName,
        seconderemail,
        region,
        verified,
      } = req.body;
      const formDoc = await Form.create({
        name,
        date,
        address,
        number,
        telnumber,
        email,
        hoaddress,
        gstin,
        iata,
        iatanumber,
        iatadate,
        proposerName,
        seconderName,
        proposeremail,
        seconderemail,
        region,
        verified,
      });
      res.json(formDoc);
    } else if (method === "GET") {
      if (req.query?.id) {
        res.json(await Form.findById(req.query.id));
      } else {
        res.json((await Form.find()).reverse());
      }
    } else if (method === "PUT") {
      const {
        _id,
        name,
        date,
        address,
        number,
        telnumber,
        email,
        hoaddress,
        gstin,
        iata,
        iatanumber,
        iatadate,
        proposerName,
        seconderName,
        proposeremail,
        seconderemail,
        region,
        verified,
      } = req.body;
      await Form.updateOne(
        { _id },
        {
          name,
          date,
          address,
          number,
          telnumber,
          email,
          hoaddress,
          gstin,
          iata,
          iatanumber,
          iatadate,
          proposerName,
          proposeremail,
          seconderName,
          seconderemail,
          region,
          verified,
        }
      );
      res.json(true);
    } else if (method === "DELETE") {
      if (req.query?.id) {
        await Form.deleteOne({ _id: req.query?.id });
        res.json(true);
      }
    } else {
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
