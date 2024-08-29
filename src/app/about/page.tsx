import { INTEGRANTES } from '@/lib/constants';
import React from 'react';
import PersonCard from './_components/PersonCard';

function AboutPage() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Nuestro Equipo
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Conoce a los integrantes que conforman nuestro equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {INTEGRANTES.map((integrante) => (
          <PersonCard key={integrante.name} {...integrante} />
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
