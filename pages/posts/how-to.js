import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function HowTo() {
    return (
        <Layout>
            <Head>
                <title>How To</title>
            </Head>
            <h1>Como instalar iamSecure.tk en:</h1>

            <h1>Como enviar mails con iamSecure.tk en:</h1>
            <a name="SendSecureMail"></a>


            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}