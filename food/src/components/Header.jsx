import logoImg from '../assets/logo.jpg'
import Button from './UI/button';
export default function Header() {
    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt=""/>
                <h1>Food Court</h1>
            
        </div>
        <nav>
            <Button textOnly >Cart (0)</Button>
        </nav>

    </header>
    );
}