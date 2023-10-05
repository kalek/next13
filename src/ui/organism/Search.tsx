"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, type ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const [value, setValue] = useState(query || "");
	const debouncedValue = useDebounce(value, 500);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	useEffect(() => {
		if (!debouncedValue) return;
		router.push(`/search?query=${debouncedValue}`);
	}, [debouncedValue, router]);

	return (
		<div>
			<input
				role="searchbox"
				className="w-[300px] border p-2"
				type="text"
				placeholder="Search"
				onChange={handleChange}
				value={value}
			/>
		</div>
	);
};
