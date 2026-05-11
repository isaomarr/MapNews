const list = document.querySelectorAll("#list li");
const pages = document.querySelectorAll("#pages > div");

list.forEach(item => {
    item.addEventListener('click', function(e) {
      
        const targetId = this.querySelector('a').getAttribute('href').replace('#', '');
        
    
        pages.forEach(page => {
            page.classList.add('hidden');
        });

      
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            
           
            if (targetId === 'news' || targetId === 'newsArea') {
                renderNews(); 
            }
        }
    });
});

const loaderModal = document.getElementById("loaderModal")
function globalLoaderState (arr) {
    if (!loaderModal) return;
    if (arr) {
        loaderModal.classList.remove('hidden')
    }
    else {
        loaderModal.classList.add('hidden')
        

    }

}
globalLoaderState(false)