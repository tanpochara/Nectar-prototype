import { patientData } from "../mock/patient";

export const getAllPatient = async () => {
  const slug = patientData.map((patient) => {
    const nameSlug = patient.name.split(" ").join("-").toLowerCase();
    return nameSlug;
  });

  return { data: patientData, slug };
};

export const getPatient = async (name: string) => {
  const patient = patientData.find((patient) => {
    const patientName = patient.name.split(" ").join("-");
    return patientName.toLowerCase() == name.toLowerCase();
  });

  return { data: patient };
};
