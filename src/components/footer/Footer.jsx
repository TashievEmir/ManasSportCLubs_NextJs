import style from './Footer.module.css'
import {manasLogo} from '../../pictures/manas_logo.png'
export default function Footer() {
    return (
        <div>
            <footer className={style.footer} style={{ display: 'flex', justifyContent:'start'}}>
                <img src='{manasLogo}' alt='manas logo'></img>
                <div className={style.footer__addr}>
                    <h1 className={style.footer__logo}>Kyrgyz-Turkish Manas University</h1>
                    <h2>Contact</h2>
                    <address>
                        720038 Ч.Айтматов кампусу, Джал, Бишкек, Кыргызстан<br />
                        <a href="info@manas.edu.kg">info@manas.edu.kg</a>
                    </address>
                </div>

                <ul className={style.footer__nav}>


                    <li className={'style.nav__item style.nav__item_extra'}>
                        <h2 class={style.nav__title}>Technology</h2>

                        <ul class={"style.nav__ul style.nav__ul_extra"}>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={style.legal}>
                    <p>&copy; 2023. All rights reserved.</p>

                    <div className={style.legal__links}>
                        <span>Made with <span class="heart">♥</span> by Emir Tashiev</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}