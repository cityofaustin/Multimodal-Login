// NOTE: this is not being used, using the express route
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import axios from "axios";
import { NextResponse as NextRes } from "next/server";

const NextResponse = NextRes.default;

export async function GET() {
  try {
    const url = `${process.env.BACKEND_URI}/admin/app-settings`;
    const init = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios({ url, ...init });
    const appSettings = response.data.map((a) => {
      return {
        settingName: a.settingName,
        settingValue: a.settingValue,
      };
    });
    return NextResponse.json(appSettings);
  } catch (err) {
    console.error(err.stack);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
