import {TweenMax, Power3, TweenLite} from "gsap";

let toPolygonArray = [];
let fromPolygonArray = [];
const getCoordinates = (polygon) => {
    // console.log(polygon.getAttribute("d"));
    return polygon.getAttribute("d").split(",");
  }
  const updatePolygonArrays = (idToAnimateTo) => {
    toPolygonArray = createPolygonPointsObject(document.getElementById(idToAnimateTo).querySelectorAll("path"));
    console.log(toPolygonArray);
    animatePolygons();
    fromPolygonArray = toPolygonArray;
  }
  const createPolygonPointsObject = (polygons) => {
    const polygonsArray = [];
  
    polygons.forEach((polygon, i) => {
      const coordinates = getCoordinates(polygon);
    // console.log(coordinates);
      polygonsArray.push({
        fill: polygon.getAttribute("fill"),
        one: coordinates[0],
        two: coordinates[1],
        three: coordinates[2],
        four: coordinates[3]
        // five: coordinates[5],
        // six: coordinates[6]
      });
    });
  
    return polygonsArray;
  }
  const animatePolygons = () => {
  const polygons = document.querySelector(".svg-holder").querySelectorAll("path");
  fromPolygonArray = createPolygonPointsObject(polygons);

  fromPolygonArray.forEach((obj, i) => {
    TweenMax.to(obj, 4, {
      one: toPolygonArray[i].one,
      two: toPolygonArray[i].two,
      three: toPolygonArray[i].three,
      four: toPolygonArray[i].four,
      five: toPolygonArray[i].five,
      six: toPolygonArray[i].six,
      ease: Power3.easeOut,
      onUpdate: () => 
      {
        polygons[i].setAttribute("d", `${obj.one},${obj.two} ${obj.three},${obj.four}`);
      }
    });
  });
  polygons.forEach((polygon, i) => {
    const toColor = toPolygonArray[i].fill;

    TweenLite.to(polygon, 4, {
      fill: toColor,
      ease: Power3.easeOut
    });
});
}
// document.querySelector("#butu").addEventListener("click",function() {
//     // console.log("hello");
//     updatePolygonArrays("curr");
//     document.querySelector(".svg-holder").style.display="block";
// });

export const doEvent = ()=>{
  // console.log("hello");
  updatePolygonArrays("curr");
  document.querySelector(".svg-holder").style.display="block";
}