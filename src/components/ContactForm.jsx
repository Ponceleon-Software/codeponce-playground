import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', newsletter: true })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const err = {}
    if (form.name.trim().length < 2) err.name = 'El nombre debe tener al menos 2 caracteres'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) err.email = 'Ingresá un correo válido'
    if (form.message.trim().length < 10) err.message = 'El mensaje debe tener al menos 10 caracteres'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setForm({ name: '', email: '', phone: '', subject: '', message: '', newsletter: true })
    }
  }

  const inputClass = (field) =>
    `w-full p-2 border rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all ${
      errors[field] ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
    } bg-white dark:bg-gray-800 dark:text-white`

  return (
    <section id="contact" className="py-16 px-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contactanos</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-6">
          <legend className="font-bold text-lg px-2 dark:text-white">Datos personales</legend>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-sm mb-1 dark:text-gray-300">Nombre completo:</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass('name')} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-sm mb-1 dark:text-gray-300">Correo electrónico:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" className={inputClass('email')} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium text-sm mb-1 dark:text-gray-300">Teléfono (opcional):</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+54 11 1234-5678" className={inputClass('phone')} />
          </div>
        </fieldset>
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-6">
          <legend className="font-bold text-lg px-2 dark:text-white">Mensaje</legend>
          <div className="mb-4">
            <label htmlFor="subject" className="block font-medium text-sm mb-1 dark:text-gray-300">Asunto:</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass('subject')}>
              <option value="">Seleccioná un asunto</option>
              <option value="consulta">Consulta general</option>
              <option value="soporte">Soporte técnico</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-sm mb-1 dark:text-gray-300">Mensaje:</label>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} placeholder="Escribí tu mensaje..." className={inputClass('message')}></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <div>
            <label className="text-sm dark:text-gray-300">
              <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} className="mr-1" />
              Quiero recibir novedades por correo
            </label>
          </div>
        </fieldset>
        <button type="submit" className={`w-full py-3 font-semibold text-lg rounded-lg transition-all ${submitted ? 'bg-green-500 text-white' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}>
          {submitted ? '✓ Mensaje enviado' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  )
}
