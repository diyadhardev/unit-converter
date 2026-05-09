const units = {
  Length: {
    options: [
      "Kilometers(km)",
      "Centimeters(cm)",
      "Meters(m)",
      "Millimeters(mm)",
      "Miles(mi)",
      "Yards(yd)",
      "Feet(ft)",
      "Inches(i)",
    ],
    conversion: {
      "Kilometers(km)": 1000,
      "Centimeters(cm)": 0.01,
      "Meters(m)": 1,
      "Millimeters(mm)": 0.001,
      "Miles(mi)": 1609.344,
      "Yards(yd)": 0.9144,
      "Feet(ft)": 0.3048,
      "Inches(in)": 0.0254,
    },
  },
  Weight: {
    options: [
      "Kilograms(kg)",
      "Grams(g)",
      "Milligrams(mg)",
      "Pounds(lbs)",
      "Ounces(oz)",
      "Tonnes(t)",
    ],
    conversion: {
      "Kilograms(kg)": 1000,
      "Grams(g)": 1,
      "Milligrams(mg)": 0.001,
      "Pounds(lbs)": 453.59237,
      "Ounces(oz)": 28.349523125,
      "Tonnes(t)": 1000000,
    },
  },
  Temperature: { options: ["Celsius(C)", "Farenheit(F)", "Kelvin(K)"] },
};

let currentTab = "Length";

const fillOptions = () => {
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  from.innerHTML = "";
  to.innerHTML = "";
  units[currentTab].options.forEach((option) => {
    from.appendChild(document.createElement("option"));
    from.lastChild.innerText = option;
    to.appendChild(document.createElement("option"));
    to.lastChild.innerText = option;
  });
};

const categories = document.querySelectorAll(".tab-button");

categories.forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeClass = document.getElementsByClassName("active")[0];
    activeClass.classList.remove("active");
    tab.classList.add("active");
    currentTab = tab.innerText;
    fillOptions();
  });
});

fillOptions();

document.getElementById("convert").addEventListener("click", () => {
  const value = document.getElementById("numberValue").value;
  const convertFrom = document.getElementById("from").value;
  const convertTo = document.getElementById("to").value;
  const resultDisplay = document.getElementsByClassName("result-display")[0];

  if (!value || !convertFrom || !convertTo) {
    alert("PLease fill in the form correctly!");
    return;
  }
  if (currentTab == `Temperature`) {
    return convertForTemp();
  }
  if (convertFrom === convertTo) {
    return (resultDisplay.innerText = `${value} ${convertFrom} = ${value} ${convertTo}`);
  }

  const baseConversionFrom = units[currentTab].conversion[convertFrom];
  const baseConversionTo = units[currentTab].conversion[convertTo];

  const answer = Math.floor((value * baseConversionFrom) / baseConversionTo);

  resultDisplay.innerText = `${value} ${convertFrom} = ${answer} ${convertTo}`;
});
convertForTemp = () => {
  
};

resetValues = () => {};
