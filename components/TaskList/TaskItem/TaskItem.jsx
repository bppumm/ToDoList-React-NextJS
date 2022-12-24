import Image from 'next/image';
import PropTypes from 'prop-types';

const TaskItem = ({ content, id, onDelete, onCheck }) => (
  <div className="w-full bg-gray-200 rounded-full p-2.5 flex items-center justify-between mb-5 last:m-0 hover:bg-blue-100">
    <label className="block w-[calc(100%_-_40px)] h-5 text-xl leading-5 text-gray-700 truncate cursor-pointer">
      <input
        type="checkbox"
        className="w-5 h-5 mx-3 align-top"
        id={id}
        onChange={(e) => onCheck(e.currentTarget.id)}
      />
      {content && content}
    </label>
    <button
      className="w-8 h-8 bg-blue-400 rounded-full p-[6px]"
      id={id}
      onClick={(e) => onDelete(e.currentTarget.id)}
    >
      <Image src="/assets/image/delete.png" layout="responsive" width="100%" height="100%" />
    </button>
  </div>
);

TaskItem.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
  onCheck: PropTypes.func,
};

TaskItem.defaultProps = {
  content: null,
  id: null,
  onDelete: () => {},
  onCheck: () => {},
};

export default TaskItem;
