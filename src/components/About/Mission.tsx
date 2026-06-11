import "./Mission.css";

const OurMission = () => {
  const stats = [
    { id: 1, number: "10k+", label: "Довольных клиентов" },
    { id: 2, number: "100+", label: "Туров по миру" },
    { id: 3, number: "25+", label: "Международных наград" },
    { id: 4, number: "11+", label: "Лет опыта" },
  ];

  return (
    <section className="mission-wrapper">
      <div className="container-fluid max-w-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mission-content-box">
              <h2 className="mission-title">Наша миссия</h2>
              <div className="mission-separator"></div>

              <div className="mission-text-content">
                <p className="mission-lead">
                  Мы не продаём билеты и номера. Мы возвращаем людям роскошь
                  настоящих эмоций.
                </p>
                <p>
                  Миссия <strong>VOYAGER</strong> — сделать так, чтобы каждый
                  ваш отпуск становился точкой роста, перезагрузки и
                  вдохновения. Для этого мы лично проверяем каждый отель,
                  договариваемся о закрытом доступе и строим маршруты, где нет
                  случайных мест.
                </p>
                <p>
                  Ваше время — самый ценный ресурс. Мы бережём его, чтобы вы
                  могли беззаботно смотреть на закат в Саванне или пить утренний
                  кофе с видом на фьорды.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.id}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
