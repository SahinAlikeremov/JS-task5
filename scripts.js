let date = prompt("Tarixi YYYY.MM.DD formatında daxil edin");

let year = date.split(".")[0];
let month = date.split(".")[1];
let day = date.split(".")[2];

let lastDigit = year % 10;
let suffix = "";

if ([1, 2, 5, 7, 8].includes(lastDigit)) {
    suffix = "ci";
} else if ([3, 4, 6].includes(lastDigit)) {
    suffix = "cü";
} else {
    suffix = "cu";
}

if (day > 31) {
    alert("Zəhmət olmasa doğru tarix qeyd edin!")
}else{



switch (month) {
    case "01":
        month = "yanvar";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "02":
        month = "fevral";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "03":
        month = "mart";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "04":
        month = "aprel";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "05":
        month = "may";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "06":
        month = "iyun";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "07":
        month = "iyul";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "08":
        month = "avqust";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "09":
        month = "sentyabr";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "10":
        month = "oktyabr";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "11":
        month = "noyabr";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    case "12":
        month = "dekabr";
        alert(`${day} ${month} ${year}-${suffix} il`);
        break;

    default:
        alert("Zehmet olmasa ayı düzgün qeyd edin");
        break;
}

}
