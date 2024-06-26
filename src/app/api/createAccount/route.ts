import authorizeRequest from "@/utils/authorizeRequest";
import createAccount from "@/utils/createAccount";

type ResponseData = {
  name: string;
  currency: string;
  take: number;
  totalPayoutAmount: number;
  businessUrl: string;
};

export async function POST(request: Request, response: Response) {
  try {
    const body: ResponseData = await request.json();

    await authorizeRequest(request.headers.get("authorization")?.split("Bearer ")[1].trim() || "");
    
    await createAccount({
      name: body.name,
      currency: "usd",
      take: 20,
      totalPayoutAmount: 0,
      businessUrl: body.businessUrl,
    });
  
    return Response.json({ 
      name: body.name,
      businessUrl: body.businessUrl,
    });
  } catch(error: any) {
    console.log("Error: ", error.message || error.raw.message);
    return Response.json({
      error: {
        message: error.raw ? error.raw.message : error.message
      }
    }); 
  };
};
