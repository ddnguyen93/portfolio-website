import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>David Nguyen</div>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
