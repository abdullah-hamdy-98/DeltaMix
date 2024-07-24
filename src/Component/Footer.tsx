import Image from 'next/image'

function Footer() {
    return (
        <div className="container-fluid app101-general-coloredBG">
            <div className="app101-general-partners">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="app101-general-partners-title">
                            <span>شركات المجموعة</span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div className="app101-general-partners-logos">
                            <div className="app101-general-companies theme02">
                                <ul>
                                    <li><a target="" href="http://contracting.eamaraldelta.com/">
                                        <Image width={100} height={468}
                                            src="/menu_item/photo/9/eamar-moawlat.png" alt="" /></a></li>
                                    <li><a target="" href="/"><Image width={105} height={468} src="/menu_item/photo/10/delta-mix.png" alt="" /></a></li>
                                    <li><a target="" href="http://bluelight.eamaraldelta.com/"><Image width={95} height={468}
                                        src="/menu_item/photo/13/eamar-blue-light.png" alt="" /></a></li>
                                    <li><a target="" href="http://eamaraldelta.com/index"><Image width={90} height={468}
                                        src="/menu_item/photo/31/eamar-eldelta-blue.png" alt="" /></a></li>
                                    <li><a target="" href="http://eamarmix.eamaraldelta.com/"><Image width={130} height={468}
                                        src="/menu_item/photo/11/eamar-tashteb_edited.png" alt="" /></a></li>
                                    <li><a target="" href="http://ebdaa.eamaraldelta.com/"><Image width={120} height={468}
                                        src="/menu_item/photo/12/eamar-ebdaa.png" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;