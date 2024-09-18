import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const products = await Product.find();
//     return response.status(200).json(products);
//   }
// }

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const products = await Product.find();

      response.status(200).json(products);
      return;
    }

    if (request.method === "POST") {
      const data = request.body;
      console.log(data);

      await Product.create(data);

      response.json({ message: "Success!" });
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server error" });
    return;
  }
}
