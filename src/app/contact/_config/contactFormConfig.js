export const SERVICE_OPTIONS = [
  { value: "", label: "Selecciona un servicio", },
  { value: "desarrollo-web",  label: "Desarrollo Web",},
  { value: "software-medida", label: "Software a Medida",},
  { value: "aplicaciones-web", label: "Aplicaciones Web", },
  { value: "comercio-electronico", label: "Comercio Electrónico",},
  { value: "soluciones-digitales", label: "Soluciones Digitales",},
  { value: "automatizacion-ia", label: "Automatización e IA",},
  { value: "otro", label: "Otro proyecto",},
];

export const INITIAL_FORM_DATA = {  name: "",
  email: "",
  business: "",
  service: "",
  message: "",
  website: "",
};

export const INITIAL_FORM_STATUS = { type: "idle", message: "",};