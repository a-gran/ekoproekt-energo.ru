document.write(`{
	<footer class="footer">
	<div class="footer__top-notch"></div>
	<div class="footer__left-bevel"></div>
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-6 col-lg-3 footer__socials">
				<h4 class="footer__header">Мы в социальных сетях</h4>
				<div class="footer-icons">
					<a href="https://www.instagram.com/solarcenter23/" target="_blank"><i
							class="fab fa-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCpbSAPiG2hhI_3c2Z25x9TA/" target="_blank"><i
							class="fab fa-youtube-square"></i></a>
					<a href="https://www.facebook.com/solarcenter23/" target="_blank"><i
							class="fab fa-facebook-square"></i></a>
					<a href="https://vk.com/ekoproekt.energo" target="_blank"><i class="fab fa-vk"></i></a>
					<a href="http://ekoproekt-energo.ru/zen" target="_blank"><img
							src="site/img/socials/yzen-2.svg" /></a>
					<a href="https://rutube.ru/channel/26120951/" target="_blank">
						<img class="social" src="site/img/socials/rutube-3.svg" alt="rutube" /></a>
				</div>

				<!-- Button trigger modal -->
				<button type="button" class="btn-msg" data-bs-toggle="modal" data-bs-target="#modal">
					Отправить сообщение
				</button>

			</div>

			<!-- Modal -->
			<!-- Modal -->
			<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div class="modal-content">
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						<div class="modal-body">
							<div class="modal-form-appeal">
								<form class="col col-form ajax_form" action="" method="post">
									<h4 class="modal-msg__header">
										Наши сотрудники оперативно обработают Ваше обращение и ответят по указанным
										контактам в
										минимальные сроки!
									</h4>
									<div class="form-group">
										<input id="name" name="name" type="text" class="form-control" value=""
											placeholder="Имя или название организации" required />
									</div>
									<div class="form-group">
										<input type="email" id="email" name="email" value="" class="form-control"
											placeholder="Контактный EMAIL" />
									</div>
									<div class="form-group">
										<input type="tel" id="phone" name="phone" value="" class="form-control"
											placeholder="Контактный номер телефона" required />
									</div>
									<div class="form-group">
										<textarea class="form-control" id="message" name="message" rows="3"
											placeholder="Текст сообщения"></textarea>
									</div>
									<div class="checkbox">
										<label>
											<input type="checkbox" id="checkbox" name="checkbox" /> Даю согласие на
											обработку
											персональных данных в соответствии с
											<a href="/policy" class="policy-link">политикой конфиденциальности</a>
										</label>
									</div>
									<button type="submit" value="submit" class="btn btn-primary">Отправить</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-3 footer__category">
				<h4 class="footer__header">Категории</h4>
				<nav>
					<a href="#">Солнечные панели</a>
					<a href="#">Солнечные водонагреватели</a>
					<a href="#">Солнечные электростанции</a>
					<a href="#">Крепления для солнечных панелей</a>
					<a href="#">Инверторы</a>
					<a href="#">Аккумуляторы</a>
				</nav>
			</div>

			<div class="col-12 col-md-6 col-lg-2 footer__navigation">
				<h4 class="footer__header">Навигация</h4>
				<nav>
					<a href="#">Сервисный центр</a>
					<a href="#">Оплата и доставка</a>
					<a href="#">Вакансии</a>
					<a href="#">Блог</a>
					<a href="#">Монтаж</a>
					<a href="#">Контакты</a>
				</nav>
			</div>

			<div class="col-12 col-md-6 col-lg-3 footer__contact-info">
				<h4 class="footer__header">Контактная информация</h4>
				<span>ООО "ЭКОПРОЕКТ-ЭНЕРГО"</span>
				<div class="contact-info">
					<div class="wr-contacts">
						<span><i class="fa fa-location-arrow"></i>г. Краснодар, ул. Василия Мачуги 128 </span>
						<span><a href="tel:+78612375907"><i class="fa fa-phone"></i>+7 (861) 237-59-07</a></span>
						<span>
							<a href="mailto:ekoproekt.energo@gmail.com">
								<i class="fa fa-envelope"></i>ekoproekt.energo@gmail.com</a>
						</span>
						<span><i class="fas fa-clock"></i>ПН - ПТ 8.30 - 17.00</span>
					</div>
					<iframe src="https://yandex.ru/sprav/widget/rating-badge/66568250435" width="150" height="50"
						frameborder="0">
					</iframe>
				</div>
			</div>
		</div>

		<div class="row row-copy">
			<div class="copy col-12">
				<div>
					<a id="to-top" href="#to-top__top-btn">
						<i class="fa fa-chevron-up"></i>
					</a>
				</div>
				<div class="text-right">
					<span>Вся информация, указанная на сайте, включая цены, носит информационный характер и не является
						публичной офертой. 2014-2022 Экопроект-Энерго</span>
				</div>
			</div>
		</div>
		<div class="row text-right-mob">
			<a href="#to-top__bottom-btn"><i class="fas fa-angle-double-up"></i></a>
			<span>Вся информация, указанная на сайте, включая цены, носит информационный характер и не является
				публичной офертой. 2014-2022 Экопроект-Энерго</span>
		</div>
	</footer>

	<script src="js/jquery-3.6.0.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/burger.js"></script>
	<script src="js/sert.js"></script>
	<script src="js/objects.js"></script>
	<script src="js/tabs.js"></script>
	</body>

	<a class="whatsapp-link" href="https://api.whatsapp.com/send?phone=79184388764" target="_blank" rel="noopener noreferrer">
		<div type="button" class="whatsapp-button">
			<div class="text-button">
				<i class="fab fa-whatsapp"></i>
				<span>WhatsApp</span>
			</div>
		</div>
	</a>
}`)