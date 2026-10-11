
import { z } from "zod";

import { servicesList } from "@/data/serviceList";
import { getPlanForService } from "@/lib/services/serviceSelection";

export const CONTACT_SERVICES = [
  ...servicesList.map((service) => service.id),
  "otro",
];

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Ingresa tu nombre.").max(80, "El nombre es demasiado largo."),
    email: z.string().trim().toLowerCase().email("Ingresa un correo electrónico válido.") .max(160, "El correo electrónico es demasiado largo."),
    business: z.string().trim().max( 120,"El nombre del negocio es demasiado largo.").optional().default(""),
    service: z.string().refine((value) => CONTACT_SERVICES.includes(value),"Selecciona un servicio válido."),
    plan: z.string().max(100, "El plan seleccionado no es válido.").optional().default(""),
    message: z.string().trim().min(20,"Cuéntanos un poco más sobre lo que necesitas.").max(3000,"El mensaje no puede superar los 3000 caracteres."),
    website: z.string().max(200).optional().default(""),
  })
  .superRefine((data, context) => {
    if (!data.plan) return;

    const selectedPlan = getPlanForService( data.service, data.plan );

    if (!selectedPlan) {
      context.addIssue({
        code: "custom",
        path: ["plan"],
        message:
          "El plan no corresponde al servicio seleccionado.",
      });
    }
  });
