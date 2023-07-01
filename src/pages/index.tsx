import Head from "next/head";

import Nav from "~/components/home/Nav";

export default function Home() {

  return (
    <>
      <Head>
        <title>todo-daily</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        {/* 开启响应式的布局？(没看到效果) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      {/* 这里的最顶级使用main标签也可以，对搜索引擎的支持会好一些；m-auto使容器整体居中；h-screen是占满屏幕高度；w-full是占满左右宽度 */}
      <div className="h-screen w-full container m-auto">
        <Nav></Nav>
      </div>
    </>
  );
}
