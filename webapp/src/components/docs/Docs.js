import React from "react";
import LogoASW from './images/LogoASW.png';
import ContextDiagram from './images/01_ContextDiagram.png';
import BusinessContextDiagram from './images/03_BusinessContextDiagram.png';
import BuildingBlockDiagram from './images/05-BuildingBlockDiagram.png';
import GeolocateFriendsDiagram from './images/06_Geolocate friends diagram.png';
import LogInDiagram from './images/06_Log in diagram.png';
import RegisterDiagram from './images/06_Register diagram.png';
import deploymentDiagram from './images/07-deploymentDiagram.png';
import CrosscuttingConceptsStructureEN from './images/08-Crosscutting-Concepts-Structure-EN.png';
import QualityTree from './images/10_QualityTree.png';
import StarUMLDomainModel from './images/StarUML_DomainModel.png';


class Docs extends React.Component {

    render() {

        return (
            <div className="article toc2 toc-left container-fluid bg-light text-dark">
                <div className="titleTest row justify-content-center">
                    <h1  ><span className="image"><img src={LogoASW} alt="arc42" /></span> Radarin Es3a</h1>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-3">
                        <div id="header">

                            <div id="toc" className="toc2">
                                <div id="toctitle ">Table of Contents</div>
                                <ul className="sectlevel1">
                                    <li><a href="#section-introduction-and-goals">1. Introduction and Goals</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_requirements_overview">1.1. Requirements Overview</a></li>
                                            <li><a href="#_quality_goals">1.2. Quality Goals</a></li>
                                            <li><a href="#_stakeholders">1.3. Stakeholders</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-architecture-constraints">2. Architecture Constraints</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_agreements">2.1. Agreements</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-system-scope-and-context">3. System Scope and Context</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_business_context">3.1. Business Context</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#_solution_strategy">4. Solution Strategy</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_backend">4.1. Backend</a></li>
                                            <li><a href="#_frontend">4.2. Frontend</a></li>
                                            <li><a href="#_developer_tools">4.3. Developer Tools</a></li>
                                            <li><a href="#_how_are_going_to_be_reached_the_non_fuctional_requirements">4.4. How are going to be reached the non fuctional requirements?</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-building-block-view">5. Building Block View</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_whitebox_overall_system_level_1">5.1. Whitebox Overall System  (Level 1)</a></li>
                                            <li><a href="#_level_2">5.2. Level 2</a></li>
                                            <li><a href="#_level_3">5.3. Level 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-runtime-view">6. Runtime View</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_register">6.1. Register</a></li>
                                            <li><a href="#_log_in">6.2. Log in</a></li>
                                            <li><a href="#_geolocate_friends">6.3. Geolocate friends</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#_deployment_view">7. Deployment View</a></li>
                                    <li><a href="#section-concepts">8. Cross-cutting Concepts</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_domain_model">8.1. Domain model</a></li>
                                            <li><a href="#_user_experience_concepts_ux">8.2. User Experience concepts (UX)</a></li>
                                            <li><a href="#_safety_and_security">8.3. Safety and security</a></li>
                                            <li><a href="#_performance">8.4. Performance</a></li>
                                            <li><a href="#_architecture_and_design_patterns">8.5. Architecture and design patterns</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-design-decisions">9. Design Decisions</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_access">9.1. Access</a></li>
                                            <li><a href="#_framework">9.2. Framework</a></li>
                                            <li><a href="#_data_storage">9.3. Data storage</a></li>
                                            <li><a href="#_geolocalization">9.4. Geolocalization</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-quality-scenarios">10. Quality Requirements</a>
                                        <ul className="sectlevel2">
                                            <li><a href="#_quality_tree">10.1. Quality Tree</a></li>
                                            <li><a href="#_quality_scenarios">10.2. Quality Scenarios</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#section-technical-risks">11. Risks and Technical Debts</a></li>
                                    <li><a href="#section-glossary">12. Glossary</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">

                        <div id="content">
                            <div id="preamble">
                                <div className="sectionbody">

                                    <hr />
                                    <div className="sidebarblock arc42help">
                                        <div className="content">
                                            <div className="admonitionblock note">
                                                <table>
                                                    <tr>
                                                        <td className="icon">
                                                            <div className="title">Note</div>
                                                        </td>
                                                        <td className="content">
                                                            <div className="paragraph">
                                                                <p>This version of the template contains some help and explanations.
                                                                It is used for familiarization with arc42 and the understanding of the concepts.
For documentation of your own system you use better the <em>plain</em> version.</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pgbraf"></div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-introduction-and-goals">1. Introduction and Goals</h2>
                                <div className="sectionbody">
                                    <div className="paragraph">
                                        <p>This porject is about a mobile app, which acts like a radar. Any user can share his location to his friends and see where they are at real time.
The system can be accessed on android and iOS phones as well as in desktop environments.</p>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_requirements_overview">1.1. Requirements Overview</h3>
                                        <div className="ulist">
                                            <ul>
                                                <li>
                                                    <p>Functional requirements</p>
                                                    <div className="ulist">
                                                        <ul>
                                                            <li>
                                                                <p>The user will be able to see a list of his friends</p>
                                                            </li>
                                                            <li>
                                                                <p>The user will be able to see in a map where are his friends</p>
                                                            </li>
                                                            <li>
                                                                <p>The user has the hability of change the distance where the firends are</p>
                                                            </li>
                                                            <li>
                                                                <p>The system will notify the user if a friend is near</p>
                                                            </li>
                                                            <li>
                                                                <p>The admin will be able administrate all the users of the app</p>
                                                            </li>
                                                            <li>
                                                                <p>The admin will be able to delete the users</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>Non functional requirements</p>
                                                    <div className="ulist">
                                                        <ul>
                                                            <li>
                                                                <p>The project will follow the SOLID principles</p>
                                                            </li>
                                                            <li>
                                                                <p>The information of the users will be stored on SOLID PODS but the location of them</p>
                                                            </li>
                                                            <li>
                                                                <p>The location of the users will be stored on a Mongo database</p>
                                                            </li>
                                                            <li>
                                                                <p>The location is taken from the device from where the user connects</p>
                                                            </li>
                                                            <li>
                                                                <p>The system is deploy on the cloud using the Heroku&#8217;s environment</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_quality_goals">1.2. Quality Goals</h3>
                                        <table className="tableblock frame-all grid-all stretch">
                                            <colgroup>
                                                <col className="w50percent" />
                                                <col className="w50percent" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="tableblock halign-left valign-top">Quality goal</th>
                                                    <th className="tableblock halign-left valign-top">Motivation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Understandability</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Any user should be able to easily understand and comprehend the functionality and ussage</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Attractiveness</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The user interface should be attractive to pottential ussers</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Security</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The data of any usser should be properly protected</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Testability</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The application should be able to go through different test</em></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_stakeholders">1.3. Stakeholders</h3>
                                        <div className="imageblock">
                                            <div className="content">
                                                <img src={ContextDiagram} alt="Context Context" />
                                            </div>
                                        </div>
                                        <table className="tableblock frame-all grid-all stretch">
                                            <colgroup>
                                                <col className="w50percent" />
                                                <col className="w50percent" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="tableblock halign-left valign-top">Role/Name</th>
                                                    <th className="tableblock halign-left valign-top">Expectations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Clients</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Those who asked for the development of the project. They expect a fully functional application allowing for the usage of the radar.</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Development team</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Those in charge of developing the application, expecting to learn about new technologies.</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Users</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Those who will use the application. They will expect a simple to understand interface and a system capable of protecting their personal data efectibly.</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Solid community</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Community that wants developers to produce as many applications following their principles as possible, in order to progress and improve their project.</em></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-architecture-constraints">2. Architecture Constraints</h2>
                                <div className="sectionbody">
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 1. <strong>Technical constraints</strong></caption>
                                        <colgroup>
                                            <col className="w33percent" />
                                            <col className="w66percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top"><strong>Constraint</strong></th>
                                                <th className="tableblock halign-left valign-top"><strong>Description</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Docker</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>It is the tool we will use for create and manage Linux containers where some software, like the mongo database will run.</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>MongoDB</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>It is a document database with the scalability and flexibility needed for this project.</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Solid</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Solid specifications will guide us about how to implement a reliable, scalable, easy to mantain and stable software.</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong>Heroku</strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The environment in which the project will be deployed.</em></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 2. <strong>Organizative constraints</strong></caption>
                                        <colgroup>
                                            <col className="w33percent" />
                                            <col className="w66percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top"><strong>Constraint</strong></th>
                                                <th className="tableblock halign-left valign-top"><strong>Description</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Time limit</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The project will be released by the end of May 2021, with a main briefing the first week of May</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Team</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The project will be developed by a team of 6 components</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Version control</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The project will be managed using git, by creating issues that will be assign to a team component who will do it</em></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 3. <strong>Political restrictions</strong></caption>
                                        <colgroup>
                                            <col className="w33percent" />
                                            <col className="w66percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top"><strong>Constraint</strong></th>
                                                <th className="tableblock halign-left valign-top"><strong>Description</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>RGPD</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>It is a regulation in EU law on data protection and privacy in the European Union the data of the users will be saved following the RGPD indications</em></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 4. <strong>Security restrictions</strong></caption>
                                        <colgroup>
                                            <col className="w33percent" />
                                            <col className="w66percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top"><strong>Constraint</strong></th>
                                                <th className="tableblock halign-left valign-top"><strong>Description</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Inrupt PODS</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>This tool will allow us to keep the information from each client private, each user has it&#8217;s personal POD</em></p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>HTTPS</em></strong></p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock"><em>In HTTPS, the communication protocol is encrypted using Transport Layer Security, so the communications with the server are more secure</em></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="sect2">
                                        <h3 id="_agreements">2.1. Agreements</h3>
                                        <table className="tableblock frame-all grid-all stretch">
                                            <colgroup>
                                                <col className="w33percent" />
                                                <col className="w66percent" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="tableblock halign-left valign-top"><strong>Agreement</strong></th>
                                                    <th className="tableblock halign-left valign-top"><strong>Description</strong></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><strong>Languaje</strong></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock">The system will be in Spanish, but the documentation in English</p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><strong>Budget</strong></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock">All the tools used are free</p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><strong>arc42</strong></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock">The documentation will be structured as arc42&#8217;s rules suggest.</p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-system-scope-and-context">3. System Scope and Context</h2>
                                <div className="sectionbody">
                                    <div className="paragraph">
                                        <div className="title">Contents</div>
                                        <p>Radarin is an application that will allow users to find nearby friends. One feature that we want to remark is that stores the minimun required user data in base of the SOLID principles, the rest of the information will be requested to the user via user POD.</p>
                                    </div>
                                    <div className="paragraph">
                                        <p>The application additionally manage the friend list of the user mediating withe the Solid system.</p>
                                    </div>
                                    <div className="paragraph">
                                        <p>The user sends his location to the web service, this service requests the necesary data from the user POD, then this service makes the query to the Google Maps API which returns the map with the required data to the web service. Once this data is recolected the web service returns the user the final product.</p>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_business_context">3.1. Business Context</h3>
                                        <div className="imageblock">
                                            <div className="content">
                                                <img src={BusinessContextDiagram} alt="Business Context" />
                                            </div>
                                        </div>
                                        <table className="tableblock frame-all grid-all stretch">
                                            <colgroup>
                                                <col className="w33percent" />
                                                <col className="w66percent" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="tableblock halign-left valign-top">Stakeholder</th>
                                                    <th className="tableblock halign-left valign-top">Motivation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>User</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Any user should be able to send his location and receive the location of the nearby friends</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Server Web Radarin</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Processes the information given by the users, consults the user POD and retrieves the information from the google API</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>POD</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The data of any usser should be properly protected with a Solid Server with POD</em></p></td>
                                                </tr>
                                                <tr>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>Google API</em></p></td>
                                                    <td className="tableblock halign-left valign-top"><p className="tableblock"><em>The application should be able to communicate with the google maps API</em></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="pgbraf"></div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="_solution_strategy">4. Solution Strategy</h2>
                                <div className="sectionbody">
                                    <div className="sect2">
                                        <h3 id="_backend">4.1. Backend</h3>
                                        <div className="paragraph">
                                            <div className="title">Solid-file-client:</div>
                                            <p>We will use this library to interchange information from POD and github. It works with json archives.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Inrupt-javascript-libraries:</div>
                                            <p>The libraries for the usage of the PODs, it is the union between the solid code and the POD storage.
                                            .Solid:
It will be the core of the backend, everything will be managed using the SOLID principles.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">NodeMailer API:</div>
                                            <p>This API will allow us to implement emails as a way of notificate the users</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Firebase Cloud Messaging API:</div>
                                            <p>This API will allow us to have real time notifications, also a notification center for the user to see what he missed</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">MongoDB</div>
                                            <p>This will manage the database.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">MongoDB Atlas</div>
                                            <p>It is a server of mongoDB, so the app will be able to get the informatiuon of the user wherever he is.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_frontend">4.2. Frontend</h3>
                                        <div className="paragraph">
                                            <div className="title">React-bootstrap:</div>
                                            <p>We will use this technology to make the designs, the UI.
                                            .GoogleMapsAPI:
                                            This API will simplify a lot the location and ubication requirements of the project.
                                            .React components
For the implementation of the interface</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_developer_tools">4.3. Developer Tools</h3>
                                        <div className="paragraph">
                                            <div className="title">Github managers:</div>
                                            <p>To simplify the usage of the github platform and avoid possible problems. Some people of the team use the native solution from github, github desktop, and some others use GitKraken, a third-party alternative</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">VSCode:</div>
                                            <p>To develop the code.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Docker app</div>
                                            <p>The docker app configures the system to work with the docker environment.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">XCode</div>
                                            <p>For the develop of the iOS app</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Android Studio</div>
                                            <p>For the develop of the Andoid app</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_how_are_going_to_be_reached_the_non_fuctional_requirements">4.4. How are going to be reached the non fuctional requirements?</h3>
                                        <div className="paragraph">
                                            <div className="title">Privacy:</div>
                                            <p>The users' location will only be stored while the user is connected.
The essential information will be stored in SOLID PODs providing a strong privacy.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Usability:</div>
                                            <p>The interfaces will be intuitives and easy to use.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Performance:</div>
                                            <p>The performance will be smooth, by using technologies that improve it.</p>
                                        </div>
                                        <div className="paragraph">
                                            <div className="title">Testability:</div>
                                            <p>The app will be tested manually and automatically
<strong>*</strong></p>
                                        </div>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-building-block-view">5. Building Block View</h2>
                                <div className="sectionbody">
                                    <div className="paragraph">
                                        <p>This diagram represents the main abstract structure of the application.</p>
                                    </div>
                                    <div className="paragraph">
                                        <p><span className="image"><img src={BuildingBlockDiagram} alt="Building Block" /></span></p>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_whitebox_overall_system_level_1">5.1. Whitebox Overall System  (Level 1)</h3>
                                        <div className="sect4">
                                            <h5 id="_motivation">Motivation</h5>
                                            <div className="paragraph">
                                                <p>This shows a basic structure of the system application. The locations uf the users are stored on their own PODs, only the essential information is stored on the application, that will be persistent.</p>
                                            </div>
                                        </div>
                                        <div className="sect4">
                                            <h5 id="_contained_building_blocks">Contained Building Blocks</h5>
                                            <table className="tableblock frame-all grid-all stretch">
                                                <colgroup>
                                                    <col className="w50percent" />
                                                    <col className="w50percent" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th className="tableblock halign-left valign-top"><strong>Name</strong></th>
                                                        <th className="tableblock halign-left valign-top"><strong>Responsibility</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Radarin</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">The Application that the user interacts with. This represents the whole estructure of the main product.</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">POD</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Data stored securely with the purpouse of creating a value to the user. This is needed to implement the Solid principles.</p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_level_2">5.2. Level 2</h3>
                                        <div className="sect4">
                                            <h5 id="_motivation_2">Motivation</h5>
                                            <div className="paragraph">
                                                <p>This level represents the basic view of the application, in other words, the esential components of the application.</p>
                                            </div>
                                        </div>
                                        <div className="sect4">
                                            <h5 id="_contained_building_blocks_2">Contained Building Blocks</h5>
                                            <table className="tableblock frame-all grid-all stretch">
                                                <colgroup>
                                                    <col className="w33percent" />
                                                    <col className="w66percent" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th className="tableblock halign-left valign-top"><strong>Name</strong></th>
                                                        <th className="tableblock halign-left valign-top"><strong>Responsibility</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Web Application</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">This is the representation of the application on the web.</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Mobile Aplication</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">This is the representation of the application on the mopbile phone.</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Database</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">This is the representation of the application on the web.</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Modules</p></td>
                                                        <td className="tableblock halign-left valign-top"><p className="tableblock">Stands for the npm modules installed in the project and our dependencies to them.</p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_level_3">5.3. Level 3</h3>
                                        <div className="sect3">
                                            <h4 id="_app">5.3.1. App</h4>
                                            <div className="sect4">
                                                <h5 id="_motivation_3">Motivation</h5>
                                                <div className="paragraph">
                                                    <p>Representation of the main blocks of the application for structuring the diferent parts of it. All of them are used in diferent objectives, every one of them will specialize in one part of the core application.</p>
                                                </div>
                                            </div>
                                            <div className="sect4">
                                                <h5 id="_contained_building_blocks_3">Contained Building Blocks</h5>
                                                <table className="tableblock frame-all grid-all stretch">
                                                    <colgroup>
                                                        <col className="w33percent" />
                                                        <col className="w66percent" />
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th className="tableblock halign-left valign-top"><strong>Name</strong></th>
                                                            <th className="tableblock halign-left valign-top"><strong>Responsibility</strong></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Components</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">This will communicate the user with the application, providing the interface alongside some functionality.</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Services</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">This will provide the main logic of the aplication.</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Entities</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">This will be the classes generated to give persistency to the application, managed by the database.</p></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="pgbraf"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-runtime-view">6. Runtime View</h2>
                                <div className="sectionbody">
                                    <div className="sect2">
                                        <h3 id="_register">6.1. Register</h3>
                                        <div className="paragraph">
                                            <p>Any potential user may want to register in the application, to start using the features provided. Register runs along the Solid system.</p>
                                        </div>
                                        <div className="olist arabic">
                                            <ol className="arabic">
                                                <li>
                                                    <p>The user touches the "Get a Solid Pod" button</p>
                                                </li>
                                                <li>
                                                    <p>The user chooses credentials</p>
                                                </li>
                                                <li>
                                                    <p>If successful, the user is provided with a Solid Pod account</p>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="listingblock">
                                            <div className="content">
                                                <img src={RegisterDiagram} alt="Register diagram" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_log_in">6.2. Log in</h3>
                                        <div className="paragraph">
                                            <p>A potential user may log in the application via the log in screen. Log in comences upon entering the application, either in a mobile phone or a web browser, as the mobile app includes the exact behaviour.</p>
                                        </div>
                                        <div className="olist arabic">
                                            <ol className="arabic">
                                                <li>
                                                    <p>The user touches the log in button.</p>
                                                </li>
                                                <li>
                                                    <p>The user enters their Solid credentials in a new window.</p>
                                                </li>
                                                <li>
                                                    <p>The Solid Pod returns log in confirmation.</p>
                                                </li>
                                                <li>
                                                    <p>The application services check if the log in is valid.</p>
                                                </li>
                                                <li>
                                                    <p>The entities send the information needed to the services.</p>
                                                </li>
                                                <li>
                                                    <p>The services prepare the functionality to be given to the user.</p>
                                                </li>
                                                <li>
                                                    <p>The controllers provide the user with the functionality.</p>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="listingblock">
                                            <div className="content">
                                                <img src={LogInDiagram} alt="Log in diagram" />
                                            </div>
                                        </div>
                                        <div className="sidebarblock">
                                            <div className="content">
                                                <div className="paragraph">
                                                    <p>=== Register friends</p>
                                                </div>
                                                <div className="olist arabic">
                                                    <ol className="arabic">
                                                        <li>
                                                            <p>User1 touches the "add a friend" button.</p>
                                                        </li>
                                                        <li>
                                                            <p>User1 enters said friend&#8217;s WebID.</p>
                                                        </li>
                                                        <li>
                                                            <p>User1 application sends a petition to User2 Pod with the information.</p>
                                                        </li>
                                                        <li>
                                                            <p>User2 Pod notifies User2 application.</p>
                                                        </li>
                                                        <li>
                                                            <p>User2 application waits for confirmation on the friend request from User2.</p>
                                                        </li>
                                                        <li>
                                                            <p>User2 touches the "accept friend request" button.</p>
                                                        </li>
                                                        <li>
                                                            <p>User2 application sends the information to User2 Pod.</p>
                                                        </li>
                                                        <li>
                                                            <p>User2 Pod registers User1 as a friend, and sends the confirmation to User1 application.</p>
                                                        </li>
                                                        <li>
                                                            <p>User1 application sends the information to User1 Pod.</p>
                                                        </li>
                                                        <li>
                                                            <p>User1 application notifies User1.</p>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="listingblock">
                                                    <div className="content">
                                                        <img src={RegisterDiagram} alt="Register diagram" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_geolocate_friends">6.3. Geolocate friends</h3>
                                        <div className="olist arabic">
                                            <ol className="arabic">
                                                <li>
                                                    <p>The user enters the maps.</p>
                                                </li>
                                                <li>
                                                    <p>The application request the geolocalization information of added friends in the database.</p>
                                                </li>
                                                <li>
                                                    <p>The database sends back the information.</p>
                                                </li>
                                                <li>
                                                    <p>The application shows the user the information.</p>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="listingblock">
                                            <div className="content">

                                                <img src={GeolocateFriendsDiagram} alt="Geolocate friends diagram" />
                                            </div>
                                        </div>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="_deployment_view">7. Deployment View</h2>
                                <div className="sectionbody">
                                    <div className="sidebarblock">
                                        <div className="content">
                                            <div className="paragraph">
                                                <p><span className="image"><img src={deploymentDiagram} alt="Infraestructure" /></span></p>
                                            </div>
                                            <div className="paragraph">
                                                <p>The user will need his phone connected to the internet, where he can deploy the app.
                                                Our application, Radarin, will be hosted in github pages.
Solid PODs are required for using the application, in our case, we chose the Irupt provider of PODs. The POD is like a server, so can be accesible anywhere in the world.</p>
                                            </div>
                                            <div className="paragraph">
                                                <div className="title">Motivation</div>
                                                <p>The aim of this project is to allow people to locate themselves with their friends with a simple interface, which will be based in having access to user&#8217;s PODs with the location info.</p>
                                            </div>
                                            <div className="paragraph">
                                                <div className="title">Infraestructure</div>
                                                <p>As it is shown in the diagram at the beginning of the section the main parts of the project will be:</p>
                                            </div>
                                            <div className="paragraph">
                                                <p>*The user&#8217;s device</p>
                                            </div>
                                            <div className="paragraph">
                                                <p>*The web server, where the app really runs</p>
                                            </div>
                                            <div className="paragraph">
                                                <p>*The application itself</p>
                                            </div>
                                            <div className="paragraph">
                                                <p>*The POD server</p>
                                            </div>
                                            <div className="paragraph">
                                                <p>*The user&#8217;s PODs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pgbraf"></div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-concepts">8. Cross-cutting Concepts</h2>
                                <div className="sectionbody">
                                    <div className="sect2">
                                        <h3 id="_domain_model">8.1. Domain model</h3>
                                        <div className="paragraph">
                                            <p><span className="image"><img src={StarUMLDomainModel} alt="Domain model" /></span></p>
                                        </div>
                                        <div className="paragraph">
                                            <p>User: The user class is a representation of on client of the application, one user obtains the basic information of our data base then the remaining from the POD. One user has one list of users that will be his friends and one waypoint that will be his current location.</p>
                                        </div>
                                        <div className="paragraph">
                                            <p>Waypoint: This stands for the current location of one user, it stores the data position and the name of this waypoint/marker.</p>
                                        </div>
                                        <div className="paragraph">
                                            <p>Position: Object that stores the latitude and longitude of one position in the map.</p>
                                        </div>
                                        <div className="paragraph">
                                            <p><span className="image"><img src={CrosscuttingConceptsStructureEN} alt="Possible topics for crosscutting concepts" /></span></p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_user_experience_concepts_ux">8.2. User Experience concepts (UX)</h3>
                                        <div className="paragraph">
                                            <p>In this application we will be taking two fundamental goals for the UI Design.
One of them is that it has to be emotionally acceptable, this will give the user satisfaction, and mastery of the application. On the other hand, we will be designing this application cognitively comprehensible, every element should be controllable, predictable and consistent.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_safety_and_security">8.3. Safety and security</h3>
                                        <div className="paragraph">
                                            <p>The main reason for using Solid is because it brings safety and security for our data, the user is in charge of their data, with this method he can manage the amount of stored data he has, giving or taking permissions.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_performance">8.4. Performance</h3>
                                        <div className="paragraph">
                                            <p>Due to the use of MongoDB, we do not have the necessity to stop the location refreshing . This will be done in short periods of time.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_architecture_and_design_patterns">8.5. Architecture and design patterns</h3>
                                        <div className="paragraph">
                                            <p>Radarin follows the Model View Controller(MVC) architecture. All the persistence of this aplication will be following the rules of solid specifications.
We will use React, Docker and Solid to develop this application.</p>
                                        </div>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-design-decisions">9. Design Decisions</h2>
                                <div className="sectionbody">
                                    <div className="sect2">
                                        <h3 id="_access">9.1. Access</h3>
                                        <div className="paragraph">
                                            <p>The application will have a log in screen that will ask for the WebID to connect to the user&#8217;s Pod, alongside a user ID and a password.
Though the application will enforce the use of a personal data Pod, authentification will be done with the user credentials.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_framework">9.2. Framework</h3>
                                        <div className="paragraph">
                                            <p>The application will be created making use of React.js, as it will allow for a better construction of the user interface.
                                            Additionally, as React.js is designed so it can work with dynamic data, and given that our application will be always taking continous input on geolocalization, it presents a formidable advantage in terms of data management.
Moreover, React.js' syntax is similar to that of HTML, with which our team is used to work. Even so, as Solid has a lot of coverage from React components libraries, and given the restriction to use Solid Pods as a mean of storing data, React will prove of bigger use to the team.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_data_storage">9.3. Data storage</h3>
                                        <div className="paragraph">
                                            <p>Given the project is to be created following the Solid arquetype, some of our data will be storaged upon the Solid Pods.
                                            However, the main chunk of information will be running alongside the database of Mongo DB, as it will improve velocity and data accesibility.
Solid Pods will be used mainly to storage the user&#8217;s email used when sending the notifications.</p>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_geolocalization">9.4. Geolocalization</h3>
                                        <div className="paragraph">
                                            <p>Geolocalization will dynamically updated on periodic intervals, using the Mongo DB database as an intermediate user. Solid Pods will not be used for the means of storing geolocalization data.</p>
                                        </div>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-quality-scenarios">10. Quality Requirements</h2>
                                <div className="sectionbody">
                                    <div className="sect2">
                                        <h3 id="_quality_tree">10.1. Quality Tree</h3>
                                        <div className="sidebarblock">
                                            <div className="content">
                                                <div className="paragraph">
                                                    <p><span className="image"><img src={QualityTree} alt="Quality Tree" /></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sect2">
                                        <h3 id="_quality_scenarios">10.2. Quality Scenarios</h3>
                                        <div className="sidebarblock">
                                            <div className="content">
                                                <table className="tableblock frame-all grid-all stretch">
                                                    <colgroup>
                                                        <col className="w16percent" />
                                                        <col className="w33percent" />
                                                        <col className="w50percent" />
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th className="tableblock halign-left valign-top"><strong>Attribute</strong></th>
                                                            <th className="tableblock halign-left valign-top"><strong>Scenario</strong></th>
                                                            <th className="tableblock halign-left valign-top"><strong>Priority</strong></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Privacy and security</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Use of PODs and Solid</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">High</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Accesibility</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">The application must can be used by all people</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">High</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Availability</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">The application must be operational and accesible when required to use</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Medium</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Usability</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">The application must be easy to use</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Medium</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Testability</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Unit tests, acceptance tests and load tests</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Medium</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Portability</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">The application can be used in PC or mobile device</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Low</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock"><strong><em>Internationalization</em></strong></p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">The application will be available in more than one language</p></td>
                                                            <td className="tableblock halign-left valign-top"><p className="tableblock">Low</p></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="pgbraf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-technical-risks">11. Risks and Technical Debts</h2>
                                <div className="sectionbody">
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 5. Risks Table</caption>
                                        <colgroup>
                                            <col className="w33percent" />
                                            <col className="w33percent" />
                                            <col className="w33percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top">Risk</th>
                                                <th className="tableblock halign-left valign-top">Explanation</th>
                                                <th className="tableblock halign-left valign-top">Solution</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">SOLID</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We have never used SOLID before, so we dont have any kind of knowledge about it. Also SOLID is a new technology with few documentation besides it being hard to work with it.</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We can read the available documentation and ask for help to more veteran developers in this matter.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">POD</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">The fact that this is a very new technology makes it hard to know something about it.</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">The only solution is to give it a try and use it by creating one and making different scenarios/tests with it. One very basic solution would be creating a contacts agenda with it.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">REACT</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">In our team there is no one that knows about React. But we have previous knowledge about Js wich makes it easier to learn about it.</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Trial and Error. We will have to explore the technology by directly using it to develop this application.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Docker</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We dont need to know very much about it because is more important to focus our work into the other materials. Nevertheless we think is important to establish the very basics anyway.</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We need to learn the basic commands and operations of this platform to properly work with it.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Git</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We have some flaws with the basic command knowledge.</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">This is not a major problem because we have a lot of documentation of how to use git, also we have previous knowledge acquired throughout the past years.</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="tableblock frame-all grid-all stretch">
                                        <caption className="title">Table 6. Technical Debts Table</caption>
                                        <colgroup>
                                            <col className="w50percent" />
                                            <col className="w50percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top">Technical Debt</th>
                                                <th className="tableblock halign-left valign-top">Explanation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Use React</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">We decided to use React because it bring us a lot of the facilities, such as a good compatibility with solid and a wide variety of documentation to about it.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Use SOLID</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">The way we would use SOLID is using PODs bringing the user the control of their data and only storing the essential data in our data base, this data are the user nick, password and the WEBID, also we would store temporally the locations of the users till they logout the app.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">CI for Radarin</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Many problems were issued referring to GitHub CI, which are yet to be solved despite extensive research.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Notifications</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Debate was established regarding notifications, which we stablished as messages sent via email.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Unitary tests</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Low initial knowledge led to major difficulties in developing tests, which ballasted the efforts to work with them.</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pgbraf"></div>
                                </div>
                            </div>
                            <div className="sect1">
                                <h2 id="section-glossary">12. Glossary</h2>
                                <div className="sectionbody">
                                    <table className="tableblock frame-all grid-all stretch">
                                        <colgroup>
                                            <col className="w50percent" />
                                            <col className="w50percent" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="tableblock halign-left valign-top">Term</th>
                                                <th className="tableblock halign-left valign-top">Definition</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Solid (Project)</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Technology that allows for storage of personal data in decentralized repositories</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Pod</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Personal respository in which a user storage their data individually</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">WebID</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Unique key of a certain POD, very useful when you are trying to distingush a user.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">React.js</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Javascript library designed around bulding user interfaces for web applications</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Docker</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Virtualization system that allows any developer to work with a common set of characteristics</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Application</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Set of all the Radarin parts, this can be the web service or the application with its own respective modules.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Libraries</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Collections of functionality from JavaScript or other platforms, meant to help in development.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Mongo DB</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Database based on documents, which the application will use.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">FriendList</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">All the friends that a user has</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Hook</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">React feature which allow the programmers to do some actions without implementing a class</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Promise</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Is a Javascript feature, used for asynchronous programmation that "promises" that some information will be available in a future if it is not available at the requested moment.</p></td>
                                            </tr>
                                            <tr>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">Asynchronous</p></td>
                                                <td className="tableblock halign-left valign-top"><p className="tableblock">It is a way of programming, which lets the computer to run some code in a non sychronous way, that means that some code will be before in the execution than some other parts</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pgbraf"></div>
                                    <div className="paragraph">
                                        <p><strong>About arc42</strong></p>
                                    </div>
                                    <div className="paragraph lead">
                                        <p>arc42, the Template for documentation of
software and system architecture.</p>
                                    </div>
                                    <div className="paragraph">
                                        <p>By Dr. Gernot Starke, Dr. Peter Hruschka and contributors.</p>
                                    </div>
                                    <div className="paragraph">
                                        <p>Template Revision: 7.0 EN (based on asciidoc), January 2017</p>
                                    </div>
                                    <div className="paragraph">
                                        <p>&#169;
                                        We acknowledge that this document uses material from the
arc 42 architecture template, <a href="http://www.arc42.de" className="bare">http://www.arc42.de</a>.
Created by Dr. Peter Hruschka &amp; Dr. Gernot Starke.</p>
                                    </div>
                                </div>
                            </div>



                            <div id="header"></div>
                <div id="content">
                    <div class="sect1">
                        <h2 id="section-anexos">Annexed</h2>
                        <div class="sectionbody">
                            <div class="sect2">
                                <h3 id="_tests">Tests</h3>
                                <div class="paragraph">
                                    <p>
                                        The webb app and the REST API have been tested in order to solve
                                        the biggest ammount of issues.
              </p>
                                </div>
                                <div class="sect3">
                                    <h4 id="_webapp">Webapp</h4>
                                    <div class="sect4">
                                        <h5 id="_unitary_testing">Unitary testing</h5>
                                        <div class="paragraph">
                                            <p>We have done tests about the main parts of the webapp:</p>
                                        </div>
                                        <div class="ulist">
                                            <ul>
                                                <li>
                                                    <p>Interface: </p>
                                                    <div class="ulist">
                                                        <ul>
                                                            <li>
                                                                <p>
                                                                    The app is rendered as spected, whatever the size
                                                                    of the screen is.
                            </p>
                                                            </li>
                                                            <li>
                                                                <p>
                                                                    The interface changes if the user is logged, a
                                                                    regular user is using the app or the admin is
                                                                    using the app.
                            </p>
                                                            </li>
                                                            <li>
                                                                <p>All the components show the spected info.</p>
                                                            </li>
                                                            <li>
                                                                <p>
                                                                    The admin window works as spected and anly appears
                                                                    if the admin is the logged user.
                            </p>
                                                            </li>
                                                            <li>
                                                                <p>
                                                                    The login web page (Inrupt) is showed fine and
                                                                    redirects from and back to Radarin.
                            </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="sect4">
                                        <h5 id="_acceptance_and_stress_tests">
                                            Acceptance tests
                </h5>
                                        <div class="paragraph">
                                            <p>
                                                We did an acceptance test to check if a user not logged in the app 
                                                could access the friendlist of the application. Ideally, the user 
                                                would be redirected to the Welcome page of the site.
                  </p>
                                        </div>
                                        <div class="paragraph">
                                            <p>*Beggining: A user wants to access the friendlist functionality while not been logged in.</p>
                                        </div>
                                        <div class="paragraph">
                                            <p>
                                                *Actions performed: The user tries to access the /friend-list link.
                  </p>
                                        </div>
                                        <div class="paragraph">
                                            <p>
                                                *End: The user is redirected to the Welcome page.
                  </p>
                                        </div>
                                    </div>
                                    <div class="sect4">
                                        <h5 id="_unitary_testing_2">Unitary Testing</h5>
                                        <div class="paragraph">
                                            <p>
                                                We reproduced the same tests from the webapp. The
                                                information deployed shows perfectly fine for load format
                                                screens and the app is functional. Taking into account the
                                                facility of moving around with the phone, we proved that the
                                                real time location works, that means:
                  </p>
                                        </div>
                                        <div class="ulist">
                                            <ul>
                                                <li>
                                                    <p>The user&#8217;s mark moves while he moves.</p>
                                                </li>
                                                <li>
                                                    <p>The other users can see it.</p>
                                                </li>
                                                <li>
                                                    <p>The notifications work fine.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="sect4">
                                        <h5 id="_automatic_tests">Automatic tests</h5>
                                        <div class="paragraph">
                                            <p>
                                                Some automatic tests where developed, in order to automatize
                                                the task of debug the code. All the tests run automatic at
                                                the deploying task, and can be run locally by calling "npm
                                                run test". With this, we acomplish: * Increase the code
                                                coverage, which means that the code have the smallest
                                                ammount of errors as possible. * Ensure that the system
                                                works as spected. * Find improvement niches.
                  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                        </div>

                    </div>

                </div>

                
                <div id="footer">
                    <div id="footer-text">Last updated 2021-05-02 06:13:45 +0200</div>
                </div>
            </div>

        );
    }
}

export default Docs;