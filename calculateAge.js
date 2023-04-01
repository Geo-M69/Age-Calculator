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
    var emptyStringYears = document.getElementById("empty-string-years");
    emptyStringYears.textContent = newYear;
    emptyStringYears.style.color = "#854DFF";
    emptyStringYears.style.marginRight = "1rem";

    var newMonth = months;
    var emptyStringMonths = document.getElementById("empty-string-months");
    emptyStringMonths.textContent = newMonth;
    emptyStringMonths.style.color = "#854DFF";
    emptyStringMonths.style.marginRight = "1rem";

    var newDay = days;
    var emptyStringDays = document.getElementById("empty-string-days");
    emptyStringDays.textContent = newDay;
    emptyStringDays.style.color = "#854DFF";
    emptyStringDays.style.marginRight = "1rem";
  }

const myButton = document.getElementById('arrow-circle');
myButton.addEventListener('click', function() {
    var formattedDate = formatDate();
    calculateAge(formattedDate)
});

  
  