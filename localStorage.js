var img = document.createElement("img")
document.body.appendChild(img)
let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBItcfzNUiWqV4LgaaMYY1xotyA2ZUXgKahGcrtJGs83ZbSaEvw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr02zjh-MwRd5ffVLyOiH0XQ01sQoyyv0wczeVF9Y-XZ6lGV9","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhb4firBV5guaBd2psfp6FmLG0td6XC8T8SEwzYFloZNbbIiK","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLrlXDI-TL8FKeJDtGvH2yVK6zZMF9XPmWYbsQ46thvDFNbSIAw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ErWFYdyQB9NMlCl5k223vdDuhlc33WB-bbRMT4TghgSvsWdw"]

const hashChange = () => {
let pageId = window.location.hash
localStorage.setItem("pageId",pageId)
localStorage.setItem("startTime",Date.now())
const index =Math.floor (Math.random()* 5)
let x = document.body.getElementsByTagName("img")
x[0].src = arr[index]
}
window.onhashchange =  hashChange 