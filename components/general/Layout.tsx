import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Header from '@/components/general/Header';
import Footer from '@/components/general/Footer';
import React from 'react';

interface Props {
	title: string;
	keywords: string;
	description: string;
	children: React.ReactNode;
}

const Layout = ({ title, keywords, description, children }: Props) => {
	return (
		<div className={styles.main}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: 'David Nguyen',
	description: 'Full Stack Web Developer Portfolio',
	keywords: 'full stack, backend, frontend, web developer',
};

export default Layout;
