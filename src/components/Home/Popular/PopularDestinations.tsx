import PopularGrid from "./PopularGrid";
import { destinations } from "../../../data/destinations";

export default function PopularDestinations() {
  return (
    <section className="popular-section">
      <div className="container">
        <div className="popular-header">
          <h2>Популярные направления</h2>

          <p>Исследуйте самые желанные места на планете</p>
        </div>

        <PopularGrid destinations={destinations} />
      </div>
    </section>
  );
}
