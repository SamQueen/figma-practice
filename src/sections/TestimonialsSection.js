import React from 'react'
import Test1 from '../assets/test1.png';
import Test2 from '../assets/test2.png';
import Test3 from '../assets/test3.png';
import Test4 from '../assets/test4.png';
import Testimonial from '../components/Testimonial'

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rayhan Curran",
            quote: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
            image: Test1,
        },
        {
            name: "Kayley Frame",
            quote: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
            image: Test2,
        },
        {
            name: "Gene Whitfield",
            quote: "The most important part of the Startup Framework is the samples",
            image: Test3,
        },
        {
            name: "Allan Kim",
            quote: "I’ve built my website with Startup just in one day, and it was ready-to-go. ",
            image: Test4,
        },
    ]

    return (
        <div className='bg-[#261360] md:px-20 py-20'>
            <h1 className='text-white max-w-[1000px] mx-auto text-left mb-5 pl-5 md:pl-0'>Our Happy Clients</h1>

            <div className='lg:flex lg:flex-wrap max-w-[1000px] mx-auto'>
                {testimonials.map((testimonial, index) => (
                    <Testimonial index={index} name={testimonial.name} quote={testimonial.quote} image={testimonial.image}/>
                ))}
            </div>

        </div>
    )
}

export default TestimonialsSection