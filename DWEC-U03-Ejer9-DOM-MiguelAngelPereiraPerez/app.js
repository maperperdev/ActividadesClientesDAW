window.addEventListener("load", start, false);

function start() {
  //Drawing table
  const btnDrawOrNot = document.getElementById("btnDrawOrNot");
  const container = document.getElementById("container");
  var activateDrawing = false;
  const drawingTable = document.createElement("table");
  var color = "black";
  drawingTable.setAttribute("id", "drawingTable");
  for (let i = 0; i < 30; i++) {
    var tRow = document.createElement("tr");
    for (let j = 0; j < 30; j++) {
      var tCol = document.createElement("td");
      tCol.addEventListener(
        "mouseover",
        (event) => {
          if (activateDrawing) {
            event.target.style.backgroundColor = color;
          }
        },
        false
      );
      tCol.addEventListener(
        "click",
        () => {
          activateDrawing = !activateDrawing;
          if (activateDrawing) {
            btnDrawOrNot.innerHTML = "PINCEL ACTIVADO";
          } else {
            btnDrawOrNot.innerHTML = "PINCEL DESACTIVADO";
          }
        },
        false
      );
      tRow.appendChild(tCol);
    }
    drawingTable.appendChild(tRow);
    container.appendChild(drawingTable);
  }
  document.body.appendChild(container);

  for (const element of document.querySelectorAll("td > div")) {
    element.addEventListener(
      "click",
      () => {
        color = element.getAttribute("id");
      },
      false
    );
  }
}
