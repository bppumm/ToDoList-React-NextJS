import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';

const TaskList = ({ data, handleDelete, handleCheck }) => (
  <div className="min-w-[500px] flex flex-col flex-wrap items-center content-start border-gray-200 rounded-3xl border-2 p-5 mb-2.5">
    <p className="text-xl mb-5 text-gray-700 font-bold self-start">Enter to-do item</p>
    {data.length ? (
      data.map((item, index) => (
        <TaskItem
          content={item}
          key={uuidv4()}
          id={index}
          onDelete={handleDelete}
          onCheck={handleCheck}
        />
      ))
    ) : (
      <p className="text-xl leading-5 text-red-300">No more task...</p>
    )}
  </div>
);

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleDelete: PropTypes.func,
  handleCheck: PropTypes.func,
};

TaskList.defaultProps = {
  data: null,
  handleDelete: () => {},
  handleCheck: () => {},
};

export default TaskList;
