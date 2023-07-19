import './Footer.scss'

const Footer = () => {

    const footerMenuItems = [
        {
            id: 1,
            text: "Расчёт стоимости"
        },
        {
            id: 2,
            text: "Услуги"
        },
        {
            id: 3,
            text: "Виджеты"
        },
        {
            id: 4,
            text: "Интеграции"
        },
        {
            id: 5,
            text: "Наши клиенты"
        },
        {
            id: 6,
            text: "Кейсы"
        },
        {
            id: 7,
            text: "Благодарственные письма"
        },
        {
            id: 8,
            text: "Сертификаты"
        },
        {
            id: 9,
            text: "Блог на Youtube"
        },
        {
            id: 10,
            text: "Вопрос / Ответ"
        },
    ]

    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div className="footer__info">
                    <div className="footer__company">
                        <div className="footer__heading">О компании</div>
                        <div className="footer__companyItem">Партнёрская программа</div>
                        <div className="footer__companyItem">Вакансии</div>
                    </div>
                    <div className="footer__menu">
                        <div className="footer__heading">Меню</div>
                        {footerMenuItems.map(item => <div key={item.id} className="footer__menuText">{item.text}</div>)}
                    </div>
                </div>
                <div className="footer__contacts">
                    <div className="footer__heading">Контакты</div>
                    <div className="footer__phone">+7 555 555-55-55</div>
                    <div className="footer__socials">
                        <img src="/public/telegram.svg" alt="telegram logo" />
                        <img src="/public/viber.svg" alt="viber logo" />
                        <img src="/public/whatsapp.svg" alt="whatsapp logo" />
                    </div>
                    <div className="footer__address">Москва, Путевой проезд 3с1, к 902</div>
                    <div className="footer__copyright">©WELBEX 2022. Все права защищены.</div>
                    <div className="footer__confidentiality"><a href="/">Политика конфиденциальности</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;