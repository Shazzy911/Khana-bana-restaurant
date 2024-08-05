import Link from "next/link";
import style from "./TopBar.module.scss";
import { topbar_route_links } from "@/json/route_links";
import Image from "next/image";
import Hero from "@/images/Khana-Bana.png";

const TopBar = () => {
    return (
        <header className={style.container}>
            <nav>
                <div className={style.left_nav}>
                <Link  href={'/'}>
                
                    <Image src={Hero} width={57} height={57} alt="Image not found"/>
                    <h2>Khana Bana</h2>
                </Link>

                </div>
                <div className={style.right_nav}>
                    {
                        topbar_route_links.map((item, index)=>(
                            <Link key={index} href={item.route}>{item.link}</Link>
                        ))
                    }   
                </div>
            </nav>

        </header>
    )
}

export default TopBar