import Head from "next/head";
function PageHead({ headTitle }) {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "PWA Ninja Adventure RPG2D"}
                </title>
                <link rel="ico" href="/favicon.ico" />
            </Head>
        </>
    );
}
export default PageHead;
