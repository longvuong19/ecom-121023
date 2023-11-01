"use client";

import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import CardItem from "@/components/CardItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();

  return (
    <Container>
      {productData.length > 0 ? (
        <Container>
          <h2 className="text-2xl font-semibold mb-2"> Your Cart</h2>
          <div className="flex flex-col gap-5">
            <CardItem />
            <div className="flex items-center justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 text-base font-semibold text-slate-100 px-6 py-2 hover:bg-red-700 hover:text-white duration-200"
              >
                Reset Cart
              </button>
            </div>

            {/* Payment Section */}
            <PaymentForm />
          </div>
        </Container>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-orange-600 w-full p-2 text-center">
            Your cart is currently empty.
          </p>
          <Link href={`/`}>
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
              Return to shop now!
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
