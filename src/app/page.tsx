import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Component/Header'
import TopSlider from '../Component/TopSlider'
import Satation from '../Component/Sattion'
import Projects from '../Component/Projects'
import LastNews from '../Component/LastNews'
import BottomSlider from '../Component/BottomSlider'
import Footer from '../Component/Footer'

function Home() {

  return (

    <div>

      <Header></Header>
      {/*  Section : Home */}
      <TopSlider></TopSlider>
      {/* Section : Stations */}
      <Satation></Satation>
      {/* Section : Prjects */}
      <Projects></Projects>
      {/* Section : LastNews */}
      <LastNews></LastNews>
      {/* Section : BottomSlider */}
      <BottomSlider></BottomSlider>
      {/* Section : Footer */}
      <Footer></Footer>
      
    </div>
  );
}

export default Home;