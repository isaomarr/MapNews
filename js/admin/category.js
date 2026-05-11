const categoryTable = document.getElementById("categoryTable")
async function getCategory  () {
    let data = await getAllCategory()
    console.log(data);
    renderCategory(data)
    
}
getCategory()

function renderCategory(arr) {
    let empty = ""
    arr.map((item, index) => empty+=`
                         <tr class="hover:bg-cyan-500/[0.02] transition-colors group">
                                            <td
                                                class="px-8 py-6 font-mono text-cyan-600 font-bold tracking-tighter text-xs">
                                                ${index + 1}
                                            </td>
                                            <td class="px-8 py-6">
                                                <div class="flex items-center gap-3">
                                                    <div
                                                        class="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]">
                                                    </div>
                                                    <span
                                                        class="text-white font-bold group-hover:text-cyan-400 transition-colors uppercase italic">${item.title}</span>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6">
                                                <span
                                                    class="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-[11px] border border-slate-700 font-mono italic">
                                                    ${item.slug}
                                                </span>
                                            </td>
                                            <td class="px-8 py-6 text-slate-400 font-mono text-xs">
                                                06 Mart 2026 <br> <span
                                                    class="text-[10px] text-slate-600">${item.createdAt.split('T')[0]}</span>
                                            </td>
                                            <td class="px-8 py-6 text-slate-400 font-mono text-xs">
                                                06 Mart 2026 <br> <span
                                                    class="text-[10px] text-slate-600">${item.updatedAd.split('T')[0]}</span>
                                            </td>
                                            <td class="px-8 py-6 text-right">
                                                <div class="flex justify-end items-center gap-4">
                                                    <button
                                                        class="text-slate-500 hover:text-emerald-400 transition-all p-1"
                                                        title="Düzəliş et">
                                                        <svg class="w-5 h-5" fill="none" stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.5"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 012.828 0L20 6.172a2 2 0 010 2.828L10.172 17H7v-3.172L16.828 3.345z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button class="text-slate-500 hover:text-red-500 transition-all p-1"
                                                        title="Sil">
                                                        <svg class="w-5 h-5" fill="none" stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.5"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
        `)
        categoryTable.innerHTML = empty
}
renderCategory()