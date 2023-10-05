import { redirect } from "next/navigation";
import { ChangeQuantity } from "./ChangeQuantity";
import { RemoveButton } from "./RemoveButton";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";

const Cart = async () => {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	const total = cart.orderItems.reduce(
		(acc, item) => acc + item.quantity * item.product.price,
		0,
	);

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>

			<table cellPadding={5} className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td className="w-40 px-8">
										<ChangeQuantity
											itemId={item.id}
											quantity={item.quantity}
										/>
									</td>
									<td>{formatMoney(item.product.price / 100)}</td>
									<td className="pl-12">
										{formatMoney(
											(item.product.price * item.quantity) / 100,
										)}
									</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={3}>Total</td>
						<td className="text-right">{formatMoney(total / 100)}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default Cart;
