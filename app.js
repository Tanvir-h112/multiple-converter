window.onload = function () {
  main();
};

const converter = {
  area: {
    name: "Area",
    units: {
      squareKm: "Square Kilometer",
      squareM: "Square Meter",
      squareMile: "Square Mile",
      squareYard: "Square Yard",
      squareFoot: "Square Foot",
    },
    variants: {
      "squareKm:squareM": {
        formula: "multiply the area value by 1000000",
        calculation(n) {
          return n * 1000000;
        },
      },
      "squareKm:squareMile": {
        formula: "divide the area value by 2.59",
        calculation(n) {
          return n / 2.59;
        },
      },
      "squareKm:squareYard": {
        formula: "multiply the area value by 1196000",
        calculation(n) {
          return n * 1196000;
        },
      },
      "squareKm:squareFoot": {
        formula: "multiply the area value by 10760000",
        calculation(n) {
          return n * 10760000;
        },
      },
      "squareM:squareKm": {
        formula: "divide the area value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "squareM:squareMile": {
        formula: "divide the area value by 2.59e+6",
        calculation(n) {
          return n / new Number("2.59e+6");
        },
      },
      "squareM:squareYard": {
        formula: "multiply the area value by 1.196",
        calculation(n) {
          return n * 1.196;
        },
      },
      "squareM:squareFoot": {
        formula: "multiply the area value by 10.764",
        calculation(n) {
          return n * 10.764;
        },
      },
      "squareMile:squareKm": {
        formula: "multiply the area value by 2.59",
        calculation(n) {
          return n * 2.59;
        },
      },
      "squareMile:squareM": {
        formula: "multiply the area value by 2.59e+6",
        calculation(n) {
          return n * new Number("2.59e+6");
        },
      },
      "squareMile:squareYard": {
        formula: "multiply the area value by 3.098e+6",
        calculation(n) {
          return n * new Number("3.098e+6");
        },
      },
      "squareMile:squareFoot": {
        formula: "multiply the area value by 2.788e+7",
        calculation(n) {
          return n * new Number("2.788e+7");
        },
      },
      "squareYard:squareKm": {
        formula: "divide the area value by 1.196e+6",
        calculation(n) {
          return n / new Number("1.196e+6");
        },
      },
      "squareYard:squareM": {
        formula: "divide the area value by 1.196",
        calculation(n) {
          return n / 1.196;
        },
      },
      "squareYard:squareMile": {
        formula: "divide the area value by 3.098e+6",
        calculation(n) {
          return n / new Number("3.098e+6");
        },
      },
      "squareYard:squareFoot": {
        formula: "multiply the area value by 9",
        calculation(n) {
          return n * 9;
        },
      },
      "squareFoot:squareKm": {
        formula: "divide the area value by 1.076e+7",
        calculation(n) {
          return n / new Number("1.076e+7");
        },
      },
      "squareFoot:squareM": {
        formula: "divide the area value by 10.764",
        calculation(n) {
          return n / 10.764;
        },
      },
      "squareFoot:squareMile": {
        formula: "divide the area value by 2.788e+7",
        calculation(n) {
          return n / new Number("2.788e+7");
        },
      },
      "squareFoot:squareYard": {
        formula: "divide the area value by 9",
        calculation(n) {
          return n / 9;
        },
      },
    },
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      gram: "Gram",
      miligram: "Miligram",
    },
    variants: {
      "tonne:kilogram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "tonne:gram": {
        formula: "multiply the mass value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },
      "tonne:miligram": {
        formula: "multiply the mass value by 1e+9",
        calculation(n) {
          return n * new Number("1e+9");
        },
      },
      "kilogram:tonne": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "kilogram:gram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "kilogram:miligram": {
        formula: "multiply the mass value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },
      "gram:tonne": {
        formula: "divide the mass value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "gram:kilogram": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "gram:miligram": {
        formula: "multiply the mass value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "miligram:tonne": {
        formula: "divide the mass value by 1e+9",
        calculation(n) {
          return n / new Number("1e+9");
        },
      },
      "miligram:kilogram": {
        formula: "divide the mass value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "miligram:gram": {
        formula: "divide the mass value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
    },
  },
  length: {
    name: "Length",
    units: {
      kilometer: "Kilometer",
      meter: "Meter",
      centimeter: "Centimeter",
      milimeter: "Milimeter",
    },
    variants: {
      "kilometer:meter": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "kilometer:centimeter": {
        formula: "multiply the length value by 100000",
        calculation(n) {
          return n * 1000000;
        },
      },
      "kilometer:milimeter": {
        formula: "multiply the length value by 1e+6",
        calculation(n) {
          return n * new Number("1e+6");
        },
      },
      "meter:kilometer": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "meter:centimeter": {
        formula: "multiply the length value by 100",
        calculation(n) {
          return n * 100;
        },
      },
      "meter:milimeter": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "centimeter:kilometer": {
        formula: "divide the length value by 100000",
        calculation(n) {
          return n / 100000;
        },
      },
      "centimeter:meter": {
        formula: "divide the length value by 100",
        calculation(n) {
          return n / 100;
        },
      },
      "centimeter:milimeter": {
        formula: "multiply the length value by 10",
        calculation(n) {
          return n * 10;
        },
      },
      "milimeter:kilometer": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "milimeter:meter": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "milimeter:centimeter": {
        formula: "divide the length value by 10",
        calculation(n) {
          return n / 10;
        },
      },
    },
  },

  time: {
    name: "Time",
    units: {
      day: "Day",
      hour: "Hour",
      minute: "Miniute",
      second: "Second",
    },
    variants: {
      "day:hour": {
        formula: "multiply the time value by 24",
        calculation(n) {
          return n * 24;
        },
      },
      "day:minute": {
        formula: "multiply the time value by 1440",
        calculation(n) {
          return n * 1440;
        },
      },
      "day:second": {
        formula: "multiply the time value by 86400",
        calculation(n) {
          return n * 86400;
        },
      },
      "hour:day": {
        formula: "divide the time value by 24",
        calculation(n) {
          return n / 24;
        },
      },
      "hour:minute": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * 60;
        },
      },
      "hour:second": {
        formula: "multiply the time value by 3600",
        calculation(n) {
          return n * 3600;
        },
      },
      "minute:day": {
        formula: "divide the time value by 1440",
        calculation(n) {
          return n / 1440;
        },
      },
      "minute:hour": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / 60;
        },
      },
      "minute:second": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * 60;
        },
      },
      "second:day": {
        formula: "divide the time value by 864004",
        calculation(n) {
          return n / 864004;
        },
      },
      "second:hour": {
        formula: "divide the time value by 3600",
        calculation(n) {
          return n / 3600;
        },
      },
      "second:minute": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / 60;
        },
      },
    },
  },
};

let lastLeftSelectedValue = "";
let lastRightSelectedValue = "";

function main() {
  const categorySelect = document.getElementById("category-select");
  const leftInput = document.getElementById("left-inp");
  const rightInput = document.getElementById("right-inp");
  const formulaText = document.getElementById("formula-text");
  const leftSelect = document.getElementById("left-select");
  const rightSelect = document.getElementById("right-select");

  const converterKeys = Object.keys(converter);

  removeAllChild(categorySelect);
  converterKeys.forEach((item) => {
    addOption(categorySelect, { value: item, text: converter[item].name });
  });

  // default category units
  updateCategoryChanges(categorySelect, leftSelect, rightSelect);

  categorySelect.addEventListener("change", function () {
    updateCategoryChanges(categorySelect, leftSelect, rightSelect);
  });

  leftInput.addEventListener("keyup", function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
      const converterName = categorySelect.value;
      const variants = converter[converterName].variants;
      const variantKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantKey];
      formulaText.innerText = variant.formula;
      leftInput.value = Number(event.target.value);
      rightInput.value = variant.calculation(Number(event.target.value));
    } else {
      rightInput.value = "";
    }
  });

  rightInput.addEventListener("keyup", function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
      const converterName = categorySelect.value;
      const variants = converter[converterName].variants;
      const variantKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantKey];
      formulaText.innerText = variant.formula;
      rightInput.value = Number(event.target.value);
      leftInput.value = variant.calculation(Number(event.target.value));
    } else {
      leftInput.value = "";
    }
  });

  leftSelect.addEventListener("change", function (event) {
    if (event.target.value == rightSelect.value) {
      const options = rightSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastLeftSelectedValue == options[i].value) {
          options[i].selected = "selected";
          lastRightSelectedValue = options[i].value;
        }
      }
    }
    lastLeftSelectedValue = event.target.value;
    calculateValue(categorySelect, rightSelect, leftSelect);
  });

  rightSelect.addEventListener("change", function (event) {
    if (event.target.value == leftSelect.value) {
      const options = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastRightSelectedValue == options[i].value) {
          options[i].selected = "selected";
          lastLeftSelectedValue = options[i].value;
        }
      }
    }
    lastRightSelectedValue = event.target.value;
    calculateValue(categorySelect, rightSelect, leftSelect);
  });
}

function addOption(parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerText = option.text;

  parent.appendChild(opt);
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

function updateCategoryChanges(categorySelect, leftSelect, rightSelect) {
  // Global
  const converterName = categorySelect.value;
  const units = converter[converterName].units;
  const option = Object.keys(units);

  //handle Left Select
  removeAllChild(leftSelect);
  option.forEach((item) => {
    addOption(leftSelect, { value: item, text: units[item] });
  });
  lastLeftSelectedValue = leftSelect.value;

  // handle Right Select
  removeAllChild(rightSelect);
  option.forEach((item) => {
    addOption(rightSelect, { value: item, text: units[item] });
  });

  rightSelect.getElementsByTagName("option")[1].selected = "selected";

  lastRightSelectedValue = rightSelect.value;

  calculateValue(categorySelect, rightSelect, leftSelect);
}

function calculateValue(categorySelect, rightSelect, leftSelect) {
  const leftInput = document.getElementById("left-inp");
  const rightInput = document.getElementById("right-inp");
  const formulaText = document.getElementById("formula-text");

  const converterName = categorySelect.value;
  const variants = converter[converterName].variants;
  const variantKey = `${leftSelect.value}:${rightSelect.value}`;
  const variant = variants[variantKey];
  formulaText.innerText = variant.formula;
  leftInput.value = 1;
  rightInput.value = variant.calculation(1);
}
