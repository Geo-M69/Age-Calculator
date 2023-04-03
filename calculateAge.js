function isValidDate(year, month, day) {
  var isValid = true;
  var firstError = "";

  if (isNaN(year) || year < 1 || year > 9999) {
      isValid = false;
      firstError = "year";
  }
  else if (isNaN(month) || month < 1 || month > 12) {
      isValid = false;
      firstError = "month";
  }
  else {
      var maxDay = new Date(year, month, 0).getDate();
      if (isNaN(day) || day < 1 || day > maxDay) {
          isValid = false;
          firstError = "day";
      }
  }

  return { isValid: isValid, firstError: firstError };
}

function formatDate() {
    var year = document.getElementById("year-input").value;
    var month = document.getElementById("month-input").value;
    var day = document.getElementById("day-input").value;

    // Use the padStart() method to add leading zeros to the month and day values
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    
    // Return the formatted date string in the YYYY-MM-DD format
    return `${year}-${formattedMonth}-${formattedDay}`;
}

function calculateAge(birthdate) {
    const now = new Date();
    const birth = new Date(birthdate);
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    
    document.documentElement.style.setProperty('--ageYears', years);
    document.documentElement.style.setProperty('--ageMonths', months);
    document.documentElement.style.setProperty('--ageDays', days);

    var newYear = years;
    var emptyStringYears = document.getElementById("amount-of-years");
    emptyStringYears.textContent = newYear;
    emptyStringYears.style.color = "#854DFF";
    emptyStringYears.style.marginRight = "1rem";

    var newMonth = months;
    var emptyStringMonths = document.getElementById("amount-of-months");
    emptyStringMonths.textContent = newMonth;
    emptyStringMonths.style.color = "#854DFF";
    emptyStringMonths.style.marginRight = "1rem";

    var newDay = days;
    var emptyStringDays = document.getElementById("amount-of-days");
    emptyStringDays.textContent = newDay;
    emptyStringDays.style.color = "#854DFF";
    emptyStringDays.style.marginRight = "1rem";
}

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    var year = document.getElementById("year-input").value;
    var month = document.getElementById("month-input").value;
    var day = document.getElementById("day-input").value;

    var result = isValidDate(year, month, day);
    if (result.isValid) {
        var formattedDate = formatDate();
        calculateAge(formattedDate);
        // Clear error messages
        document.getElementById("year-error-message").textContent = "";
        document.getElementById("month-error-message").textContent = "";
        document.getElementById("day-error-message").textContent = "";
        document.getElementById("error-message").textContent = "";
    } else {
        var errorMessage = "";
        switch (result.firstError) {
            case "year":
                errorMessage = "Must be a valid year";
                var errorSpan = document.getElementById("year-error-message");
                errorSpan.textContent = errorMessage;
                errorSpan.style.color = "red";
                break;
            case "month":
                errorMessage = "Must be a valid month";
                var errorSpan = document.getElementById("month-error-message");
                errorSpan.textContent = errorMessage;
                errorSpan.style.color = "red";
                break;
            case "day":
                errorMessage = "Must be a valid day";
                var errorSpan = document.getElementById("day-error-message");
                errorSpan.textContent = errorMessage;
                errorSpan.style.color = "red";
                break;
        }

        var errorSpan = document.getElementById("error-message");
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = "red";
    }
});

