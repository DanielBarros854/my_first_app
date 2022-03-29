import { NextApiRequest, NextApiResponse } from "next";
import { people } from "../../../../data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(people)
};

export default handler
