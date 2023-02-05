const header = `
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #fff;">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="static/pics/logo.jpg" alt="PaguriCablati" width="60px" height="60px">
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="charts.html">Charts</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

document.getElementById("header").innerHTML = header
/*
async function main(){
  const response = await fetch("header.html");
  document.getElementById("header").innerHTML = await response.text();
}

main()*/