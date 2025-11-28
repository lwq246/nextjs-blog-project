import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
const name = 'Clarian North';
export const siteTitle = 'Next.js Blog Styled';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href='/favicon.ico' />
                <meta
                    name="description"
                    content="Learn how to build a blog using Next.js"
                />
                <meta
                    property="og:image"
                    content={''}
                />
                <meta
                    name="og:title"
                    content={siteTitle}
                />
                <meta
                    name="twitter:card" content="summary_large_image"
                />
            </Head>
            <header className={styles.header}>
                {home ?
                    (
                        <>

                            <Image
                                priority
                                src="/images/photo.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/images/photo.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt=""
                                />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )
                }
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )

                }
            </header>
        </div>
    );
}