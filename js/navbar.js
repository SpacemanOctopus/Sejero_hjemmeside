document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-md">
	<div class="container-fluid">
		<a class="navbar-brand" href="Forside.html">
			<img class="headerlogo" src="img/Sejerø logo - Hvid.webp" alt="Sejerøs logo">
		</a>

		<button class="navbar-toggler" type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation">

			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">

				<li class="nav-item">
					<a class="nav-link barlink" href="Havet.html">Havet</a>
				</li>

				<li class="nav-item">
					<a class="nav-link barlink" href="Dagligdagen.html">Dagligdagen</a>
				</li>

				<li class="nav-item">
					<a class="nav-link barlink" href="Bolig.html">Bolig</a>
				</li>

				<li class="nav-item">
					<a class="nav-link barlink" href="Historienbag.html">Historien bag</a>
				</li>

				<li class="nav-item ferrylink align-self-end ps-1 pe-1 rounded-3">
					<a target="_blank"
					   class="nav-link"
					   href="https://sejeroe-ferry.teambooking.dk/new-booking">
					   Færge Booking
					</a>
				</li>

			</ul>
		</div>
	</div>
</nav>
`;