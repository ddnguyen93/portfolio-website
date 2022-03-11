import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

// export const config = {
// 	api: {
// 		bodyParser: {
// 			sizeLimit: '1mb',
// 		},
// 	},
// };

export default async function emailHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { firstName, lastName, email, message } = req.body;

	const emailMessage = `From ${firstName} ${lastName} (${email}): ${message}`;

	try {
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.APP_PASSWORD,
			},
		});

		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: 'david.d.nguyen.portfolio@gmail.com', // sender address
			to: 'ddnguyen93@gmail.com', // list of receivers
			subject: 'Website Portfolio Email', // Subject line
			text: emailMessage, // plain text body
		});
	} catch (err) {
		res.status(400).end(JSON.stringify({ message: err }));
	}
	res.status(200).end(JSON.stringify({ message: 'successful' }));
}
