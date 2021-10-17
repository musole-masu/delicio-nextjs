// /api/new-meal
// POST request only
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // 1gwiMZRkiDBfecdx
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://musolemasu:1gwiMZRkiDBfecdx@delicio.d7fro.mongodb.net/delicio?retryWrites=true&w=majority"
      );
      const db = client.db();

      const mealsCollection = db.collection("meals");
      const result = await mealsCollection.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "Meals inserted !" });
    } catch (error) {
      console.log(error);
    }
  }
}
export default handler;
