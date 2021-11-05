var navbar = document.querySelector(".navbar");
        var menuBtn = document.querySelector(".menu-btn");
        
        const toggleNav = (e) => {
            navbar.classList.toggle("active");
        }

        menuBtn.addEventListener("click", toggleNav);

        var modal = document.querySelector(".modal");
        var buyBtns = document.querySelectorAll(".tour__card .btn");
        var closeModalBtn = document.querySelector(".modal__close");
        console.log("🚀 ~ file: index.html ~ line 242 ~ closeModalBtn", closeModalBtn)

        const openModal = () => {
            modal.classList.add("active");
        }

        const closeModal = () => {
            modal.classList.remove("active");
        }

        for (var buyBtn of buyBtns) {
            buyBtn.addEventListener("click", openModal);
        }

        closeModalBtn.addEventListener("click", closeModal);