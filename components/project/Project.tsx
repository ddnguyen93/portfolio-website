import React, { useState } from 'react';
import styles from '@/styles/Project.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imageData from '../../public/index';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import GithubLink from './GithubLink';

interface Props {
	title: string;
	description: string;
	tools: string;
	pictures: 'odin-book' | 'stock-stalker';
	link: string;
	github: string[];
}

const ProjectComponent = ({
	title,
	description,
	tools,
	pictures,
	link,
	github,
}: Props) => {
	const [imageNum, setImageNum] = useState<number>(0);
	const length = imageData[pictures].length;
	const nextSlide = () => {
		setImageNum(imageNum === length - 1 ? 0 : imageNum + 1);
	};

	const prevSlide = () => {
		setImageNum(imageNum === 0 ? length - 1 : imageNum - 1);
	};

	const imgSource = imageData[pictures][0];
	return (
		<div className={styles.container}>
			<div className={styles.aboutContainer}>
				<div className={styles.titleContainer}>
					<h2>{title}</h2>
					<div>
						<Link href={link} passHref>
							<HiOutlineExternalLink size={30} className={styles.linkIcon} />
						</Link>
					</div>
					<GithubLink github={github} />
				</div>
				<p>{description}</p>
				<p>
					<b>Tools Used:</b> {tools}
				</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={imageData[pictures][imageNum]}
					height={270}
					width={508}
					alt="Screenshot Image"
				/>
				<MdArrowBackIos
					className={styles.arrowBtn}
					id={styles.leftArrow}
					size={25}
					onClick={prevSlide}
				/>
				<MdArrowForwardIos
					className={styles.arrowBtn}
					id={styles.rightArrow}
					size={25}
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
};

export default ProjectComponent;
