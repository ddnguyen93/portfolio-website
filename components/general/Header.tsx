import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
	const router = useRouter();
	const [showNav, setShowNav] = useState<boolean>(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>David Nguyen</div>
			<div className={styles.menuBtn}>
				<AiOutlineMenu size={30} onClick={() => setShowNav(!showNav)} />
			</div>
			<nav id={showNav ? styles.sideNav : ''}>
				<ul>
					<li>
						<Link href="/">
							<a
								className={
									router.pathname === '/'
										? styles.currentpage
										: styles.notcurrentpage
								}
							>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a
								className={
									router.pathname === '/projects'
										? styles.currentpage
										: styles.notcurrentpage
								}
							>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a
								className={
									router.pathname === '/contact'
										? styles.currentpage
										: styles.notcurrentpage
								}
							>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
			{showNav && (
				<div
					className={styles.blankSpace}
					onClick={() => setShowNav(false)}
				></div>
			)}
		</header>
	);
}
