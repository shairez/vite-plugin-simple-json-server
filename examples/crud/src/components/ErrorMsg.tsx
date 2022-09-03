type Props = {
  open: boolean;
  onClose: () => void;
  error: string;
};

const ErrorMsg = ({ open, onClose, error }: Props) => {
  const onCloseClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div className={`modal${open ? ' modal-open' : ''}`}>
      <div className="modal-box alert alert-error shadow-lg flex flex-col items-center justify-center">
        <h3 className="font-bold text-lg">Error</h3>
        <p className="py-4">{error}</p>
        <button type="button" className="btn w-fit" onClick={onCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorMsg;
