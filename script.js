document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const handleScroll = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add("visible");
                item.classList.remove("hidden");
            } else {
                item.classList.remove("visible");
                item.classList.add("hidden");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});
