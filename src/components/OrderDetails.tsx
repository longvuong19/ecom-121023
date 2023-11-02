"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import Link from "next/link";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state: StateProps) => state?.shopping);
  //   console.log(orderData);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;

    orderData?.order?.map((item: Products) => {
      amount += item.price * item.quantity;
      return;
    });
    setTotalAmount(amount);
  }, [orderData.order]);

  return (
    <div>
      {orderData?.order?.length > 0 ? (
        <div>
          <div className="grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-b-gray-300">
            <p className="col-span-4">Items</p>
            <p className="flex items-center justify-center">Quantity</p>
            <p className="flex items-center justify-center">Unit Price</p>
            <p className="flex items-center justify-center">Total</p>
          </div>
          <div className="py-2 flex flex-col gap-2 justify-center">
            {orderData?.order?.map((item: Products) => (
              <div
                key={item?._id}
                className="py-2 border-b-[1px] border-gray-300 grid grid-cols-7 items-center"
              >
                <div className="col-span-4 flex items-start gap-2 text-sm">
                  <Image
                    src={item?.image}
                    alt="product image"
                    width={500}
                    height={500}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="">
                    <h3 className="text-base font-semibold mb-.5">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                  </div>
                </div>

                <p className="flex items-center justify-center">
                  {item?.quantity}
                </p>

                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price} />
                </p>

                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price * item?.quantity} />
                </p>
              </div>
            ))}
          </div>
          <div className="text-lg font-medium p-2 border-b-[1px] border-b-gray-300">
            <p>Payment Details</p>
          </div>
          <p className="text-xl font-semibold mt-2 p-2">
            Total Paid:{" "}
            <span>
              <FormattedPrice amount={totalAmount} />
            </span>
          </p>
          <button
            onClick={() => dispatch(resetOrder())}
            className="mt-5 border-[1px] border-gray-500 py-1 px-4 font-medium rounded-md hover:border-orange-500 cursor-pointer duration-200"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className="py-10 bg-white text-black text-2xl text-center">
          <p>Nothing in your Cart</p>
          <Link href={`/`}>
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-600 mt-4">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
