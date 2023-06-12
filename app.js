const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkbtn = document.querySelector("#check-btn");
const output = document.querySelector("#output-div");


checkbtn.addEventListener("click", () => {
    const dob = dateOfBirth.value;
    const luckyno = luckyNo.value;
    const sumdob = dobSum(dob, luckyno);

    if (dob && luckyNo) {

        if (sumdob % luckyno === 0) {
            output.innerHTML = "Wow! Your birthday is lucky 🥳🎉";
        } else {
            output.innerHTML = "Sadly your birthday is not lucky 🙁";
        }

    }

});

function dobSum(dob, luckyno) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum += Number(dob.charAt(i));

    }
    return sum;
}