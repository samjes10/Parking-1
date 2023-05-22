import './styles/Header.css'
export default function Header({children}) {
  return (
    <div>
      <div className="container-header">
        <h3 className='tc-white pe-4'>hola, username</h3>
      </div>
      {children}
    </div>
  );
}
