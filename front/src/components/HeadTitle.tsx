import React, { memo } from "react";
import Head from "next/head";

type Props = {
  title: string;
};

export const HeadTitle: React.FC<Props> = memo(({ title }) => {
  return (
    <Head>
      {title === "" ? (
        <title>muscle-power</title>
      ) : (
        <title>{title} | muscle-power</title>
      )}
      <meta name="description" content="摂取した栄養素を記録する。" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/muscle.svg" />
    </Head>
  );
});
