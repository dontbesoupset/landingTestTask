import './Header.scss'

const Header = () => {

    const headerNavItems = [
        {   id: 1,
            name: "Услуги"},
        {   id: 2,
            name: "Виджеты"},
        {   id: 3,
            name: "Интеграции",},
        {
            id: 4,
            name: "Кейсы"
        },
        {
            id: 5,
            name: "Сертификаты"
        }]

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <div className="header__logoImage">
                        <img src="public\logo_welbex.svg" alt="weblex logo" />
                    </div>
                    <div className="header__logoText">
                        крупный интегратор CRM в Росcии и ещё 8 странах
                    </div>
                </div>

                <nav className="header__nav">
                    {headerNavItems.map(item => <div key={item.id} className="header__navItem">{item.name}</div>)}
                </nav>

                <div className="header__contacts">
                    <div className="header__phone">+7 555 555-55-55</div>
                    <div className="header__icons">
                        <img src="public\telegram.svg" alt="telegram logo" />
                        <img src="public\viber.svg" alt="viber logo" />
                        <img src="public\whatsapp.svg" alt="whatsapp logo" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;