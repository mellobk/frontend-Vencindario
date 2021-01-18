
import React, { /* Fragment */Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../Css/index.css";
import { RiArrowRightSLine} from "react-icons/ri";

let list = [
    { name: 'MI PERFIL' },
    { name: 'DATA' },
    { name: 'MI ASISTENTE' },
    { name: 'MIS EVENTOS' },
    { name: 'COMISIONES & PAGOS' },
];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: <span  onClick={()=>console.log('click')}><RiArrowRightSLine size={'20px'} style={{marginTop:'-8px'}} /></span>, className: "arrow-next" });

class MenuScroll extends Component {

  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    scrollToSelected: false,
    selected: "MI PERFIL",
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  

  constructor(props) {

    console.log('propiedades',props)
    if(props.infoPlataform.length){
      list.push({ name: 'DATOS PLATAFORMA' })
    }
    

    super(props);
    this.menu = this.menuItems;   
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  onLastItemVisible = () => {
    console.log("last item is visible");

  };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    this.props.menuSelected(key)
  };

  componentDidUpdate( prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }


  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
    
  };

  render() {
    const {
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;


    return (
      <div className="App">
         <ScrollMenu
          alignCenter={false}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />
      </div>
    );
  }
}

export default MenuScroll;

