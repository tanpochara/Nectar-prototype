// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { patientData } from "../../src/mock/patient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = patientData.map((patient) => {
    const nameSlug = patient.name.split(" ").join("-").toLowerCase();
    return nameSlug;
  });
  res.status(200).json({ data: patientData, slug });
}
