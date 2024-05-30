// src/app/actualite/page.tsx
import React, { useState, useEffect } from 'react';

const Actualite: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">🗺️ Cartographie nationale des lieux d'inclusion numérique 🗺️</h1>
      <p>{message}</p>
      <p>
        Connaissez-vous la Cartographie nationale des lieux d'inclusion numérique ? 🗺️
      </p>
      <p>
        La Carto est une plateforme qui recense plus de 18 000 lieux d'inclusion numérique !
      </p>
      <p>
        Et ce n'est pas tout : la Carto facilite l'orientation des individus en difficulté avec le numérique vers des structures adaptées à leurs besoins spécifiques. 🧭
      </p>
      <p>
        Il vous suffit de spécifier les besoins de la personne et d’indiquer une zone géographique : la Carto vous fournira une liste précise des structures correspondantes !
      </p>
      <a href="https://lnkd.in/etb4iKtf" className="btn btn-primary mb-4" target="_blank" rel="noopener noreferrer">
        ➡️ Pour découvrir la Carto et ses fonctionnalités, rendez-vous ici
      </a>
      <div className="mb-3">
        <label htmlFor="needs" className="form-label">Besoins spécifiques :</label>
        <input type="text" className="form-control" id="needs" placeholder="Ex: Assistance informatique, accès internet" />
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Zone géographique :</label>
        <input type="text" className="form-control" id="location" placeholder="Ex: Paris, Lyon, Marseille" />
      </div>
      <button className="btn btn-primary mb-3">Rechercher</button>
    </div>
  );
};

export default Actualite;
