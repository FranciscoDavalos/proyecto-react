import '../App.css';

const NavBar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#"><img src="./Escudo_del_C.A._San_Lorenzo_de_Almagro.svg.png" alt="Logo" width="25" height="28" class="d-inline-block align-text-top me-2"></img>San Lorenzo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-light" href="#">Ropa</a>
        <a class="nav-link text-light" href="#">Entradas</a>
        <a class="nav-link text-light" href='#'>Asociarse</a>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}


export default NavBar 
