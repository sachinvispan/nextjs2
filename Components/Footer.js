const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="grid grid-cols-5 gap-2">
                        <div>
                            <a href="/">
                                <img src="/images/logo.png" alt="Vacayou Logo" width="159" height="35"/>
                            </a>
                        </div>
                        <div>
                            <h4>ABOUT VACAYOU</h4>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                About Us
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Careers
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Contact Us
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Terms of Use
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Privacy Policy
                            </a>
                        </div>
                        <div>
                            <h4>BECOME A PARTNER</h4>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Resorts &amp; Retreats
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Tour Providers
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Advertisers &amp; Sponsers
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Writers &amp; Influencers
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Destinations
                            </a>
                        </div>
                        <div className="travel-info">
                            <h4>TRAVELER INFORMATION</h4>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Travel Insurance
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Vacayou Magazine
                            </a>
                            <a href="#" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Why Book with Vacayou
                            </a>
                        </div>
                        <div className="social-info">
                            <h4>GET SOCIAL</h4>
                            <div className="flex social-list">
                                <a href="#"><img src="/images/instagram.png" width="20px"/></a>
                                <a href="#"><img src="/images/twitter.png" width="20px"/></a>
                                <a href="#"><img src="/images/facebook.png" width="20px"/></a>
                                <a href="#"><img src="/images/world.png" width="20px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                footer {
                    display: grid;
                    place-items: flex-start;
                    background: #12355D;
                    padding: 60px 0;
                }
                footer a,
                footer h4{
                    color: #fff;
                }
                footer a{
                    padding: 5px 0;
                }
                .social-list{
                    padding-top: 15px;
                }
                .social-list a{
                    padding: 0 10px;
                }
                .social-list a:first-child{
                    padding-left: 0px !important;
                }
                footer h4{
                    margin-bottom: 10px;
                }
                @media screen and (min-width: 1024px) and (max-width: 1366px){
                    footer{
                        padding: 60px 10px;
                    }
                    .social-info{
                        padding-left: 25px;
                    }
                }
            `}</style>
        </>
    );
};

export default Footer;