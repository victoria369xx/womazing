import banner from '../../assets/images/search_banner.jpg' 
import './style.scss'
export const SearchField = () => {
    return (
        <section>
            <div className="searchField" style={{ backgroundImage: `url(${banner})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', height:'80vh'}}>
                <input className='searchField-input' placeholder='Я ищу...' type='text'/>
            </div>
        </section>
    )
}