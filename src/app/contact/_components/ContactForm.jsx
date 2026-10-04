"use client";

import { Send,  User, Mail, Building2, MessageSquare, BriefcaseBusiness, LoaderCircle, } from "lucide-react";
import ContactField from "./ContactField";
import ContactStatus from "./ContactStatus";
import { SERVICE_OPTIONS, } from "../_config/contactFormConfig";
import { CONTACT_LIMITS, } from "../../../lib/contact/contactConstants";
import { useContactForm } from "../_hooks/useContactForm";
import { getInputClassName } from "../_utils/contactFormStyles";

export default function ContactForm() {
  const { formData, fieldErrors, status, isSubmitting, handleChange, handleSubmit, } = useContactForm();

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/3">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Solicita información
        </p>

        <h2 className="mt-3 font-title text-2xl font-bold sm:text-3xl">
          Cuéntanos sobre tu proyecto
        </h2>

        <p className="mt-3 leading-7 text-black/60 dark:text-white/60">
          Completa la información para conocer mejor lo que necesitas.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Honeypot */}
        <div
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">
            Sitio web
          </label>

          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Nombre */}
        <ContactField
          id="name"
          label="Nombre"
          error={
            fieldErrors.name?.[0]
          }
        >
          <div className="relative">
            <User
              aria-hidden="true"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35 dark:text-white/35"
            />

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              placeholder="Tu nombre"
              aria-invalid={
                Boolean(
                  fieldErrors.name
                )
              }
              aria-describedby={
                fieldErrors.name
                  ? "name-error"
                  : undefined
              }
              className={getInputClassName(
                Boolean( fieldErrors.name )
              )}
            />
          </div>
        </ContactField>

        {/* Email */}
        <ContactField
          id="email"
          label="Correo electrónico"
          error={ fieldErrors.email?.[0] }
        >
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35 dark:text-white/35"
            />

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={160}
              autoComplete="email"
              inputMode="email"
              placeholder="nombre@empresa.com"
              aria-invalid={ Boolean( fieldErrors.email ) }
              aria-describedby={ fieldErrors.email ? "email-error" : undefined }
              className={getInputClassName( Boolean( fieldErrors.email ) )}
            />
          </div>
        </ContactField>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Negocio */}
          <ContactField
            id="business"
            label="Empresa o negocio"
            error={ fieldErrors.business?.[0] }
          >
            <div className="relative">
              <Building2
                aria-hidden="true"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35 dark:text-white/35"
              />

              <input
                id="business"
                name="business"
                type="text"
                value={ formData.business }
                onChange={ handleChange }
                maxLength={120}
                autoComplete="organization"
                placeholder="Nombre de tu negocio"
                aria-invalid={ Boolean( fieldErrors.business ) }
                aria-describedby={ fieldErrors.business ? "business-error" : undefined }
                className={getInputClassName( Boolean( fieldErrors.business ) )}
              />
            </div>
          </ContactField>

          {/* Servicio */}
          <ContactField
            id="service"
            label="Servicio de interés"
            error={ fieldErrors.service?.[0] }
          >
            <div className="relative">
              <BriefcaseBusiness
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35 dark:text-white/35"
              />

              <select
                id="service"
                name="service"
                value={ formData.service }
                onChange={ handleChange }
                required
                aria-invalid={ Boolean( fieldErrors.service ) }
                aria-describedby={ fieldErrors.service ? "service-error" : undefined }
                className={getInputClassName( Boolean( fieldErrors.service ), "appearance-none pr-10 dark:bg-toledana-black" )}
              >
                {SERVICE_OPTIONS.map(
                  (option) => (
                    <option
                      key={ option.value || "default" }
                      value={ option.value }
                      disabled={ option.value === "" }
                    >
                      { option.label }
                    </option>
                  )
                )}
              </select>
            </div>
          </ContactField>
        </div>

        {/* Mensaje */}
        <ContactField
          id="message"
          label="¿Qué necesitas?"
          error={ fieldErrors.message?.[0] }
        >
          <div className="relative">
            <MessageSquare
              aria-hidden="true"
              className="absolute left-4 top-4 h-5 w-5 text-black/35 dark:text-white/35"
            />

            <textarea
              id="message"
              name="message"
              value={ formData.message }
              onChange={ handleChange }
              required
              minLength={20}
              maxLength={ CONTACT_LIMITS.message.max }
              rows={6}
              placeholder="Cuéntanos qué proceso quieres mejorar, automatizar o digitalizar..."
              aria-invalid={ Boolean( fieldErrors.message ) }
              aria-describedby={ fieldErrors.message ? "message-error" : "message-counter" }
              className={getInputClassName( Boolean( fieldErrors.message ), "resize-none" )}
            />
          </div>

          <div
            id="message-counter"
            className="mt-2 text-right text-xs text-black/40 dark:text-white/40"
          >
            {formData.message.length} /{CONTACT_LIMITS.message.max}
          </div>
        </ContactField>

        <ContactStatus
          status={status}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={
            isSubmitting
          }
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-toledana-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 dark:focus:ring-offset-toledana-black"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="h-5 w-5 animate-spin"
              />

              Enviando...
            </>
          ) : (
            <>
              Enviar solicitud

              <Send
                aria-hidden="true"
                className="h-5 w-5"
              />
            </>
          )}
        </button>

        <p className="text-center text-xs leading-5 text-black/45 dark:text-white/45">
          Utilizaremos la información únicamente para responder a tu solicitud.
        </p>
      </form>
    </div>
  );
}