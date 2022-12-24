import Image from 'next/image';
import PropTypes from 'prop-types';

const DoneItem = ({ content }) => (
  <div className="w-full bg-gray-100 rounded-full px-4 py-2.5 flex items-center justify-start mb-5 last:m-0">
    <span className="w-5 h-5">
      <Image src="/assets/image/check.png" layout="responsive" width="100%" height="100%" />
    </span>
    <p className="text-xl leading-5 text-gray-700 ml-2.5">{content && content}</p>
  </div>
);

DoneItem.propTypes = {
  content: PropTypes.string,
};

DoneItem.defaultProps = {
  content: null,
};

export default DoneItem;
