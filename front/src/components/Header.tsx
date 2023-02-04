import Link from "next/link";
import Router from "next/router";
import React, { memo } from "react";

export const Header: React.FC = memo(() => {
  const onClickLoginButton = () => {
    Router.push("/guest");
  };

  return (
    <header className="bg-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">header</Link>
        </div>
        <button onClick={onClickLoginButton}>Log in</button>
      </div>
    </header>
  );
});
