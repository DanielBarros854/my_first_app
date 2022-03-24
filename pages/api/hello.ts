// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const Api = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(req.body)
    res.status(200).json({ name: req.body.name })
  } 
  res.status(400).json({ error: 'use apenas motodo POST' })
}

export default Api;
