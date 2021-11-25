import './Menu.css';

function Menu(){
    return(
        <div class="menu">
		<div class="container menu__container">
			<div class="catalog">
				<div class="catalog__wrapper">
					<div class="catalog__header"><span>Категории</span><i class="fa fa-bars catalog__header-icon"></i></div>
					<ul class="catalog__list">
						<li class="catalog__item">
							<a href="/" class="catalog__link">
								Музыкальные инструменты
							</a>
							<div class="catalog__subcatalog">
								<a href="/" class="catalog__subcatalog-link">Электронные (1050)</a>
								<a href="/" class="catalog__subcatalog-link">Акустические (454656)</a>
							</div>							
						</li>
									
						<li class="catalog__item">
							<a href="/" class="catalog__link">Винил</a>
							<div class="catalog__subcatalog">
								<a href="/" class="catalog__subcatalog-link">Весь каталог (158976)</a>
								<a href="/" class="catalog__subcatalog-link"> Популярные релизы</a>
								<a href="/" class="catalog__subcatalog-link">Жанры (41)</a>	
								<a href="" class="catalog__subcatalog-link">Стили (30)</a>	
								<a href="" class="catalog__subcatalog-link">Скидки</a>				
							</div>
						</li>			
						<li class="catalog__item">
							<a href="/" class="catalog__link">Кассеты</a>
								<div class="catalog__subcatalog">
									<a href="/" class="catalog__subcatalog-link">Весь каталог (158)</a>
									<a href="/" class="catalog__subcatalog-link"> Популярные релизы</a>
									<a href="/" class="catalog__subcatalog-link">Жанры (10)</a>	
									<a href="" class="catalog__subcatalog-link">Стили (8)</a>	
									<a href="" class="catalog__subcatalog-link">Скидки</a>				
								</div>
						</li>			
						<li class="catalog__item">
							<a href="/" class="catalog__link">Проигрыватели</a>
						</li>			
						<li class="catalog__item">
							<a href="/" class="catalog__link">Компоненты для проигрывателей</a>
						</li>			
						<li class="catalog__item">
							<a href="/" class="catalog__link">Другое</a>
								<div class="catalog__subcatalog">
									<a href="/" class="catalog__subcatalog-link">Магнитофоны</a>
									<a href="/" class="catalog__subcatalog-link"> Наушники</a>
									<a href="/" class="catalog__subcatalog-link"> Кабели </a>	
									<a href="" class="catalog__subcatalog-link">CD</a>	
									<a href="" class="catalog__subcatalog-link">Скидки</a>				
								</div>
						</li>			
					</ul>
				</div>
			</div>	

            
            		
		</div>
        <div class="Zhepa">
            <div class="product-item">
                <img src="https://cdn1.ozone.ru/s3/multimedia-u/c1200/6015242178.jpg"/>
                    <div class="product-list">
                        <h3>dleks</h3>
                        <span class="price">₽ 1999</span>
                        <a href="" class="button">В корзину</a>
                    </div>
                </div>
                <div class="product-item">
                <img src="https://cdn1.ozone.ru/s3/multimedia-u/c1200/6015242178.jpg"/>
                    <div class="product-list">
                        <h3>dleks</h3>
                        <span class="price">₽ 1999</span>
                        <a href="" class="button">В корзину</a>
                    </div>
                </div>
                <div class="product-item">
                <img src="https://cdn1.ozone.ru/s3/multimedia-u/c1200/6015242178.jpg"/>
                    <div class="product-list">
                        <h3>dleks</h3>
                        <span class="price">₽ 1999</span>
                        <a href="" class="button">В корзину</a>
                    </div>
                </div>
            </div>
	</div>	
    );
}

export default Menu