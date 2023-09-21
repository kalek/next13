"use client";

import { type UrlObject } from "url";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: {
	href: Route<T> | UrlObject;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const stringPathname =
		typeof href === "object" ? href.pathname || "" : href;
	const isActive = exact
		? pathname === stringPathname
		: pathname.includes(stringPathname);

	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
