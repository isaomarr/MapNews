const loginForm = document.getElementById("loginForm")
const inputs = loginForm.querySelectorAll("input")
const btn = document.getElementById("btn")
const toast = document.getElementById("toast")
loginForm.onsubmit =  async(e) => {
    e.preventDefault()
    let [email, password] = Array.from(inputs).map(item => item.value)
    let obj = {
        email,password
    }
    btn.innerHTML = `<div class="w-6 h-6 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-blue-600"></div>`
    btn.disabled = true
    let res = await login(obj)
    btn.innerHTML = "Login"
    btn.disabled = false
    console.log(res);
    if(res.error || res.user.role == "user"){
        let message = res.error ? res.message : "Acces denied"
        renderToast(true,message)
    }
    else {
        localStorage.setItem("token",res.token)
        localStorage.setItem('user',JSON.stringify(res.user))
        renderToast(false, res.message)
        location.replace('admin.htm')
    }

}

function renderToast(error, message) {
    toast.innerHTML = `<div class="fixed top-5 right-5 z-50 animate-slide-in">
                          <div
                         class="min-w-[320px] max-w-sm bg-gray-900 border border-gray-800 text-white rounded-2xl shadow-2xl p-4 flex items-start gap-3">
   
                        <!-- Icon -->
                         <div class="shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                              ${error ? `  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                              </svg>` :
                              `<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" stroke-width="2"
                                   viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                               </svg>`}
                          </div>
 
                               <!-- Content -->
                            <div class="flex-1">
                             <h4 class="font-semibold text-sm">${error ? "Dayan" : "Uğurlu"}</h4>
                              <p class="text-sm text-gray-400 mt-1">
                               ${message}
                               </p>
                             </div>

              

                           </div>
                         </div>`
                         setTimeout(() =>{
                            toast.innerHTML = ""

                         },2000)
                         if(!error){
                            setTimeout(() => {
                                
                            },1000)
                         }
                         


}