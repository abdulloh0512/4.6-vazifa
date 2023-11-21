alert("Taxmin o'yiniga xush kelibsiz 😦.");
alert(
  "Siz bu o'yinda yutish uchun kompyuter o'ylagan sonni topishingiz kerak 🫨 Kompyuter o'ylagan son 1 va 50 sonlari orasida bo'ladi 😏"
);
let topilganSon = false;
for (let i = 0; i < 10; i++) {
  let kompyuterSon = Math.floor(Math.random() * 50) + 1;
  console.log(kompyuterSon);
  let foydalanuvchiSon = prompt("1 va 50 oralig'ida son kiriting:");
  if (foydalanuvchiSon == null) {
    break;
  }
  foydalanuvchiSon = Number(foydalanuvchiSon);
  if (foydalanuvchiSon == kompyuterSon) {
    topilganSon = true;
    alert("Siz topdingiz!");
    break;
  } else {
    alert("Notog'ri, boshqatdan urinib ko'ring");
  }
}
if (!topilganSon) {
  alert("Siz topa olmadingiz. Yana urinib ko'ring.");
}
