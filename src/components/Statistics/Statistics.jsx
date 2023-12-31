import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpers/getRandomHexColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statistics.map(({ id, label, percentage }) => {
          const backgroundColor = getRandomHexColor();
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: backgroundColor }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
