
import { useState, useEffect } from 'react';

export default function AsistenteWashAndFlow() {
  const [fase, setFase] = useState('inicio');
  const [franquicias, setFranquicias] = useState([]);

  useEffect(() => {
    fetch('/franquicias_lavanderias.json')
      .then((res) => res.json())
      .then((data) => setFranquicias(data));
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <img src="/logo.png" alt="Wash and Flow logo" style={{ maxWidth: '180px', margin: '0 auto' }} />
      <h2 className="text-xl font-bold text-center">WASH AND FLOW</h2>
      {fase === 'inicio' && (
        <div className="space-y-2">
          <button onClick={() => setFase('descubre')} className="w-full bg-blue-500 text-white p-2 rounded">Descúbrela</button>
          <button onClick={() => setFase('comparar')} className="w-full bg-blue-500 text-white p-2 rounded">Comparar marcas</button>
          <button onClick={() => setFase('faq')} className="w-full bg-blue-500 text-white p-2 rounded">Preguntas frecuentes</button>
        </div>
      )}
      {fase === 'descubre' && (
        <p>Cuéntame tu presupuesto, tipo de ubicación y si buscas una marca con diseño, marketing y apoyo total...</p>
      )}
      {fase === 'comparar' && (
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {franquicias.map((f) => (
            <li key={f.nombre}><strong>{f.nombre}:</strong> inversión desde {f.inversion_minima.toLocaleString()} €, retorno: {f.retorno_estimado}</li>
          ))}
        </ul>
      )}
      {fase === 'faq' && (
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>¿Puedo gestionar la lavandería sin estar presente? ✅</li>
          <li>¿Wash and Flow me ayuda con el marketing? Sí, ¡y mucho!</li>
          <li>¿Qué inversión necesito? Desde 80.000 €, financiable.</li>
        </ul>
      )}
      <div className="text-center pt-4">
        <button onClick={() => setFase('inicio')} className="text-blue-600 underline">Volver</button>
      </div>
    </div>
  );
}
