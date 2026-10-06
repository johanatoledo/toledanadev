"use client";

import { useCallback, useState } from "react";
import { INITIAL_FORM_DATA, INITIAL_FORM_STATUS, } from "../_config/contactFormConfig";
import { ContactRequestError, sendContactRequest, } from "../_services/contactApi";

export function useContactForm() {
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA, });
  const [status, setStatus] = useState({ ...INITIAL_FORM_STATUS, });
  const [fieldErrors, setFieldErrors] = useState({});
  const isSubmitting = status.type === "loading";

  const clearFieldError = useCallback((fieldName) => {
    setFieldErrors((current) => {
      if (!current[fieldName]) {
        return current;
      }

      const nextErrors = {
        ...current,
      };

      delete nextErrors[fieldName];

      return nextErrors;
    });
  }, []);

  const clearStatus = useCallback(() => {
    setStatus((current) => {
      if (current.type === "idle") {
        return current;
      }

      return {
        ...INITIAL_FORM_STATUS,
      };
    });
  }, []);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormData((current) => ({
        ...current,
        [name]: value,
      }));

      clearFieldError(name);
      clearStatus();
    },
    [clearFieldError, clearStatus]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setFieldErrors({});

      setStatus({
        type: "loading",
        message: "Enviando solicitud...",
      });

      try {
        const response = await sendContactRequest(formData);

        setFormData({
          ...INITIAL_FORM_DATA,
        });

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

          return;
        }

        setStatus({
          type: "error",

          message:
            "Ocurrió un error inesperado. Intenta nuevamente.",
        });
      }
    },
    [formData, isSubmitting]
  );

  return {
    formData,
    fieldErrors,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}