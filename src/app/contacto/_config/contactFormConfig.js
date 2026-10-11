
import { servicesList } from "@/data/serviceList";

export const SERVICE_OPTIONS = [
  {
    value: "",
    label: "Selecciona un servicio",
  },
  ...servicesList.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  {
    value: "otro",
    label: "Otro proyecto",
  },
];

export const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  business: "",
  service: "",
  plan: "",
  message: "",
  website: "",
};

export const INITIAL_FORM_STATUS = {
  type: "idle",
  message: "",
};
