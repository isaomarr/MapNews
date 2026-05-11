// Bütün nav linkləri seç
const links = document.querySelectorAll('.nav-link');

// Hansı səhifədəsənsə onu avtomatik aktiv et
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

links.forEach(link => {
    const linkPage = link.getAttribute('href');

    // Əgər link hazırkı səhifədirsə
    if (linkPage === currentPage) {
        link.classList.add('dark:text-violet-600', 'dark:border-violet-600');
        link.classList.remove('dark:border-transparent');
    } else {
        link.classList.remove('dark:text-violet-600', 'dark:border-violet-600');
        link.classList.add('dark:border-transparent');
    }

    // Klikdə də işləsin
    link.addEventListener('click', function () {
        links.forEach(l => {
            l.classList.remove('dark:text-violet-600', 'dark:border-violet-600');
            l.classList.add('dark:border-transparent');
        });

        this.classList.add('dark:text-violet-600', 'dark:border-violet-600');
        this.classList.remove('dark:border-transparent');
    });
});
// Section kartlarin lave olunmasi 

const newsArea = document.getElementById("newsArea");

async function renderNews() {
    let res = await getAllNews()
    renderCards(res.items);

}
renderCards([])
renderNews()
// Send detail page

function sendDetailPage(id) {
    location.replace(`detail.html?id=${id}`)
}


function renderCards(arr) {
    if (!newsArea) return;
    let empty = ''
    if (arr.length == 0) {
        newsArea.classList.remove('grid')
        empty = `<div class="flex items-center justify-center">
            <span class="loading loading-spinner loading-xl"></span>
              </div>`}
    else {
        newsArea.classList.add('grid')
        arr.forEach(item => empty += `<div class="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-cyan-500/20 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl transition-all duration-500 hover:scale-[1.02]">

            <div class="relative h-56 overflow-hidden">
                <img
                    src="${item.thumbnail}"
                    alt="${item.title}"
                    class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <span class="absolute top-4 left-4 rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
                    ${item.category.title}
                </span>

                ${item.isPin ? `
        <span class="absolute top-4 right-4 rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300 backdrop-blur-md">
            📌 Pin
        </span>
        ` : ``}
            </div>

            <div class="p-5">
                <h2 class="line-clamp-2 text-xl font-bold text-white group-hover:text-cyan-300">
                    ${item.title}
                </h2>

                <p class="mt-2 text-sm text-slate-400">
                    /${item.slug}
                </p>

                <p class="mt-3 text-xs text-slate-500">
                    ${new Date(item.createdAt).toLocaleDateString()} • Updated ${new Date(item.updatedAt).toLocaleDateString()}
                </p>

                <div class="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-sm text-slate-300">
                    <div class="flex items-center gap-4">
                        <span>👁️ ${item.views}</span>
                        <span>👍 ${item.like}</span>
                        <span>👎 ${item.dislike}</span>
                    </div>

                    <div >
                        <button onclick="sendDetailPage(${item.id})" class="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:text-white">
                            Read →
                        </button>
                    </div>
                </div>
            </div>

        </div>`


        )
    }

    newsArea.innerHTML = empty
}
