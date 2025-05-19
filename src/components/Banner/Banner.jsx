import './Banner.scss';

function Banner (props){
     return(
        <div className={props.bannerName}>
            <div className={props.overlayName}>
                <h1>{props.innerText}</h1>
            </div>
        </div>
    )
}
   
export default Banner