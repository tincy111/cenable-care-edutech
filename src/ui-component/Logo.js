import logo from '../assets/logo.png';



const Logo = (props) => {
    return(
        <img src={logo} alt="Cenable-care" width={props.width}/>
    )
}
export default Logo;