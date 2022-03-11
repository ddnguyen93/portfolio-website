import React from 'react';
import Layout from '@/components/general/Layout';
import styles from '@/styles/ProjectsPage.module.css';
import data from '../data/projects.json';
import ProjectComponent from '@/components/project/Project';

export default function ProjectsPage() {
	const { projects } = data;
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
		'NextJS',
	];
	return (
		<Layout title="David Nguyen | Projects">
			<h1 className={styles.pageTitle}>MY PROJECTS</h1>
			{projects.map((project) => {
				const { id, title, description, tools, pictures, link, github } =
					project;
				return (
					<ProjectComponent
						key={id}
						title={title}
						description={description}
						tools={tools}
						pictures={pictures}
						link={link}
						github={github}
					/>
				);
			})}
			<div className={styles.toolboxContainer}>
				<h1 className={styles.pageTitle}>My Toolbox</h1>
				<ul>
					{tools.map((tool) => {
						return <li key={tool}>{tool}</li>;
					})}
				</ul>
			</div>
		</Layout>
	);
}
