import React from 'react';

const About = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 md:mx-48 sm:w-full my-16 items-center'>
            <div>
                <h2 className='text-3xl text-purple-900 font-bold'>About Us</h2>
                <p>Welcome to the virtual wonderland of our toy shop website! As you enter our online realm, you'll be immersed in a captivating world of toys and imagination, all just a click away.

                    Our website is thoughtfully designed to replicate the enchantment of a physical toy shop. The vibrant colors, playful animations, and delightful illustrations instantly transport you to a place where dreams come true. Navigating through the pages is a breeze, with intuitive menus guiding you to the perfect toy for your child's delight.

                    We take pride in curating an extensive collection of toys that spans a multitude of interests, ages, and developmental stages. From plush companions to building blocks, from engaging puzzles to interactive games, our virtual shelves are brimming with choices that cater to every child's preferences and learning needs.

                    With detailed product descriptions, vivid images, and customer reviews, you can make informed decisions about the toys that best suit your child's desires. Our user-friendly interface allows you to effortlessly browse, compare, and add items to your virtual cart.


                    Our toy shop website is more than just an online store; it's a destination where cherished memories are made. We strive to create an engaging and delightful experience for every visitor, whether you're a child discovering the joy of toys or a parent seeking to nurture your child's happiness.

                    So, come and explore our toy shop website, where the wonders of childhood are just a click away. Let the magic unfold and embark on a journey of imagination and discovery, all from the comfort of your own home.</p>
            </div>
            <div>
                <img className='rounded' src="https://media.istockphoto.com/id/1185943155/photo/beautiful-toddler-sitting-on-the-floor-playing-with-building-blocks-toys-at-kindergarten.jpg?s=612x612&w=0&k=20&c=FJreI34oJhGcdVhnALb-58Ys0ySay61Jnr1WOPgR_bM=" alt="" />
            </div>
        </div>
    );
};

export default About;