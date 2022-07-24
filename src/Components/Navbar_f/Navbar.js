import './StylesNavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import to , {Link} from 'react-router-dom'


export default function Navbars() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                <Navbar.Brand><Link to='/' id="Link_nav_home">SCP ARCHIVES</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '800px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to='/' className='Link_nav'><p className="Link_nav_p">HOME</p></Link></Nav.Link>
                            {/* This link will go to the /  : (App.js component) where it feature a Description or signifiaction of the word SCP and its origins (Something like that) */}
                            <Nav.Link ><Link to='' className='Link_nav'><p className="Link_nav_p">NEWS</p></Link></Nav.Link>
                            {/* I just added the news, incase we need it in the future. */}
                            
                            <Nav.Link ><Link to='/scp' className='Link_nav'><p className="Link_nav_p">ARCHIVES</p></Link></Nav.Link>
                            {/* TThis link will go to the /scp :(Scp.js component) where it will feature a list of SCPs*/}
                            <Nav.Link ><Link to='/new_entry' className='Link_nav'><p className="Link_nav_p">NEW-ENTRY</p></Link></Nav.Link>
                            {/* This link will go to the /new_entry :(New_entry.js component) where it will feature a form to add New SCP */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}