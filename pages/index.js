import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilstyles from '../styles/utils.module.css';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  { console.log('allPostsData:, ', allPostsData); }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilstyles.headingMd}>
        <p>[Hello, I'm Clarian North. I'm a software developer and blogger.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '})
        </p>
      </section>
      <section className={`${utilstyles.headingMd} ${utilstyles.padding1px}`}>
        <h2 className={utilstyles.headingLg}>Blog</h2>
        <ul className={utilstyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilstyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilstyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
