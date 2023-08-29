import {Link} from 'react-router-dom';
import './nav.css';

function Nav({data})
{

    return(
        <nav>
            <ul>
                <li>
                    <Link to={"Home"} className='link'>HOME</Link>
                </li>
                {
                    data.map(
                        scp => (
                            <li key={scp.Item}>

                                <Link to={`${scp.Item}`} className='link' >{scp.Item}</Link>

                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav; 
