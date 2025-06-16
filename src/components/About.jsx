import React from 'react';
import { useContent } from '../hooks/useContent';

export default function About() {
  const { content, loading, error } = useContent('/content/about.json');

  if (loading) return <div className="pt-12 pb-20 bg-gray-50 flex items-center justify-center min-h-[400px]"><div>Loading...</div></div>;
  if (error) return <div className="pt-12 pb-20 bg-gray-50 flex items-center justify-center min-h-[400px]"><div>Error loading content</div></div>;

  return (
    <section id="about" className="pt-12 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div className="order-2 md:order-1 space-y-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">{content?.title}</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {content?.paragraph1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content?.paragraph2}
            </p>
          </div>
          <div className="mt-8">
            <img
              src={content?.secondaryImage || "https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
              alt="Fresh chicken bowl with vegetables"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-w-md mx-auto"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={content?.mainImage || "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            alt="Barista making coffee"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}