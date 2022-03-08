import type { NextPage } from 'next';
import Image from 'next/image';
import profilePic from 'public/profile_pic.jpg';
import Layout from '@/components/general/Layout';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import {
	AiOutlineCopyright,
	AiOutlineLinkedin,
	AiOutlineGithub,
} from 'react-icons/ai';

const Home: NextPage = () => {
	const tools = [
		'Javascript',
		'HTML',
		'CSS',
		'Python',
		'React',
		'NodeJS',
		'Express',
		'Flask',
		'MongoDB',
		'AWS',
		'Typescript',
	];

	return (
		<Layout>
			<div className={styles.profileContainer}>
				<div className={styles.aboutContainer}>
					<h2>Hey! I&apos;m</h2>
					<div className={styles.nameContainer}>
						<h1 className={styles.firstName}>DAVID</h1>
						<h1>NGUYEN</h1>
					</div>
					<p>
						I&apos;m a Full Stack Software Developer passionate about learning
						new technologies and applying them to my projects.
					</p>
					<div className={styles.aboutLinksContainer}>
						<a
							className={styles.aboutLink}
							href="/David-Nguyen-Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
						<Link href="https://www.linkedin.com/in/david-duy-nguyen" passHref>
							<AiOutlineLinkedin size={35} className={styles.aboutLink} />
						</Link>
						<Link href="https://www.github.com/ddnguyen93" passHref>
							<AiOutlineGithub size={35} className={styles.aboutLink} />
						</Link>
					</div>
				</div>
				<div className={styles.profilePicture}>
					<Image
						src={profilePic}
						alt="Profile Picture"
						height={300}
						width={300}
					/>
				</div>
			</div>
			<div className={styles.toolboxContainer}>
				<h1>My Toolbox</h1>
				<ul>
					{tools.map((tool) => {
						return <li key={tool}>{tool}</li>;
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default Home;
