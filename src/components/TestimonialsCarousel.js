import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    id: 1,
    title: "Off Sleep Meds After 15 Years",
    text: "After 15 years on sleep medication, I'm now completely off of it. I'm sleeping through the night, and my dream life has returned.",
    author: "Nora"
  },
  {
    id: 2,
    title: "Retinopathy Completely Healed",
    text: "My eye doctor said diabetic retinopathy 'never goes away'—but mine is now completely gone. He said, whatever I'm doing with Gold Health, keep it up!",
    author: "Sara"
  },
  {
    id: 3,
    title: "Prevented Hysterectomy",
    text: "I was told I needed immediate organ-removal surgery. After following the right testing guidance from Gold Health, doctors found the true root cause—and no longer recommended surgery.",
    author: "Sarah"
  },
  {
    id: 4,
    title: "Lost 30 Pounds + Life Transformation",
    text: "I'm down 30 pounds and still losing. My energy is way up, pain almost gone, sleep restored, and I've come off one of my medications—with my doctor's approval.",
    author: "Doug"
  },
  {
    id: 5,
    title: "Anxiety Gone + 15 lbs Lost",
    text: "I lost 15 pounds, my sleep improved, my energy increased, and my anxiety is completely gone.",
    author: "Nick"
  },
  {
    id: 6,
    title: "Chronic Conditions Reversed",
    text: "I reduced my insulin injections by 50%, my energy is back, and I'm managing my blood sugar through food, exercise, and prayer. I haven't felt this good in years.",
    author: "Anonymous"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // 10 second pause

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-carousel">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <h3 className="testimonial-title">{testimonial.title}</h3>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        ))}
      </div>
      
      <div className="testimonials-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

