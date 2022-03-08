import { NextApiRequest, NextApiResponse } from 'next';

export default function project(req: NextApiRequest, res: NextApiResponse) {
	res.json({ method: req.query.id });
}
