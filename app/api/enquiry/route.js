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


// import { NextResponse } from 'next/server';
// import connectMongo from "@/utils/connectMongo";
// import enquiryModel from "@/models/enquiryModel";

// export async function POST(request) {
//   try {
//     // Connect to MongoDB
//     await connectMongoDB();

//     // Parse the request body
//     const { name, email, message } = await request.json();

//     // Validate input
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'Name, email, and message are required fields' },
//         { status: 400 }
//       );
//     }

//     // Create new enquiry
//     const newEnquiry = await Enquiry.create({ name, email, message });

//     return NextResponse.json(
//       { message: 'Enquiry created successfully', enquiry: newEnquiry },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Error in POST /api/enquiry:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: error.message },
//       { status: 500 }
//     );
//   }
// }