import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';
import styles from '@/styles/GitHubLink.module.css';

interface Props {
	github: string[];
}

export default function GithubLink({ github }: Props) {
	const [dropMenu, setDropMenu] = useState<boolean>(false);

	if (github.length === 1) {
		return (
			<div className={styles.container}>
				<Link href={github[0]} passHref>
					<AiOutlineGithub size={25} className={styles.linkIcon} />
				</Link>
			</div>
		);
	} else {
		return (
			<>
				<div className={styles.container}>
					<AiOutlineGithub
						size={30}
						onClick={() => setDropMenu(!dropMenu)}
						className={styles.linkIcon}
					/>
					{dropMenu && (
						<div className={styles.dropMenu}>
							<a href={github[0]} id={styles.linkTab}>
								Frontend Code
							</a>
							<a href={github[1]}>Backend Code</a>
						</div>
					)}
				</div>
				{dropMenu && (
					<div
						className={styles.blankSpace}
						onClick={() => setDropMenu(false)}
					/>
				)}
			</>
		);
	}
}
