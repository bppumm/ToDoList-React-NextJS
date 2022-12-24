import { useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const TaskInput = ({ handleClick }) => {
  const inputRef = useRef();
  const clickHandler = () => {
    if (!inputRef?.current.value) return;
    handleClick(inputRef?.current.value);
    inputRef.current.value = '';
  };
  return (
    <div className="w-full mb-2.5 border-2 border-gray-200 rounded-3xl p-4">
      <p className="text-xl mb-5 text-gray-700 font-bold">Enter to-do item</p>
      <input
        type="text"
        placeholder="Please Enter Text"
        className="bg-blue-100 w-[calc(100%_-_40px)] rounded-3xl leading-5 text-gray-800 text-xl px-4 py-2"
        ref={inputRef}
      />
      <button
        type="button"
        className="w-8 h-8 bg-blue-400 rounded-full p-2 ml-2 rotate-[-90deg]"
        onClick={clickHandler}
      >
        <Image src="/assets/image/arrow.png" layout="responsive" width="100%" height="100%" />
      </button>
    </div>
  );
};

TaskInput.propTypes = {
  handleClick: PropTypes.func,
};

TaskInput.defaultProps = {
  handleClick: () => {},
};

export default TaskInput;
