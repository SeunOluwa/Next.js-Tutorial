import Head from 'next/head'
import styles from '../../styles/Developers.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { developers: data }
    }

}

const Developers = ({ developers }) => {
    return (
        <>
            <Head>
                <title>Developer List | Developers</title>
                <meta name="keywords" content="developers"/>
            </Head>
            <div>
                <h1>All Developers</h1>
                {developers.map(developer => (
                    <Link href={'/developers/' + developer.id} key={developer.id}>
                        <a className={styles.single}>
                            <h3>{ developer.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default Developers;