import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Developer List | Home</title>
        <meta name="keywords" content="developers"/>
      </Head>
      <div>
        <h1 className={styles.title}>Web Development</h1>
        <p className={styles.text}>Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an 
        intranet (a private network).[1] Web development can range from developing a simple single static page of 
        plain text to complex web applications, electronic businesses, and social network services. A more 
        comprehensive list of tasks to which Web development commonly refers, may include Web engineering, 
        Web design, Web content development, client liaison, client-side/server-side scripting, Web server and 
        network security configuration, and e-commerce development.</p>
        <p className={styles.text}>Among Web professionals, "Web development" usually refers to the main non-design aspects of building 
        Web sites: writing markup and coding.[2] Web development may use content management systems (CMS) to make 
        content changes easier and available with basic technical skills.</p>
        <p className={styles.text}>For larger organizations and businesses, Web development teams can consist of hundreds of people 
        (Web developers) and follow standard methods like Agile methodologies while developing Web sites. Smaller 
        organizations may only require a single permanent or contracting developer, or secondary assignment to 
        related job positions such as a graphic designer or information systems technician. Web development may be 
        a collaborative effort between departments rather than the domain of a designated department. There are 
        three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer. 
        Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end 
        developers deal with the servers.</p>
        <Link href="/developers">
          <a className={styles.btn}>See Developer Listing</a>
        </Link>
      </div>
    </>
  )
}
