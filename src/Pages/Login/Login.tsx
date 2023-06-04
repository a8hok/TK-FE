import Loginfooter from '../../Components/Login/LoginFooter';
import LoginContainer from '../../Components/Login/LoginContainer';
function Home() {
  return (
    <div className="flex flex-col w-screen">
      <LoginContainer />
      <Loginfooter />
    </div>
  );
}

export default Home;
