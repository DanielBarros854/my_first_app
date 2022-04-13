import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from "next";

import { people } from "../../../../data";
import initMiddleware from "../../../middleware/initMiddleware";

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  console.log('mandou');
  const { name, gender } = JSON.parse(req.body);
  people.push({
    id: (people.length + 1).toString(),
    name,
    gender,
  });
  res.status(200).json(people);
};

export default handler;
