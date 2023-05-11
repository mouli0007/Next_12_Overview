// creating a rest api and making some data base calls !

import { articles } from "@/data";

// Rest API !

export default function handler(req: any, res: any) {
  return res.status(200).json(articles);
}
