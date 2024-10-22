const shareBtn = document.querySelector(".share-button");

// sosyal medya paylaşım kutusunu açıp kapatmak için fonk.
const toggleSocials = () => {
    const socialWrapper = document.querySelector(".socials-wrapper");

    // sosyal medya paylaşım butonunun görünürlüğünü değiştir (aç/kapa)
    socialWrapper.classList.toggle("active");


}

shareBtn.addEventListener("click", toggleSocials);
