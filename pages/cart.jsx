import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Cantidad: {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-bold">
                    S/ {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm"
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-2xl font-bold">Total: S/ {total}</p>
            <button className="mt-4 bg-green-700 text-white px-6 py-3 rounded">
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </main>
  );
}
