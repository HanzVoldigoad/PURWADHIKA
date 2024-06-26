let grade = "C"

if (grade =="A"){
    console.log("Excellent Result")
}
if (grade =="B"){
    console.log("Great Result")
}
if (grade =="C"){
    console.log("Invalid Grade")
}

switch (grade) {
    case "A":
        console.log("Excellent Result")
        break;
    case "C":
        console.log("Average Result")
        break
    default:
        console.log("Invalid Grade")
        break;
}