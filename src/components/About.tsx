import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Manikanta Restaurant has been serving authentic Indian cuisine to our valued customers. Our commitment to quality ingredients and traditional recipes has made us a favorite dining destination in Agiripalli.
            </p>
            <p className="text-gray-600 mb-6">
              Every dish is prepared with love and care by our experienced chefs, bringing you the true flavors of India. We take pride in providing a warm and welcoming atmosphere where families and friends can gather to enjoy delicious meals together.
            </p>
            <p className="text-gray-600">
              Whether you're craving classic Indian dishes or want to explore new flavors, our diverse menu has something for everyone. Come experience the magic of Indian cuisine at Manikanta Restaurant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;