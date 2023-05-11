//  Getting a Single Article !

import { articles } from "@/data";

export default function handler(req: any, res: any) {
  const query = req.query.id;

  const filtered = articles.filter((article) => article.id === query);

  if (filtered.length > 0) {
    return res.status(200).json(filtered);
  } else {
    return res
      .status(404)
      .json({ msg: `No Article was found with id ${query}` });
  }
}
