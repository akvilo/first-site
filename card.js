const productsBlock = document.querySelector('.products_blocks')
const cardShop = document.querySelector('.product_block')
const pickFavorite = document.getElementById('button_to_cart')
const listUserFavorite = document.getElementById('favorite-user-cards')
const listCards = document.getElementById('products_blocks')


let cards = [
    {
        number: 1,
        price: 1800,
        indexCard: null
    },
    {
        number: 2,
        price: 1880,
        indexCard: null
    },
    {
        number: 3,
        price: 2300,
        indexCard: null

    },
    {
        number: 4,
        price: 1500,
        indexCard: null

    }
]

function renderCards() {
    listCards.innerHTML = ''
    for (let i = 0; i < cards.length; i++) {
        console.log(`Карточка ${i + 1} загружена`)
        listCards.insertAdjacentHTML('beforeend', getCard(cards[i].price, i))
        cards[i].indexCard = i
    };
}

renderCards()

function getCard(price,cardIndex) {
    return`
            <div class="product_block">
            <div class="product_block_1">
                <div class="product_block_city_year">
                    <span class = "product_block_text_3">
                        <img src="images/card/city.svg" alt="City">
                        Киев
                    </span>
                    <span class = "product_year_text">Год:</span>
                    <span class = "product_block_text_3">2025</span>
                </div>
                <div class="product_block_country">
                    <a href="supplier.html" class = "product_block_photo_company" >
                        <img src="images/card/company_shipshina.svg" alt="company ship shina">
                    </a>
                    <span class = "product_block_country_text">Страна:</span>
                    <img class = "product_block_flag_country" src="images/card/flag_ua.svg" alt="Flag Ukraine">
                </div>
                <div class="product_block_guarantee">
                    <span class = "product_block_text_3">Показать телефон</span>
                    <span class = "product_block_text_3">Гарантия</span>
                    <span class = "product_block_text_3" id = "product_guarantee">Есть</span>
                </div>
            </div>
            <div class="product_block_2">
                <div class="product_block_overlay">
                    <span class = "product_block_text_2">Наложка</span>
                    <span class = "product_block_text_2">Нет</span>
                </div>
                <div class="product_block_installment">
                    <span class = "product_block_text_2">Расрочка</span>
                    <span class = "product_block_text_2">Да</span>
                </div>
                <div class="product_block_VAT">
                    <span class = "product_block_text_2">НДС:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
            </div>
            <div class="product_block_3">
                <div class="product_block_delivery">
                    <span class = "product_block_text_2">Доставка:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
                <div class="product_block_return">
                    <span class = "product_block_text_2">Возврат:</span>
                    <span class = "product_block_text_2">14 дней</span>
                </div>
                <div class="product_block_tire_service">
                    <span class = "product_block_text_2">Шиномонтаж:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
            </div>
            <div class="product_block_buy">
                <div class = "product_block_buy_left_side">
                    <span class = "block_buy_cost">${price} грн</span>
                    <span class = "block_buy_in_stock">Доступно 8шт</span>
                    <div class = "block_buy_cost_delivery">
                        <span>Цена с доставкой</span>
                    </div>
                </div>
                <div class = "product_block_buy_right_side">
                    <div class = "button_in_shop">В магазин</div>
                    <div class = "button_fast_buy"">Быстрый заказ</div>
                    <div id = "button_to_cart" data-index = "${cardIndex}" onclick = 'cardToFavorite(${price})'>В корзину</div>
                </div>
            </div>
        </div>`
}

const favorites = []

let indexFavorite = favorites.length;

cardToFavorite = function(price) {
    favorites.push({i: indexFavorite, price: price})
    renderFavorite(price)
}

function renderFavorite(favoritePrice) {
    listUserFavorite.innerHTML = '';
    for (let i = 0; i <favorites.length; i++) {
        listUserFavorite.insertAdjacentHTML('beforeend', getFavoriteUser(favoritePrice, i))
    }
    
    const userCart = document.getElementById('favorite-header-text')
    if (favorites.length != 0) {
        userCart.style.display = 'flex'
    }
    else {
        userCart.style.display = 'none'
    }
}

renderFavorite()

function getFavoriteUser(favoritePrice, favoriteIndex) {
    
    return`
           <div class="product-favorite-block">
            <div class="product_block_1">
                <div class="product_block_city_year">
                    <span class = "product_block_text_3">
                        <img src="images/card/city.svg" alt="City">
                        Киев
                    </span>
                    <span class = "product_year_text">Год:</span>
                    <span class = "product_block_text_3">2025</span>
                </div>
                <div class="product_block_country">
                    <a href="supplier.html" class = "product_block_photo_company" >
                        <img src="images/card/company_shipshina.svg" alt="company ship shina">
                    </a>
                    <span class = "product_block_country_text">Страна:</span>
                    <img class = "product_block_flag_country" src="images/card/flag_ua.svg" alt="Flag Ukraine">
                </div>
                <div class="product_block_guarantee">
                    <span class = "product_block_text_3">Показать телефон</span>
                    <span class = "product_block_text_3">Гарантия</span>
                    <span class = "product_block_text_3">Есть</span>
                </div>
            </div>
            <div class="product_block_2">
                <div class="product_block_overlay">
                    <span class = "product_block_text_2">Наложка</span>
                    <span class = "product_block_text_2">Нет</span>
                </div>
                <div class="product_block_installment">
                    <span class = "product_block_text_2">Расрочка</span>
                    <span class = "product_block_text_2">Да</span>
                </div>
                <div class="product_block_VAT">
                    <span class = "product_block_text_2">НДС:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
            </div>
            <div class="product_block_3">
                <div class="product_block_delivery">
                    <span class = "product_block_text_2">Доставка:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
                <div class="product_block_return">
                    <span class = "product_block_text_2">Возврат:</span>
                    <span class = "product_block_text_2">14 дней</span>
                </div>
                <div class="product_block_tire_service">
                    <span class = "product_block_text_2">Шиномонтаж:</span>
                    <span class = "product_block_text_2">Есть</span>
                </div>
            </div>
            <div class="product_block_buy">
                <div class = "product_block_buy_left_side">
                    <span class = "block_buy_cost">${favorites[favoriteIndex].price} грн</span>
                    <span class = "block_buy_in_stock">Доступно 8шт</span>
                    <div class = "block_buy_cost_delivery">
                        <span>Цена с доставкой<span>
                    </div>
                </div>
                <div class = "product-block-favorite-right-side"</div>
                <button class = "favorite-btn-buy" data-index = '${favoriteIndex}' data-type = "buy">Приобрести</button>
                <button class = "remove-btn-buy" data-index = '${favoriteIndex}' data-type = "remove">Убрать</button>
            </div>
        </div>
    `
}

listUserFavorite.onclick = function(event) {
    if (event.target.dataset.index) {
        
        const index = +(event.target.dataset.index)
        const type = (event.target.dataset.type)
        console.log(index, type)

        if (type === 'buy') {
            console.log('тут должно быть окошко с покупкой')
        }
        else if (type === 'remove') {
            console.log(`обьект ${index} удалён`)
            favorites.splice(index, 1)
        }
        renderFavorite()
    }
}

const btnTabShop = document.getElementById('product_slot_2')
const btnTabInformation = document.getElementById('product_slot_3')
const btnTabReview = document.getElementById('product_slot_4')

const productSelector = [btnTabShop, btnTabInformation, btnTabReview]

productSelector.forEach(btn => {
    btn.onclick = function() {
        
        const showLine = function() {
            btnTabInformation.style.setProperty('--after-display', 'none')
            btnTabReview.style.setProperty('--after-display', 'none')
            btnTabShop.style.setProperty('--after-display', 'none')
            btn.style.setProperty('--after-display', 'block')
        }

        const productBlock = document.getElementById('products_blocks')
        const sortingBlock = document.querySelector('.sorting_block')
        const informationBlock = document.getElementById('information-block')
        const reviewBlock = document.getElementById('review-block')

        const showProductSortingBlock = function() {
            productBlock.style.display = 'flex'
            sortingBlock.style.display = 'flex'
            informationBlock.style.display = 'none'
            reviewBlock.style.display = 'none'
            showLine()
        }

        const showPageInformation = function() {
            informationBlock.style.display = 'flex'
            productBlock.style.display = 'none'
            sortingBlock.style.display = 'none'
            reviewBlock.style.display = 'none'
            showLine()
        }

        const showPageReviewBlock = function() {
            reviewBlock.style.display = 'flex'
            productBlock.style.display = 'none'
            sortingBlock.style.display = 'none'   
            informationBlock.style.display = 'none'
            showLine() 
        }
        
        if (btn === btnTabShop) {
            showProductSortingBlock()
        }
        else if (btn === btnTabInformation) {
            showPageInformation()
        }
        else if (btn === btnTabReview) {
            showPageReviewBlock()
        }
    }
})

const inputUserReview = document.getElementById('user-feedback-input')
const btnInputUserReview = document.getElementById('send-feedback')
const listReview = document.getElementById('review-block-wrapper')
const allReviews = [
    {
        name: 'Иван',
        text: `
        Одним из приоритетных направлений развития компании Nokian является производство шин позволяющих повысить безопасность вождения. 
        Из-за своих ходовых качеств, резина Нокиан пользуется большим спросом на территории Украины. 
        Плюсы:
        Широкий выбор моделей и размеров шин
        Долговечность
        Отсутствие эффекта аквапланирования
        Низкий уровень шума
        `
    }
]
let indexReview = allReviews.length

function renderReview() {
    listReview.innerHTML = '';
    for(let i = 0; i < allReviews.length; i++) {
        listReview.insertAdjacentHTML('beforeend', getReviewTemplate(allReviews[i], i))
    }
}
renderReview()


btnInputUserReview.onclick = function() {
    if (userData.name != null) {
        btnInputUserReview.style.display = 'none';
        inputUserReview.style.display = 'none';
        const newReview = {
            name: userData.name,
            text: inputUserReview.value
        }
        listReview.insertAdjacentHTML('beforeend', getReviewTemplate(newReview))
        allReviews.push(newReview)
        indexReview++
    }
    else {
        openRegWindow()
    }
    renderReview()
}


function getReviewTemplate(review, reviewIndex) {
    return `       
    <div id="user-review" data-index = "${reviewIndex}">             
        <div class="user-review-header">
            <p id = "user-review-name">${review.name}
            <time datetime="2025-04-23">23 апреля 2025</time>
            </p>
        </div>
        <span>${review.text}
        </span>
        <hr>
    </div>`
}
const btnSortSelector = document.querySelector('.sorting-selector-pick')
const sortingList = document.getElementById('sorting-list')

btnSortSelector.onclick = function(){
    if (sortingList.style.display === 'none') {
        sortingList.style.display = 'flex'
    }
    else {
        sortingList.style.display = 'none'
    }
}

const btnSortPopularity = document.getElementById('sorting-slot-1')
const btnSortPriceByExpensive = document.getElementById('sorting-slot-2')
const btnSortPriceByCheap = document.getElementById('sorting-slot-3')
const btnSortInputPrice = document.getElementById('sorting-slot-4')
const inputSortPrice = document.getElementById('sorting-slot-4-input')

const allBtnSort = [btnSortPopularity, btnSortPriceByExpensive, btnSortPriceByCheap, btnSortInputPrice]

allBtnSort.forEach(btn => 
    btn.onclick = function() {
    if (btn === btnSortPopularity) {
        console.log('a')
    }
    else if (btn === btnSortPriceByExpensive) {
        cards = cards.sort((a, b) => b.price - a.price)
    }
    else if (btn === btnSortPriceByCheap) {
        cards = cards.sort((a, b) => a.price - b.price)
    }
    else if (btn === btnSortInputPrice) {
        if (inputSortPrice.style.display = 'none') {
            btnSortInputPrice.style.display = 'none'
            inputSortPrice.style.display = 'flex'
        }
        else {
            btnSortInputPrice.style.display = 'flex'
            inputSortPrice.style.display = 'none'
        }
    }
    renderCards()
})
