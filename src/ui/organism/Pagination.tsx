import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { ActiveLink } from "../atoms/ActiveLink";

interface PaginationProps {
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
}

export const Pagination = ({
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}: PaginationProps) => {
	const paginationRange: (string | number)[] | undefined =
		usePagination({
			currentPage,
			totalCount,
			siblingCount,
			pageSize,
		});

	if (paginationRange === undefined) {
		return null;
	}

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const lastPage = paginationRange[paginationRange.length - 1];

	return (
		<ul
			className="mx-auto flex w-fit flex-row border"
			aria-label="pagination"
		>
			{currentPage !== 1 && (
				<ActiveLink
					className="flex h-12 w-12 items-center justify-center bg-slate-300"
					href={`/products/${currentPage - 1}`}
				>
					{"<"}
				</ActiveLink>
			)}
			{paginationRange.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return (
						<li
							key={DOTS}
							className="flex h-12 w-12 items-center justify-center border-r"
						>
							&#8230;
						</li>
					);
				}

				return (
					<ActiveLink
						key={pageNumber}
						className="flex h-12 w-12 items-center justify-center border-r"
						activeClassName="bg-slate-300"
						exact
						href={`/products/${pageNumber}`}
					>
						{pageNumber}
					</ActiveLink>
				);
			})}
			{lastPage !== currentPage && (
				<ActiveLink
					className="flex h-12 w-12 items-center justify-center bg-slate-300"
					href={`/products/${currentPage + 1}`}
				>
					{">"}
				</ActiveLink>
			)}
		</ul>
	);
};
