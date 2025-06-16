import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-12 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div className="order-2 md:order-1 space-y-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Our Story</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Espresso Joint, we're passionate about crafting the perfect cup. Our expert baristas bring years of experience to every espresso shot, cappuccino, and cold brew we serve. We believe in quality, consistency, and creating a welcoming space for coffee lovers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every bean is carefully sourced from sustainable farms, roasted to perfection, and brewed with precision. Whether you're starting your day or taking an afternoon break, we're here to make your coffee moment special.
            </p>
          </div>
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Fresh chicken bowl with vegetables"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-w-md mx-auto"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="Barista making coffee"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
