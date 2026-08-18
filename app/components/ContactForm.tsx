"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = encodeURIComponent(
      `¡Hola, Césped Verde! Quiero solicitar un presupuesto.\n\nNombre: ${data.get("nombre")}\nTeléfono: ${data.get("telefono")}\nZona: ${data.get("zona") || "No especificada"}\nServicio: ${data.get("servicio") || "Consulta general"}\n\nMensaje:\n${data.get("mensaje")}`,
    );
    setSent(true);
    window.open(`https://wa.me/5492634517032?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nombre y apellido
          <input name="nombre" type="text" placeholder="Tu nombre" autoComplete="name" required />
        </label>
        <label>
          Teléfono
          <input name="telefono" type="tel" placeholder="261 000 0000" autoComplete="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Zona
          <input name="zona" type="text" placeholder="Ej. Chacras de Coria" autoComplete="address-level2" />
        </label>
        <label>
          ¿Qué necesitás?
          <select name="servicio" defaultValue="">
            <option value="" disabled>Seleccioná un servicio</option>
            <option>Diseño y paisajismo</option>
            <option>Mantenimiento integral</option>
            <option>Riego automatizado</option>
            <option>Poda y cuidado</option>
            <option>Otra consulta</option>
          </select>
        </label>
      </div>
      <label>
        Contanos sobre tu espacio
        <textarea name="mensaje" rows={4} placeholder="Tamaño aproximado, estado actual y qué te gustaría lograr..." required />
      </label>
      <button className="button button-primary form-button" type="submit">
        Solicitar presupuesto
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" aria-live="polite">
        {sent ? "Abrimos WhatsApp con tu consulta preparada para enviar." : "Respondemos dentro de las próximas 24 horas hábiles."}
      </p>
    </form>
  );
}
