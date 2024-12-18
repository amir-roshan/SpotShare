import './SideDrawer.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


const SideDrawer = ({ show, children, onClick }) => {
    const content = (<CSSTransition
        in={show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
    >
        <aside onClick={onClick} className='side-drawer'>{children}</aside>
    </CSSTransition>);

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;;