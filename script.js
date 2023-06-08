document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");
    const resetBtn = document.getElementById("resetBtn");
    const successMessage = document.getElementById("successMessage");

    let draggingItem = null;

    // Function to register draggable items
    function registerDraggableItems() {
        const items = document.querySelectorAll(".item");

        items.forEach(item => {
            // Event listener for drag start event
            item.addEventListener("dragstart", function () {
                draggingItem = item;
                // Hide the item being dragged
                setTimeout(() => item.style.display = "none", 0);
                item.classList.add("dragging");
            });

            // Event listener for drag end event
            item.addEventListener("dragend", function () {
                // Show the item after drag ends
                setTimeout(() => item.style.display = "", 0);
                item.classList.remove("dragging");
            });
        });
    }

    // Function to register drop containers
    function registerDropContainers() {
        containers.forEach(container => {
            // Event listener for drag over event
            container.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            // Event listener for drag enter event
            container.addEventListener("dragenter", function (e) {
                e.preventDefault();
                container.classList.add("highlight");
            });

            // Event listener for drag leave event
            container.addEventListener("dragleave", function () {
                container.classList.remove("highlight");
            });

            // Event listener for drop event
            container.addEventListener("drop", function () {
                container.appendChild(draggingItem);
                container.classList.remove("highlight");
                draggingItem = null;
                showSuccessMessage();
            });
        });
    }

    // Function to show success message
    function showSuccessMessage() {
        successMessage.style.opacity = 1;
        successMessage.style.pointerEvents = "auto";

        setTimeout(function () {
            successMessage.style.opacity = 0;
            successMessage.style.pointerEvents = "none";
        }, 2000);
    }

    // Initial registration of draggable items and drop containers
    registerDraggableItems();
    registerDropContainers();

    // Event listener for reset button click event
    resetBtn.addEventListener("click", function () {
        // Reset the contents of container 1
        containers[0].innerHTML = `
        <h2>Container 1</h2>
        <div class="item" draggable="true">
            <img src="images/georgi-kalaydzhiev-neF7gKk9708-unsplash.jpg" alt="Image 1">
            <span class="item-text"></span>
        </div>
        <div class="item" draggable="true">
            <img src="images/neom-i60yUhfWeYI-unsplash.jpg" alt="Image 2">
            <span class="item-text"></span>
        </div>
        <div class="item" draggable="true">
            <i class="fas fa-cube"></i>
            <span class="item-text">Item 1</span>
        </div>
        <div class="item" draggable="true">
            <i class="fas fa-star"></i>
            <span class="item-text">Item 2</span>
        </div>
        <div class="item" draggable="true">
            <i class="fas fa-heart"></i>
            <span class="item-text">Item 3</span>
        </div>
        <div class="item" draggable="true">
            <i class="fas fa-smile"></i>
            <span class="item-text">Item 4</span>
        </div>
        <div class="item" draggable="true">
            <i class="fas fa-lightbulb"></i>
            <span class="item-text">Item 5</span>
        </div>

        <div class="item" draggable="true">

            <span class="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci nam ex quia
                eius mollitia, natus itaque facere commodi numquam, soluta at assumenda corporis maiores nemo, quam
                voluptatum voluptas dicta.</span>
        </div>
        <div class="item" draggable="true">

            <span class="item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non asperiores, unde eius
                repellendus itaque reiciendis architecto porro eligendi eum incidunt cumque explicabo consequatur
                pariatur sequi dolor doloribus debitis dolores vitae perspiciatis! Sunt, explicabo minima! Quibusdam
                vitae blanditiis, asperiores fugit soluta, quod ducimus doloremque, perferendis eveniet quisquam libero
                nam. Consectetur optio dicta, natus blanditiis sint doloremque obcaecati?</span>
        </div>
      `;

        // Reset the contents of container 2
        containers[1].innerHTML = "<h2>Container 2</h2>";

        // Re-register draggable items and drop containers
        registerDraggableItems();
        registerDropContainers();
    });
});





