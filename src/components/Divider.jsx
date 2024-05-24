import PropTypes from 'prop-types';

const Divider = (props) => {
  const { quote } = props;

  return (
    <section className="divider-section h-12 bg-neutral/80 flex justify-center items-center">
      <p className="divider-text text-sm font-light italic text-secondary text-center">
        {quote}
      </p>
    </section>
  );
};

Divider.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Divider;
