"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={formStatus.pending}
			className="rounded-sm border bg-slate-100 px-6 py-2 shadow-sm disabled:cursor-wait disabled:bg-slate-300"
		>
			Add to cart
		</button>
	);
};
