import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import {
	AiOutlineCopyright,
	AiOutlineLinkedin,
	AiOutlineGithub,
} from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.copyright}>
				<AiOutlineCopyright style={{ marginRight: '5px' }} />
				David Nguyen 2022
			</div>
			<nav>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/david-duy-nguyen" passHref>
							<AiOutlineLinkedin size={25} />
						</Link>
					</li>
					<li>
						<Link href="https://www.github.com/ddnguyen93" passHref>
							<AiOutlineGithub size={25} />
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
