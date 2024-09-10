function generateTable() {
    // Get the user-entered number

    var divident = document.getElementById("numberInput").value;

    var divisor = document.getElementById("numberInput2").value;

    // Validate the input
    if ( (divident <0 || divisor <=0)) {
        alert("Please enter a valid positive number.");
        return;
    }

    //...........................................................................TABLE
    var Q = deci2bin(divident);
    var M = deci2bin(divisor);

    console.log(M +" " + Q);

     // SIZEFIXER
    if (Q.length > M.length) {
        let len = Q.length - M.length;
        for (let i = 0; i < len; i++) {
            M = "0" + M;
        }
    }

    if (M.length > Q.length) {
        let len = M.length - Q.length;
        for (let i = 0; i < len; i++) {
            Q = "0" + Q;
        }
    }

    const complement = convert(M);

    let A = "";

    for (let i = 0; i < M.length+1; i++) {
        A = A + "0";
    }

    console.log(M +" " + Q + "A" + complement);



    // // Generate the table
    // // var tableHTML = "<h2>Table for " + divident+"/"+ divisor + "</h2><table border='1'><tr><th>N</th><th>M</th><th>A</th><th>Q</th><th>Operation</th></tr>";
    // var tableHTML = "<h2 style='color: black;'>Table for " + divident + "/" + divisor + "</h2><table border='1'><tr><th style='color: black;'>N</th><th style='color: black;'>M</th><th style='color: black;'>A</th><th style='color: black;'>Q</th><th style='color: black;'>Operation</th></tr>";

    // // for (var i = 1; i <= 10; i++) {
    // //     tableHTML += "<tr><td>" + i + "</td><td>" + (i * number) + "</td><td>" + i + "</td></tr>";
    // // }

    // var n = A.length-1;

    // const len = A.length-2;

    // tableHTML += "<tr>  <td>" + " " + "</td>   <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td> <td>" + Q  + "</td>  <td>" + "INITIALIZE" + "</td         </tr>";
    // // tableHTML += "<tr>  <td>" + " " + "</td>   <td>" + " " + "</td> <td><span style='color: red;'>" + A.charAt(0) +"</span><span style='color: blue;'>"+ A.substring(1) + "</span></td> <td>" + Q + "</td>  <td>" + "INITIALIZE" + "</td></tr>";

    
    // for (let i = 0; i < Q.length; i++) {
    //     // shift left AQ
    //     A = A.substring(1) + Q.charAt(0);
    //     Q = Q.substring(1);
    //     tableHTML += "<tr>  <td>" + n + "</td>   <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>    <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i)+"_" + "</span></td>        <td>" + "SHIFT LEFT AQ" + "</td         </tr>";

    //     console.log(A);
    //     let A_temp = addBinaryStrings(String(A), String(complement));

    //     // A_temp = A_temp.substring(A_temp.length - M.length);

    //     tableHTML += "<tr>   <td>" + " " + "</td>  <td>" + M + "</td> <td><span style='color: brown;'>" + A_temp.charAt(0) +"</span><span >"+ A_temp.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;' >"+ Q.substring(len-i)+"_" + "</span></td>    <td>" + "A = A-M" + "</td         </tr>";

    //     if (A_temp.charAt(0) == '0') {
    //         Q = Q + "0";
    //         tableHTML += "<tr>  <td>" + " " + "</td>  <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i)+ "</span></td>    <td>" + "Q[0]=0 And restore A" + "</td         </tr>";
    //     } else {
    //         Q = Q + "1";
    //         A = A_temp;
    //         tableHTML += "<tr>  <td>" + " " + "</td>  <td>" + M +"</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i) + "</span></td>   <td>" + "Q[0]=1" + "</td         </tr>";
    //     }

    //     n--;


    // }

    // tableHTML += "</table>";


    
    // Generate the table
    // var tableHTML = "<h2>Table for " + divident+"/"+ divisor + "</h2><table border='1'><tr><th>N</th><th>M</th><th>A</th><th>Q</th><th>Operation</th></tr>";
    var tableHTML = "<h2 style='color: black;'>Table for " + divident + "/" + divisor + "</h2><table border='1'><tr><th style='color: black;'>N</th><th style='color: black;'>M</th><th style='color: black;'>A</th><th style='color: black;'>Q</th><th style='color: black;'>Operation</th></tr>";

    // for (var i = 1; i <= 10; i++) {
    //     tableHTML += "<tr><td>" + i + "</td><td>" + (i * number) + "</td><td>" + i + "</td></tr>";
    // }

    var n = A.length-1;

    const len = A.length-2;

    tableHTML += "<tr>  <td>" + " " + "</td>   <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td> <td>" + Q  + "</td>  <td>" + "INITIALIZE" + "</td         </tr>";
    // tableHTML += "<tr>  <td>" + " " + "</td>   <td>" + " " + "</td> <td><span style='color: red;'>" + A.charAt(0) +"</span><span style='color: blue;'>"+ A.substring(1) + "</span></td> <td>" + Q + "</td>  <td>" + "INITIALIZE" + "</td></tr>";

    
    for (let i = 0; i < Q.length; i++) {
        // shift left AQ
        A = A.substring(1) + Q.charAt(0);
        Q = Q.substring(1);
        tableHTML += "<tr>  <td>" + n + "</td>   <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>    <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i)+"_" + "</span></td>        <td>" + "SHIFT LEFT AQ" + "</td         </tr>";

        console.log(A);
        let A_temp = addBinaryStrings(String(A), String(complement));

        // A_temp = A_temp.substring(A_temp.length - M.length);

        tableHTML += "<tr>   <td>" + " " + "</td>  <td>" + M + "</td> <td><span style='color: brown;'>" + A_temp.charAt(0) +"</span><span >"+ A_temp.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;' >"+ Q.substring(len-i)+"_" + "</span></td>    <td>" + "A = A-M" + "</td         </tr>";

        if (A_temp.charAt(0) == '0') {
            Q = Q + "0";
            tableHTML += "<tr>  <td>" + " " + "</td>  <td>" + M + "</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i)+ "</span></td>    <td>" + "Q[0]=0 And restore A" + "</td         </tr>";
        } else {
            Q = Q + "1";
            A = A_temp;
            tableHTML += "<tr>  <td>" + " " + "</td>  <td>" + M +"</td> <td><span style='color: brown;'>" + A.charAt(0) +"</span><span >"+ A.substring(1) + "</span></td>  <td><span >" + Q.substring(0,len-i) +"</span><span style='color: black;'>"+ Q.substring(len-i) + "</span></td>   <td>" + "Q[0]=1" + "</td         </tr>";
        }

        n--;


    }

    tableHTML += "</table>";




    A = A.substring(A.length - M.length);



    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
    // document.createElement('tableContainer').style.border = "200px black solid";

    //..........................................................................................

    var datahtml = "<p>DIVIDENT(Q) = " + divident  + " (" + deci2bin(divident)+ ")" +"</p>"
    datahtml += "<p>DIVISOR(M) = " + divisor + " (" + deci2bin(divisor)+ ")"+"</p>"
    document.getElementById("data").innerHTML = datahtml;


    var finalhtml = '<p style="color: ' + "blue" + ';">' +  "QUOTIENT(Q) = " + Q  + " (" + bin2deci(Q) + ")" +"</p>"
    finalhtml += '<p style="color: ' + "rgb(139, 128, 1)" + ';">' + "Reminder(A) = " + A + " (" + bin2deci(A) + ")"+"</p>"
    finalhtml += '<p style="color: ' + "green" + ';">' + "DIVIDENT = DIVISOR X QUIOTENT + REMAINDER </p>"
    finalhtml += '<p style="color: ' + "red" + ';">' +  + divident + " = " + divisor + " X " + bin2deci(Q) + " + " + bin2deci(A) + "</p>";

    document.getElementById("final").innerHTML = finalhtml;





}







//.......................
function deci2bin(num)
{
    let decimalNumber = Number(num);
    let binaryString = decimalNumber.toString(2);
    return binaryString;
}
//.........................





//.......................
function bin2deci(num)
{
    let binaryNumber = String(num);
    let decimal =parseInt(binaryNumber, 2);
    return decimal;
}
//.........................












//.....................................................
function addBinaryStrings(binaryString1, binaryString2) {
    let result = "";
    let carry = 0;

    let i = binaryString1.length - 1;
    let j = binaryString2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = (i >= 0) ? parseInt(binaryString1.charAt(i--)) : 0;
        const digit2 = (j >= 0) ? parseInt(binaryString2.charAt(j--)) : 0;

        const sum = digit1 + digit2 + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
}
//.....................................................













//...................................................................

//  convert num is to convert binary number to tos_complementary

function convert(num) {
    const binaryString = num; // Replace this with your binary string

    const onesComplement = calculateOnesComplement(binaryString);
    const twosComplement = calculateTwosComplement(onesComplement);

    // Uncomment the lines below if you want to print the results
    // console.log("Original Binary: " + binaryString);
    // console.log("Ones Complement: " + onesComplement);
    // console.log("Twos Complement: " + twosComplement);

    return twosComplement;
}

function calculateOnesComplement(binaryString) {
    let onesComplement = '';

    for (let bit of binaryString) {
        onesComplement += (bit === '0') ? '1' : '0';
    }

    return onesComplement;
}

function calculateTwosComplement(onesComplement) {
    const length = onesComplement.length;
    let twosComplement = onesComplement.split('');

    // Add 1 to the least significant bit
    for (let i = length - 1; i >= 0; i--) {
        if (onesComplement.charAt(i) === '0') {
            twosComplement[i] = '1';
            break;
        } else {
            twosComplement[i] = '0';
        }
    }

    return twosComplement.join('');
}

//.........................................................................







function goToTheory() {
    window.location.href = "restoring_theory.html";
}


window.addEventListener('popstate', function(event) {
    window.location.href = '2_index.html'; // Replace with the URL of the website you want to link to
});