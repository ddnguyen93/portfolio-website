import React from 'react';
import Layout from '@/components/general/Layout';
import styles from '@/styles/ProjectsPage.module.css';
import data from '../data/projects.json';
import ProjectComponent from '@/components/project/Project';

export default function ProjectsPage() {
	const { projects } = data;
	console.log(projects);
	return (
		<Layout title="David Nguyen | Projects">
			<h1 className={styles.pageTitle}>My Projects</h1>
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
		</Layout>
	);
}
