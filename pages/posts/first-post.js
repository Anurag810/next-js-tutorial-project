import Link from "next/link"
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>First post</title>
        </Head>
        <center>
            <h1>'When to Use Static Generation v.s. Server-side Rendering'</h1>
            <p>
We recommend using <b>Static Generation</b> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page <b>ahead</b> of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is <b>no</b>t a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use <b>Server-Side Rendering</b>. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
</p>
        </center>
    </Layout>
};