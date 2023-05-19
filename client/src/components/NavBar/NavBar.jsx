import s from './NavBar.module.css'

const NavBar = () => {

    return (
        <>
            <div className={s.navbar}>
                <div
                data-collapse="none"
                data-animation="default"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                data-doc-height="1"
                role="banner"
                class="navbar-websc w-nav"
                className={s.navbar}
                >
                    <div className={s.container2}>
                        <a
                        aria-current="page"
                        className={s.logolink}
                        >
                        <img
                            src="https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/62c71a12cebab1236804399d_LOGO.rojoynegro.png"
                            loading="eager"
                            width="343"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 40vw, (max-width: 991px) 23vw, 15vw"
                            alt="Logo SportClub"
                            srcset="https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/62c71a12cebab1236804399d_LOGO.rojoynegro-p-500.png 500w, https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/62c71a12cebab1236804399d_LOGO.rojoynegro.png 792w"
                            class="logo-3"
                        />
                        </a>
                        <nav role="navigation" class="navigation-menu-websc w-nav-menu">
                        <a class="navigation-link-websc w-nav-link">
                            Conocé las sedes
                        </a>
                        <a
                            target="_blank"
                            class="navigation-link-websc w-nav-link"
                        >
                            Beneficios
                        </a>
                        <a
                            className={s.asociate}
                        >
                            Asociate
                        </a>
                       
                        </nav>
                        <div class="navigation-wrapper-websc">
                        <div
                            class="menu-button-websc w-nav-button"
                            aria-label="menu"
                            role="button"
                            tabindex="0"
                            aria-controls="w-nav-overlay-0"
                            aria-haspopup="menu"
                            aria-expanded="false"
                        >
                            <div class="w-icon-nav-menu"></div>
                        </div>
                        </div>
                    </div>
                    <div
                        class="w-nav-overlay"
                        data-wf-ignore=""
                        id="w-nav-overlay-0"
                    ></div>
                </div>
            </div>
        </>
    )
}

export default NavBar