//Q 16:More Guest:You just found a bigger dinner table,so now more space is available.Think of three more guests to invite to dinner.
var moreGuestList = ["Apo Khala", "Ibly Mamoo", "Haider Mamoo"];
console.log("Assalamulaikum,".concat(moreGuestList[1], ",nahi aasaktey Qke wo Islamabad gaye huay hai"));
moreGuestList.splice(1, 1, "Aliza Api");
console.log("Assalamulaikum,".concat(moreGuestList, ", hum ne iss taqreeb ke liye ek Hall book kardiya issy liye hum issy baare paamane par kar rahe hai iss liye\n                aur mazeed rishtey daar bhi bolana chati hon"));
moreGuestList.unshift("Amna Khala");
moreGuestList.push("Ali Mamoo");
var MiddleGuest = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(MiddleGuest, 0, "Zeenat Ani");
moreGuestList.forEach(function (moreInvitation) {
    return console.log("Assalamulaikum,".concat(moreGuestList, " ,\"Iss Sunday api ki baat pakki raakhi gayi hai hum aab ghar par nahi  kar rahe baalke hall mein kar rahe hai ..\n         Jo Bahriya Town mein hai ap sab hammarre ghaar jamma ho janaa hum wahi se nikle ge..\n          aaye ga  zaroooooor\""));
});
