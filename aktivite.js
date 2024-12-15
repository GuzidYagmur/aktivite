const aktivitevegunler = [];

for (let i = 0; i < 7; i++) {
    const gun = prompt("Gün adını girin:");
    const aktivite = prompt(`${gun} günü için bir aktivite girin:`);
    aktivitevegunler.push({ gun, aktivite });
}

console.log("Haftalık Aktivite Çizelgeniz:");
console.log(aktivitevegunler);
