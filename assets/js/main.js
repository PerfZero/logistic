document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector(".dropbtn");
    var content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", function () {
      var isVisible = content.style.display === "block";
      closeAllDropdowns();
      if (!isVisible) {
        content.style.display = "block";
      }
    });
  });

  function closeAllDropdowns() {
    var dropdownContents = document.querySelectorAll(".dropdown-content");
    dropdownContents.forEach(function (content) {
      content.style.display = "none";
    });
  }

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      closeAllDropdowns();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const dropdowns = document.querySelectorAll(
    ".nav .dropdown .dropbtn, .contact-cont .contat .dropdown .dropbtn"
  );

  let activeDropdown = null;

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function () {
      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown = dropdown;
        header.classList.add("header-active");
      } else {
        header.classList.toggle("header-active");
      }
      activeDropdown = dropdown;
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !header.contains(event.target) &&
      !event.target.classList.contains("dropbtn")
    ) {
      header.classList.remove("header-active");
      activeDropdown = null;
    }
  });
});

document.querySelectorAll(".product-types__item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    const imgElement = document.querySelector(".product-types__image");
    const newColor = item.getAttribute("data-color");
    imgElement.style.backgroundColor = newColor;
  });

  item.addEventListener("mouseout", () => {
    const imgElement = document.querySelector(".product-types__image");
    imgElement.style.backgroundColor = "#cccccc"; // исходный цвет
  });
});

  // Функция для отображения информации об объекте
  function showInfo(objectId) {
    const infoTitle = document.getElementById("info-title");
    const infoDescription = document.getElementById("info-description");
    const infoParam = document.getElementById("info-param");

    if (objectId === "object1") {
      infoParam.innerHTML = "Поставка «под ключ»";
      infoTitle.innerHTML = "Станки для обработки металла Siemens";
      infoDescription.innerHTML = "Летом 2022 года в компанию обратился клиент с запросом вывезти из Швейцарии оборудование для фабрики.<br>Особенность ситуации состояла в том, что в течение 4 месяцев, в связи с введением европейских санкций, груз клиенту не отдавали, а деньги за него уже были заплачены";
    } else if (objectId === "object2") {
      infoParam.innerHTML = "Поставка «под ключ»";
      infoTitle.innerHTML = "Объект 2";
      infoDescription.innerHTML = "Описание объекта 2.";
    } else if (objectId === "object3") {
      infoParam.innerHTML = "Поставка «под ключ»";
      infoTitle.innerHTML = "Объект 3";
      infoDescription.innerHTML = "Описание объекта 3.";
    } else if (objectId === "object4") {
      infoParam.innerHTML = "Поставка «под ключ»";
      infoTitle.innerHTML = "Объект 4";
      infoDescription.innerHTML = "Описание объекта 4.";
    } else if (objectId === "object5") {
      infoParam.innerHTML = "Поставка «под ключ»";
      infoTitle.innerHTML = "Объект 5";
      infoDescription.innerHTML = "Описание объекта 5.";
    }

    // Убираем активный класс у всех маркеров
    const markers = document.querySelectorAll(".marker");
    markers.forEach(marker => marker.classList.remove("active"));

    // Добавляем активный класс к нажатому маркеру
    const activeMarker = document.querySelector(`.marker[onclick="showInfo('${objectId}')"]`);
    if (activeMarker) {
      activeMarker.classList.add("active");
    }
  }

  // Показываем информацию о первом объекте при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    showInfo('object1');
  });


  document.addEventListener('DOMContentLoaded', function() {
    const callbackBtn = document.querySelector('.callback');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    // Открытие бокового меню и оверлея при клике на кнопку "Связаться"
    callbackBtn.addEventListener('click', function() {
      sideMenu.style.transform = 'translateX(0)';
      overlay.style.display = 'block';
      closeBtn.style.opacity = '1';
      setTimeout(() => overlay.style.opacity = '1', 10); // Небольшая задержка для плавного перехода
    });

    // Закрытие бокового меню и оверлея при клике на кнопку закрытия
    closeBtn.addEventListener('click', function() {
      sideMenu.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      closeBtn.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 500); // Скрыть оверлей после завершения перехода
    });

    // Закрытие бокового меню и оверлея при клике вне их
    overlay.addEventListener('click', function(event) {
      sideMenu.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      closeBtn.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 500);
    });
  });

  

  document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    var firstBar = document.querySelector('.burger-menu .bar:nth-child(1)');
    var secondBar = document.querySelector('.burger-menu .bar:nth-child(2)');
    
    menu.classList.toggle('show-menu');
    
    // Поворот первой полоски на 45 градусов и второй на -45 градусов при клике
    firstBar.classList.toggle('rotate');
    secondBar.classList.toggle('rotate-minus');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var mobileItems = document.querySelectorAll('.mobile-item');

    mobileItems.forEach(function (item) {
        var arrow = item.querySelector('.arrow'); // Находим элемент стрелки в каждом .mobile-item
        var submenu = item.querySelector('.submenu'); // Находим подменю в каждом .mobile-item

        item.addEventListener('click', function (event) {
            // Закрываем предыдущее открытое подменю
            closeAllSubmenus();

            // Открываем или закрываем текущее подменю
            if (submenu) {
                submenu.classList.toggle('active'); // Переключаем класс .active для подменю
                arrow.classList.toggle('active'); // Переключаем класс .active для стрелки
            }
        });
    });

    // Закрытие всех подменю
    function closeAllSubmenus() {
        mobileItems.forEach(function (item) {
            var submenu = item.querySelector('.submenu');
            if (submenu && submenu.classList.contains('active')) {
                submenu.classList.remove('active');
                item.querySelector('.arrow').classList.remove('active');
            }
        });
    }

    // Закрытие всех подменю при клике в любом месте страницы
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.mobile-item')) {
            closeAllSubmenus();
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 1.1,  // Количество слайдов, видимых одновременно
    spaceBetween: 10,  // Расстояние между слайдами
    // Добавьте другие опции по необходимости
    navigation: {
      nextEl: '.swiper-button-next',  // Кнопка "следующий слайд"
      prevEl: '.swiper-button-prev',  // Кнопка "предыдущий слайд"
    },
  });
});




document.getElementById('menu-toggle').addEventListener('click', function() {
  var body = document.body;
  body.classList.toggle('no-scroll'); // Toggle the 'no-scroll' class on body

  // Toggle the active class on the menu toggle button
  this.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const selectTriggers = document.querySelectorAll('.custom-select__trigger');

  selectTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const select = this.parentElement;
      select.classList.toggle('open');
    });
  });

  const customOptions = document.querySelectorAll('.custom-option');

  customOptions.forEach(option => {
    option.addEventListener('click', function() {
      const select = this.closest('.custom-select');
      const trigger = select.querySelector('.custom-select__trigger span');
      trigger.textContent = this.textContent;
      select.classList.remove('open');
      select.querySelector('.custom-option.selected')?.classList.remove('selected');
      this.classList.add('selected');
    });
  });

  document.addEventListener('click', function(e) {
    const isClickInside = e.target.closest('.custom-select');
    if (!isClickInside) {
      document.querySelectorAll('.custom-select.open').forEach(select => {
        select.classList.remove('open');
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          lazyImage.classList.add("lazyloaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback для старых браузеров
    let lazyLoad = function() {
      let scrollTop = window.pageYOffset;
      lazyImages.forEach(function(img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove('lazyload');
          img.classList.add('lazyloaded');
        }
      });

      if (lazyImages.length == 0) {
        document.removeEventListener("scroll", lazyLoad);
        window.removeEventListener("resize", lazyLoad);
        window.removeEventListener("orientationchange", lazyLoad);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
});