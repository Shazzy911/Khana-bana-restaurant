import Link from "next/link";
import style from "./TopBar.module.scss";
import { topbar_route_links } from "@/json/route_links";


const TopBar = () => {
    return (
        <header className={style.container}>
            <nav>
                <div className={style.left_nav}>
                    <h2>Khana Bana</h2>
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