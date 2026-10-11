
"use client";

import { useCallback, useEffect, useRef, useState, } from "react";
import { INITIAL_FORM_DATA, INITIAL_FORM_STATUS, } from "../_config/contactFormConfig";
import { ContactRequestError, sendContactRequest, } from "../_services/contactApi";
import { getServiceById, getPlanForService, } from "@/lib/services/serviceSelection";

function getInitialSelection() {
  if (typeof window === "undefined") {
    return { service: "", plan: "" };
  }

  const params = new URLSearchParams( window.location.search );

  const serviceId = params.get("servicio") ?? "";
  const planId = params.get("plan") ?? "";

  const service = getServiceById(serviceId);

  if (!service) {
    return { service: "", plan: "" };
  }

  const selectedPlan = getPlanForService(
    serviceId,
    planId
  );

  return {
    service: service.id,
    plan: selectedPlan?.planId ?? "",
  };
}

export function useContactForm() {
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  });

  const [status, setStatus] = useState({
    ...INITIAL_FORM_STATUS,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const submittingRef = useRef(false);

  const isSubmitting = status.type === "loading";

  
    useEffect(() => {
     const selection = getInitialSelection();
     const selectedPlan = getPlanForService( selection.service, selection.plan );

       setFormData((current) => ({
          ...current,
          service: selection.service,
          plan: selection.plan,
          message: selectedPlan
          ? `Deseo solicitar el plan ${selectedPlan.planName} del servicio ${selectedPlan.serviceName}. Solicito información sobre los pasos para formalizar la contratación y confirmar los requisitos del proyecto.`
          : current.message,
         }));
    }, []);


  const clearFieldError = useCallback((fieldName) => {
    setFieldErrors((current) => {
      if (!current[fieldName]) return current;

      const nextErrors = { ...current };
      delete nextErrors[fieldName];

      return nextErrors;
    });
  }, []);

  const clearStatus = useCallback(() => {
    setStatus((current) =>
      current.type === "idle"
        ? current
        : { ...INITIAL_FORM_STATUS }
    );
  }, []);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormData((current) => ({
        ...current,
        [name]: value,
        ...(name === "service" ? { plan: "" } : {}),
      }));

      clearFieldError(name);

      if (name === "service") {
        clearFieldError("plan");
      }

      clearStatus();
    },
    [clearFieldError, clearStatus]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (submittingRef.current) return;

      submittingRef.current = true;

      setFieldErrors({});
      setStatus({
        type: "loading",
        message: "Enviando solicitud...",
      });

      try {
        const response = await sendContactRequest(
          formData
        );

         setFormData((current) => ({
            ...INITIAL_FORM_DATA,
            service: current.service,
            plan: current.plan,
            message: current.plan ? current.message : "",
          }));

        setStatus({
          type: "success",
          message:
            response.message ??
            "Tu solicitud fue enviada correctamente.",
        });
      } catch (error) {
        if (error instanceof ContactRequestError) {
          setFieldErrors(error.fieldErrors ?? {});

          setStatus({
            type: "error",
            message: error.message,
          });
        } else {
          setStatus({
            type: "error",
            message:
              "Ocurrió un error inesperado. Intenta nuevamente.",
          });
        }
      } finally {
        submittingRef.current = false;
      }
    },
    [formData]
  );

  const selectedPlan = getPlanForService(
    formData.service,
    formData.plan
  );

  return {
    formData,
    fieldErrors,
    status,
    isSubmitting,
    selectedPlan,
    handleChange,
    handleSubmit,
  };
}
