import React, { Component ,PropTypes } from 'react';
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';
import SideNav from './View/Common/components/SideNav.jsx';
import Footer from './View/Common/components/Footer.jsx';
import Header from './View/Common/components/Header.jsx';
import SlidesSection from './View/SlidesSection/container/SlidesSectionContainer.jsx';
import WhoWeAreSection from './View/WhoWeAreSection/container/WhoWeAreSectionContainer.jsx';
import WhatWeDoSection from './View/WhatWeDoSection/container/WhatWeDoSectionContainer.jsx';
import MeetTheTeamSection from './View/MeetTheTeam/container/MeetTheTeamSectionContainer.jsx';
import PortfolioSection from './View/PortfolioSection/container/PortfolioSectionContainer.jsx';
import ContactSection from './View/ContactSection/container/ContactSectionContainer.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

class Application extends Component {
    componentDidMount() {
        injectTapEventPlugin();
        componentHandler.upgradeAllRegistered();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        const links = [
            {
                link: "#WhoWeAre",
                message: "who we are"
            }, {
                link: "#WhatWeDo",
                message: "what we do"
            }, {
                link: "#MeetTheTeam",
                message: "meet the team"
            }, {
                link: "#Portfolio",
                message: "portfolio"
            }, {
                link: "#Contact",
                message: "contact"
            }, {
                link: "#Blog",
                message: "blog"
            }
        ];

        const social = [
            {
                color: "indigo",
                social: "facebook",
                link: ""
            }, {
                color: "blue",
                social: "twitter",
                link: ""
            }, {
                color: "red",
                social: "google-plus",
                link: ""
            }, {
                color: "black",
                social: "github",
                link: "https://github.com/BlackBoxVision"
            }
        ];

        const team = {
            title: "Meet the Team",
            description: "We are enthusiastic developers with remarkable skills on different modern growing technologies. Our vision is to interact with the client and make solutions according to their needs.",
            cardList: [
                {
                    imageUrl: "/assets/images/alan-background.png",
                    name: "Alan Vaudagna",
                    description: "Mobile in the day, backend in the night, developer lifestyle. Passionate, hard worker, and self motivated. Great drummer by the way.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            link: "https://github.com/avaudagna"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            link: "https://ar.linkedin.com/in/alan-vaudagna-5101647b"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            link: "https://plus.google.com/+AlanVaudagna"
                        }
                    ]
                },
                {
                    imageUrl: "/assets/images/federico-background.png",
                    name: "Federico Catinello",
                    description: "FullStack Developer. Proactive Researcher. High commitment with new deals. Crazy about networking.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            link: "https://github.com/fedecatinello"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            link: "https://ar.linkedin.com/in/fcatinello"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            link: "https://plus.google.com/115178305356749953986"
                        }
                    ]
                },
                {
                    imageUrl: "/assets/images/jonatan-background.png",
                    name: "Jonatan Salas",
                    description: "FullStack Developer. Open source projects contributor. Tenacious and self-motivated. Interested in new growing technologies.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            link: "https://github.com/JonatanSalas"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            link: "https://ar.linkedin.com/in/jonatanezequielsalas"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            link: "https://plus.google.com/+JonatanSalasJS"
                        }
                    ]
                }
            ]
        };

        return (
            <Layout fixedHeader>
                <Header logo="/assets/images/logo.png" logoSize="25px" linkList={links}/>
                <SideNav title="BlackBox Vision" linkList={links}/>
                <Content>
                    <SlidesSection imageUrl="/assets/images/background.svg"/>
                    <WhoWeAreSection/>
                    <WhatWeDoSection/>
                    <MeetTheTeamSection {...team}/>
                    <PortfolioSection/>
                    <ContactSection/>
                    <Footer socialList={social} copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}

export default Application;