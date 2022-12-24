import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import DoneItem from './DoneItem';

const DoneList = ({ data }) => (
  <div className="min-w-[500px] flex flex-col flex-wrap items-start border-gray-200 rounded-3xl border-2 p-5 mb-2.5">
    <p className="text-xl mb-5 text-gray-700 font-bold">Has Done to-do List</p>
    {data.length ? (
      data.map((item) => <DoneItem content={item} key={uuidv4()} />)
    ) : (
      <p className="text-xl leading-5 text-red-300">You didn't complete any task until now.</p>
    )}
  </div>
);

DoneList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

DoneList.defaultProps = {
  data: null,
};

export default DoneList;
