const newsTable = document.getElementById("newsTable");
const addNewsForm = document.getElementById("addNewsForm")
const inputs = addNewsForm.querySelectorAll('input, textarea,selecet')
addNewsForm.onsubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    

}

const getNews = async () => {
    let res = await getAllNews()
    renderNewsTable(res.items)
}
getNews()
const categorySelect = document.getElementById("categorySelect")
async function getCategory (){
    let data = await getAllCategory()
    renderCategorySelect(data)
}
getCategory()

function renderCategorySelect(arr){
    let empty = ""
    arr.map(item => empty += `
        <option value="${item.id}">${item.title}</option>
       
        `)
        categorySelect.innerHTML += empty
}
renderCategorySelect()
function renderNewsTable(arr) {
    if (arr.length === 0) {
        newsTable.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-gray-400">Məlumat tapılmadı.</td></tr>`;
        return;
    }

    let empty = "";
    
    arr.map(item => {
        const createdAt = new Date(item.createdAt).toLocaleDateString('az-AZ');
        const updatedAt = new Date(item.updatedAt).toLocaleDateString('az-AZ');

        empty += `
        <tr class="hover:bg-gray-50/80 transition-colors">
            <td class="px-6 py-5">
                <div class="flex items-center gap-4">
                    <div class="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100">
                        <img class="h-full w-full object-cover" 
                             src="${item.thumbnail}" 
                             alt="${item.title}" />
                    </div>
                    <div class="flex flex-col min-w-0">
                        <span class="font-bold text-gray-800 text-base truncate">${item.title}</span>
                        <span class="text-xs text-gray-400 mt-1 flex items-center">
                            <i class="fa-solid fa-link mr-1 text-[10px]"></i> ${item.slug}
                        </span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-5 text-center">
                <span class="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 uppercase tracking-tight">
                    <i class="fa-solid fa-landmark text-[10px]"></i> ${item.category?.title || 'Kateqoriya yoxdur'}
                </span>
            </td>
            <td class="px-6 py-5">
                <div class="flex justify-center gap-4 text-sm">
                    <div class="flex items-center gap-1.5 text-emerald-600">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span class="font-bold">${item.like}</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-rose-500">
                        <i class="fa-solid fa-thumbs-down"></i>
                        <span class="font-bold">${item.dislike}</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-blue-400">
                        <i class="fa-solid fa-eye"></i>
                        <span class="font-bold">${item.views}</span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-5">
                <div class="flex flex-col items-center gap-1 text-[11px]">
                    <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded flex items-center">
                        <i class="fa-regular fa-calendar-check mr-1.5 opacity-60"></i> ${createdAt}
                    </span>
                    <span class="text-gray-400 flex items-center italic">
                        <i class="fa-solid fa-rotate mr-1 text-[9px]"></i> ${updatedAt}
                    </span>
                </div>
            </td>
            <td class="px-6 py-5 text-right">
                <div class="flex justify-end gap-3">
                    <button class="${item.isPin ? 'text-amber-500' : 'text-gray-400'} hover:text-amber-600 transition-colors">
                        <i class="fa-solid fa-thumbtack text-lg"></i>
                    </button>
                    <button class="text-gray-400 hover:text-blue-500 transition-colors">
                        <i class="fa-solid fa-pen-to-square text-lg"></i>
                    </button>
                    <button class="text-gray-400 hover:text-rose-500 transition-colors">
                        <i class="fa-solid fa-trash-can text-lg"></i>
                    </button>
                </div>
            </td>
        </tr>`;
    });
    newsTable.innerHTML = empty;
}


