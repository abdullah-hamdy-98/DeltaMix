import NavBar from './NavBar'
import Link from 'next/link';


function Header() {
  return (
    <div>

      {/* Section 1 Companies Logo*/}
      <div className="container-fluid app101-general-hr">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <div className="app101-general-companies theme01">
              <ul>
                <li><a target="_blank" href="http://contracting.eamaraldelta.com/">
                  <img src="/menu_item/photo/9/eamar-moawlat.png" alt="" /></a></li>
                <li><Link target="_self" href="/">
                  <img src="/menu_item/photo/10/delta-mix.png" alt="" /></Link></li>
                <li><a target="_blank" href="http://bluelight.eamaraldelta.com/">
                  <img src="/menu_item/photo/13/eamar-blue-light.png" alt="" /></a></li>
                <li><a target="_blank" href="http://eamaraldelta.com/index">
                  <img src="/menu_item/photo/31/eamar-eldelta-blue.png" alt="" /></a></li>
                <li><a target="_blank" href="http://eamarmix.eamaraldelta.com/">
                  <img src="/menu_item/photo/11/eamar-tashteb_edited.png" alt="" /></a></li>
                <li><a target="_blank" href="http://ebdaa.eamaraldelta.com/">
                  <img src="/menu_item/photo/12/eamar-ebdaa.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="app101-general-social">
              <ul>
                <li><a target="_blank" href="#" title="تويتر"><i className="fa fa-twitter"></i></a></li>
                <li><a target="_blank" href="#" title="لينكد إن"><i className="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/DeltaMix.EamarAlDelta/" title="فيسبوك"><i
                  className="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 HeroSection*/}
      <div className="container app101-general-hr">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="app101-general-logo">
              <Link href="/"><img src="/data/images/companies/delta-mix.png" alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 - NavBar */}
      <NavBar></NavBar>

    </div>
  );
}

export default Header;