import Header from "../components/Header.jsx";
import Info from "../components/Info.jsx";
import {Link} from 'react-router-dom';

const EmployeePage = ({ employee }) => {
  return (
    <div className="epage">
      <Link to='/'>
        <Header header="Employee" />
      </Link>
      
      <Info  employee ={ employee }/>
    </div>
  );
};

export default EmployeePage;
