import { db, auth, storage } from "./firebase.mjs"
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, query, onSnapshot, doc, where, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js"
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.email;
        console.log(uid);
        //   const uid5 =user;
        //   console.log("curr" , uid5);
        document.getElementById("ankeruser").style.display = "none";
        var uidname = uid.slice(0, uid.lastIndexOf("@"))
        // console.log("user-name =" ,uidname);

        const q = query(collection(db, "SignupUser"), where("email", "==", user.email));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var num = doc.data().name
                document.getElementById("username12").innerHTML = `<p>Hello ,</p>${num}  `
                //      document.getElementById("usermessage").innerHTML +=
                localStorage.setItem("num", JSON.stringify(num))

            });

        });

        const q1 = query(collection(db, "cards"));
        onSnapshot(q1, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDownloadURL(ref(storage, doc.data().pname))
                    .then(async (url) => {
                        console.log(url, 'url image user');
                        document.getElementById("cardcontainer").innerHTML +=
                            `   
                <div class="card1" onclick="detail('${doc.data().pname}' , '${doc.data().pprice}' , '${url}' , '${doc.id}')">
                <img src="${url}" alt="">
                <p style="margin-top:10px;">${doc.data().pname}</p>
                <i style="color: purple;" class="fa-solid fa-star"></i><i style="color: purple;" class="fa-solid fa-star"></i><i style="color: purple;" class="fa-solid fa-star"></i><i style="color: purple;" class="fa-solid fa-star"></i><i style="color: purple;" class="fa-solid fa-star"></i>
                <h4>${doc.data().pprice}$</h4>
                <button>Go to detail</button> 
            </div>
                 `
                    })
            })
        })
        async function detail(name, price, url, id) {
            localStorage.setItem("name", name)
            localStorage.setItem("price", price)
            localStorage.setItem("url", url)
            localStorage.setItem("id", id)
            window.location.href = "detail.html"
        }
        window.detail = detail
        localStorage.setItem("num", JSON.stringify(num))

    } else {
        // User is signed out
        window.location.href = "index.html"
        // ...
    }
});



// var logout = document.getElementById("username12");
// logout.addEventListener("click", () => {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         window.location.href = "./index.html"
//     }).catch((error) => {
//         // An error happened.
//         window.location.href = "./home.html"
//     });
// });



// start()
document.getElementById("adminbtn").addEventListener("click", () => {
    Swal.fire({
        title: 'Enter Key To Access Admin Pannel',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Login To Dashboard',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            if (result.value == "Hasaan") {
                Swal.fire({
                    icon: "success",
                    title: `Successfully Logged In To Dashboard`,
                    text: "Admin Approved",
                    showConfirmButton: false
                }).then(
                    setTimeout(() => {
                        location.replace('admin.html')
                    }, 2000)
                )

            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: `Wrong Key Entered`,
                text: "Admin Dis-Approved"
            })
        }
    })
})