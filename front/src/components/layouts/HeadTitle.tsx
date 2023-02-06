import React, { memo } from "react";
import Head from "next/head";

type Props = {
  title: string;
};

export const HeadTitle: React.FC<Props> = memo(({ title }) => {
  return (
    <Head>
      <title>{`${title}muscle-power`}</title>
      <meta name="description" content="摂取した栄養素を記録する。" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/muscle.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="use-credentials"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
});
