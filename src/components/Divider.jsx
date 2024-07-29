import PropTypes from 'prop-types';

const Divider = (props) => {
  const { quote } = props;

  return (
    <section className="divider-section h-28 bg-neutral/80 flex justify-center items-center">
      <p className="divider-text text-sm font-light italic text-secondary text-center p-4">
        {quote}
      </p>
    </section>
  );
};

Divider.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Divider;
