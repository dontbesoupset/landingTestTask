import './Main.scss'

const Main = () => {

    const mainService = [
        {
            id: 1,
            heding: 'Виджеты',
            text: '30 готовых xрешений'
        },
        {
            id: 2,
            heding: 'Dashboard',
            text: 'с показателями вашего бизнеса'
        },
        {
            id: 3,
            heding: 'Skype Аудит',
            text: 'отдела продаж и CRM системы'
        },
        {
            id: 4,
            heding: '35 дней',
            text: 'использования CRM'
        },
    ]

    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="main__headings">
                    <h1 className="main__heading">Зарабатывайте больше<span> с WELBEX</span></h1>
                    <p className="main__headingLower">Развиваем и контролируем продажи за вас</p>
                </div>
                
                <div className="main__info">
                    <div className="main__infoHeading">
                        Вместе с <span>бесплатной консультацией</span> мы дарим:
                    </div>
                    <div className="main__services">

                        {mainService.map(s => (
                            <div key={s.id} className="main__service">
                                <div className="main__serviceHeading">{s.heding}</div>
                                <div className="main__serviceText">{s.text}</div>
                            </div>
                            
                        ))}

                    </div>

                    <button className="main__consult">Получить консультацию</button>
                </div>
            </div>
        </div>
    )
}

export default Main;