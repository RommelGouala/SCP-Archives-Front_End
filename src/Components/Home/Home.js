import CarouseL from "./Carousel"
import './StylesHome.css'

const Home = () => {
  return (
    <div className="The_Home">
      <h1>SCP ARCHIVES</h1>
      <CarouseL/>
      <section className='Home_description_s'>
        <p id='Scp_description_p'>SCP Stands for Secure, Contain, and portec. <br/>The scp archives website is repelte with hudnreds of mob entries of strange objects and entities that violate natural law. the scp foundation is the organizaiton respoisble for containing them.</p>

      </section>

    </div>
  )
}

export default Home

