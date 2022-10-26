// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { patientData } from "../../../src/mock/patient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const patient = patientData.find((patient) => {
    const patientName = patient.name.split(" ").join("-");
    return patientName.toLowerCase() == (name as string).toLowerCase();
  });
  res.status(200).json({ data: patient });
}
