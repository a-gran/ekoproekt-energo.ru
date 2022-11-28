document.write(`{
	<nav class="navbar-main">
		<div class="container-navbar">
			<div class="navbar__wrap-container">
				<div class="hamb">
					<div class="hamb__field" id="hamb">
						<span class="bar"></span>
						<span class="bar"></span>
						<span class="bar"></span>
					</div>
				</div>
				<div class="logo-top-navbar d-flex">
					<a class="logo-top-navbar__link" href="/"><img src="images/logo/logo-ekokr.png" alt="logo" /></a>
					<div class="logo-top-navbar__phone">8 (800) 511-88-65</div>
				</div>

				<ul class="menu" id="menu">
					<li><a href="#">Заголовок</a></li>
					<div class="mail">
						<a href="mailto:metallkrasnodar@gmail.com">
							<i class="fas fa-envelope-open-text"></i>
							<span class="mail-content">metallkrasnodar@gmail.com</span>
						</a>
					</div>
					<div class="col-12 top-search">
						<input class="top-search-form top-search-burger" type="text" placeholder="поиск по сайту..." />
					</div>
				</ul>
			</div>
		</div>
	</nav>

	<div class="popup" id="popup"></div>

	<header class="header">
		<div class="top-header">
			<div class="container d-flex wrap-top-header">
				<div class="d-flex city">
					<span class="city__yours">Ваш город:</span>
					<span>Краснодар</span>
				</div>
				<div class="lk">
					<span>Личный кабинет</span>
					<i class="fas fa-arrow-alt-circle-down"></i>
				</div>
			</div>
		</div>

		<div class="container middle-header">
			<div class="row row-middle-header">
				<div class="col-md-5 logo"><img src="images/logo/logo-ekokr.png" alt="logo" /></div>
				<div class="col-md-3 d-flex wrap-middle-header-tel">
					<span class="middle-header-tel"><a href="tel:88005118865">8 (800) 511-88-65</a></span>
					<span class="middle-header-tel-description">Звонок бесплатный 8.30-17.00</span>
				</div>
				<div class="col-11 col-lg-3 basket" id="to-top__top-btn">
					<div class="d-flex basket-description basket-description--mob" id="to-top__bottom-btn">
						<span>корзина</span>
						<span>пусто</span>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container bottom-menu">
			<div class="row bottom-header">
				<nav class="col-md-9 d-flex main-menu">
					<a href="#">Заголовок</a>
				</nav>
				<div class="col-md-3 top-search">
					<input class="top-search-form" type="text" placeholder="поиск по сайту..." />
				</div>
			</div>
		</div>
	</header>
}`)

