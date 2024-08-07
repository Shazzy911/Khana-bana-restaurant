import style from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/images/Khana-Bana.png";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
import { day_time } from "@/json/day_time";
import { IoHeartSharp } from "react-icons/io5";
import NewsLetter from "../../ui/newsLetter/NewsLetter";
import { footer_route_links } from "@/json/route_links";

const Footer = () => {
    return (
        <>

            <div className={style.container}>
                <div className={style.section}>

                    <div className={` ${style.app_info} ${style.common} `}>
                        <span>
                            <Link href={'/'}>
                                <Image src={Hero} width={57} height={57} alt="Image not found" />
                                <h2>Khana Bana</h2>
                            </Link>
                        </span>
                        <p className={style.desc}>A delicious meal in a stunning setting is a recipe for delight, where every bite and every glance leaves you wanting more.</p>
                        <span className={style.social}>
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagram />

                        </span>
                    </div>
                    <div className={` ${style.day_time} ${style.common}  `}>
                        <h2>Open Hours</h2>

                        {day_time.map((item, index) => (
                            <span key={index}><p>{item.day} </p>{item.time}</span>
                        ))}
                    </div>
                    <div className={` ${style.news_letter} ${style.common}  `}>
                        <h2>Newsletter</h2>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <NewsLetter />

                    </div>
                    <div className={`${style.company_info} ${style.common}`}>
                        {footer_route_links.map((section, index) => (
                            <div key={index} className={style.common_links}>
                                <h2>{section.title}</h2>
                                {section.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link.href}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.copy_right}>
                    <p>Copyright ©2024-2025 All rights reserved | This website is made with love <IoHeartSharp /> by Dua Ali.</p>
                </div>



            </div >
        </>
    )
}

export default Footer;







{/* <div className={` ${style.company_info} && ${style.common}  `} >
                    <div className={style.common_links}>

                        <h2>Company</h2>
                        <Link href={"/about"}> About</Link>
                        <Link href={"/careers"}> Careers</Link>
                    </div>
                    <div className={style.common_links}>

                        <h2>Contact Us</h2>
                        <Link href={"/about"}> Help & Support</Link>
                        <Link href={"/careers"}> Partner with us</Link>
                    </div>
                    <div className={style.common_links}>

                        <h2>Legal</h2>
                        <Link href={"/about"}> Terms & Conditions</Link>
                        <Link href={"/careers"}> Cookie Policy</Link>
                        <Link href={"/Chefs"}> Privacy Policy</Link>
                    </div>

                </div> */}



