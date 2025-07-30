'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [telefone, setTelefone] = useState('');

  const formatarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);

    if (numeros.length <= 2) {
      return `(${numeros}`;
    } else if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    } else if (numeros.length <= 10) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    } else {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 bg-igblue text-white p-32 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8">Entre em contato</h2>

        <div className="space-y-8">
          <div>
            <p className="text-lg">R. Hercílio Nunes, 101 - Vila Nova Alvorada</p>
            <p className="text-lg">Imbituba - SC</p>
          </div>

          <div>
            <p className="text-lg">(48) 99668-6017</p>
            <p className="text-lg">contanto@igdafamilia.org</p>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 bg-gray-100 p-12 flex flex-col justify-center">
        <form className="space-y-2 max-w-xl mx-auto w-full">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm">
                Nome <span className="text-emerald-700">*</span>
              </label>
              <input required id="firstName" type="text" className="mt-1 border-emerald-700 border-2 rounded-none bg-white" />
            </div>
            <div>
              <label  htmlFor="phone" className="text-sm">
                Telefone <span className="text-emerald-700">*</span>
              </label>
              <input
                value={telefone}
                onChange={handleChange}
                placeholder="(48) 91234-5678"
                required
                id="phone"
                maxLength={15}
                type="tel"
                className="mt-1 border-emerald-700 border-2 rounded-none bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 border-emerald-700 border-2 rounded-none bg-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              maxLength={250}
              className="mt-1 border-emerald-700 border-2 rounded-none bg-white resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-3 text-base font-normal shadow-[0_5px_0_rgba(204,235,150,0.9)]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}