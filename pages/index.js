import Head from 'next/head'
import Image from 'next/image'
import FormikForm from '../components/FormikForm'
import ReactFormOne from '../components/ReactFormOne'
import ReactFormThree from '../components/ReactFormThree'
import ReactFormTwo from '../components/ReactFormTwo'
import ReactHookForm from '../components/ReactHookForm'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<ReactHookForm />
		</div>
	)
}
