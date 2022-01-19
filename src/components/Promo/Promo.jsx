import promoLogo from '../../images/promo-logo.svg';
function Promo(props) {
  return(
    <section className="promo">
      <img className="promo__img" src={promoLogo} alt="promo-logo"/>
      <p className="promo__text">Учебный проект студента факультета Веб-разработки.</p>
    </section>
  )
}
export default Promo