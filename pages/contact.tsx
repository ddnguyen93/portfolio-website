import React, { useState } from 'react';
import Layout from '@/components/general/Layout';
import styles from '@/styles/ContactPage.module.css';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

export default function ContactPage() {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [alert, setAlert] = useState<string>('');

	const messageHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await fetch('http://localhost:3000/api/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					message: message,
				}),
			});
			const responseData = await response.json();
			console.log(responseData);
			if (responseData.message === 'successful') {
				setFirstName('');
				setLastName('');
				setEmail('');
				setMessage('');
				setAlert('Message Sent.');
			} else {
				setAlert(
					'Error: Please try again or contact me directly through email, phone or LinkedIn.'
				);
			}
		} catch (err) {}
	};

	return (
		<Layout title="David Nguyen | Contact">
			<div className={styles.pageContainer}>
				<h1 className={styles.pageTitle}>CONTACT</h1>
				<div className={styles.container}>
					<form className={styles.formContainer} onSubmit={messageHandler}>
						<input
							placeholder="First Name"
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
							value={firstName}
							required
							type="text"
						/>
						<input
							placeholder="Last Name"
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							value={lastName}
							required
							type="text"
						/>
						<input
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							required
							type="email"
						/>
						<textarea
							placeholder="Message"
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							value={message}
							required
							rows={4}
						/>
						<button type="submit">Send Message</button>
						{alert && <p>{alert}</p>}
					</form>
					<div className={styles.contactInfo}>
						<h2>Directly Contact Me</h2>
						<p>
							<AiOutlineMail size={25} className={styles.icon} />
							ddnguyen93@gmail.com
						</p>
						<p>
							<AiOutlinePhone size={25} className={styles.icon} />
							(647) 779-3838
						</p>
						<p>
							<IoLocationOutline size={25} className={styles.icon} />
							Ontario, CA
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
