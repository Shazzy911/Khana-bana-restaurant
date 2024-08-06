
import React, { useState } from 'react';
import style from "./NewLetter.module.scss";
/// Here the we have to do use React-hook-form & Zod for type safety....



const NewsLetter = () => {
    // const [email, setEmail] = useState('');
    // const [success, setSuccess] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/api/newsletter', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ email }),
    //         });
    //         if (response.ok) {
    //             setSuccess(true);
    //             setEmail('');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    return (
                    //onSubmit={handleSubmit}
        <form  className={style.container}>   
            <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
            />
            <button type="submit">Subscribe</button>
            {/* {success && <p>Thank you for subscribing!</p>} */}
        </form>


    )
}

export default NewsLetter



