import ReactLoading from 'react-loading';

const ButtonLoading = ({ loading, text, isSubmit = true, onClick }) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className='btn btn-blue w-2/4 focus:outline-none focus:ring focus:border-blue-500'
    onClick={onClick}
  >
    {loading ? (
      <div className='flex w-full justify-center'>
        <ReactLoading type='spin' color='#fff' height={30} width={30} />
      </div>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export { ButtonLoading };
