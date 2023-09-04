import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sirapob Lueangprasert",
    studentId: "650612102",
  });
};
