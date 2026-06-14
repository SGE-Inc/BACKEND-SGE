import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dksmqnz4r",
  api_key: "911596623387733",
  api_secret: "E_UeMy_EXqjR_lWsxGswCnUXohI",
});

async function main() {
  // 1. Upload a sample image from Cloudinary's demo domain
  const uploadResult = await cloudinary.uploader.upload(
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    { public_id: "sge-sample-onboarding" }
  );
  console.log("Uploaded image secure URL:", uploadResult.secure_url);
  console.log("Public ID:", uploadResult.public_id);

  // 2. Get image details (metadata from the upload result)
  console.log("Width:", uploadResult.width);
  console.log("Height:", uploadResult.height);
  console.log("Format:", uploadResult.format);
  console.log("File size (bytes):", uploadResult.bytes);

  // 3. Generate transformed URL with f_auto (automatic format selection)
  //    and q_auto (automatic quality optimization based on network/client)
  const transformedUrl = cloudinary.url("sge-sample-onboarding", {
    transformation: [{ f_auto: true, q_auto: "auto" }],
  });
  console.log("Transformed URL (f_auto + q_auto):", transformedUrl);
  console.log(
    "\nDone! Click link below to see optimized version of the image. Check the size and the format."
  );
  console.log(transformedUrl);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
