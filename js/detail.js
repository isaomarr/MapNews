let query = new URLSearchParams(location.search)
let id = query.get("id")
const pageContent = document.getElementById("pageContent")
 async function getNews(id){
    let res = await getComputedStyle(id)
    console.log(res);
    renderPage(res.news)
    
}
getNews()

function renderPage(arg){
   
                pageContent.innerHTML = `<div class="min-h-screen bg-gray-100 py-10">
                            <div class="max-w-5xl mx-auto px-4">

                                <!-- News Card -->
                                <div class="bg-white rounded-3xl shadow-lg overflow-hidden">

                                <!-- Thumbnail -->
                                <div class="relative">
                                    <img
                                    src=
                                    ${arg.thumbnail}
                                    alt="news"
                                    class="w-full h-[400px] object-cover"
                                    />

                                    <!-- Category -->
                                    <span
                                    class="absolute top-5 left-5 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow"
                                    >
                                    Siyasət
                                    </span>
                                </div>

                                <!-- Content -->
                                <div class="p-8">

                                    <!-- Title -->
                                    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-4">
                                    ${arg.title}
                                    </h1>

                                    <!-- Meta -->
                                    <div class="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 border-b pb-5">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"/>
                                        </svg>

                                        <span>09 May 2026</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        👁️ <span>0 Views</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        👍 <span>0</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        👎 <span>0</span>
                                    </div>
                                    </div>

                                    <!-- Article -->
                                    <div class="prose prose-lg max-w-none text-gray-700 leading-8">
                                    <p>
                                        hae gergerghxhjcjk rgthhh rfgd
                                    </p>

                                    <p>
                                      ${arg.content}
                                    </p>

                                    <blockquote class="border-l-4 border-red-500 pl-4 italic text-gray-600">
                                        “Breaking news style quote area for highlighted content.”
                                    </blockquote>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Facilis officia harum doloribus recusandae placeat.
                                    </p>
                                    </div>

                                    <!-- Tags -->
                                    <div class="mt-10 flex flex-wrap gap-3">
                                    <span class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        #news
                                    </span>

                                    <span class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        #politics
                                    </span>

                                    <span class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                                        #world
                                    </span>
                                    </div>

                                </div>
                                </div>

                                <!-- Comments -->
                                <div class="mt-10 bg-white rounded-3xl shadow-lg p-8">
                                <h2 class="text-2xl font-bold mb-6">
                                    Şərhlər (0)
                                </h2>

                                <!-- Empty -->
                                <div class="text-gray-500 text-center py-10 border rounded-2xl">
                                    Hələ şərh yoxdur.
                                </div>

                                <!-- Add Comment -->
                                <div class="mt-8">
                                    <textarea
                                    placeholder="Şərhinizi yazın..."
                                    class="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    rows="5"
                                    ></textarea>

                                    <button
                                    class="mt-4 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-2xl font-semibold"
                                    >
                                    Şərh göndər
                                    </button>
                                </div>
                                </div>

                            </div>
                            </div>`
}
renderPage([])
