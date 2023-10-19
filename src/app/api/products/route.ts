import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products has been loaded.",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong while we tried to load the products.",
      },
      { status: 500 }
    );
  }
};
