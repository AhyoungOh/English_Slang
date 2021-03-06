import './style.scss';
function Input({ title, setValue, inputType = 'text' }) {
  return (
    <div className="input-wrapper">
      <div>{title} : </div>
      <input type={inputType} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default Input;
