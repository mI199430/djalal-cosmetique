document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            

            alert(`شكرا لك يا ${document.getElementById('name').value}\nتم استلام طلبك بنجاح سنتصل بك قريبا`);
            form.reset();
        });
    }
});

setInterval(() => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    
    function moveElement() {
        let element = document.getElementById("animate");
        let position = 0;
        let id = setInterval(frame, 10);
        
        function frame() {
            if (position == 300) {
                clearInterval(id);
            } else {
                position++;
                element.style.top = position + 'px'; // تحريك لأسفل
                element.style.left = position + 'px'; // تحريك لليمين
            }
        }
    }
    moveElement();
}, 1000);


function toggleMenu() {
    var menu = document.getElementById("myMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
