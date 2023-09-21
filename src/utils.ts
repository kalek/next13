export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const prodOnly = <TParams extends unknown[], TReturn>(
	func: (...args: TParams) => TReturn,
) => {
	return (...args: TParams) => {
		if (process.env.NODE_ENV === "production") {
			return func(...args);
		} else {
			return [];
		}
	};
};
