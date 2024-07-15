import connectMongo from "@/utils/connectMongo";
import enquiryModel from "@/models/enquiryModel";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const enquiry = { name, email, message };
    await connectMongo();
    await enquiryModel.create(enquiry);
    return Response.json({ message: "Enquiry been sent" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error._message });
  }
}
