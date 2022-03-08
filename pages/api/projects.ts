import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllProjects(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.json({ method: req.method });
}
