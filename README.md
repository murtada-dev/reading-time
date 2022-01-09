lightweight javascript library to calculate reading time

## usage
include time2read.js
```
<script src="time2read.js"></script>
```
use the class and provide text & speed parameters

**example**
```
<p id="dummytxt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
<span id="time2read"></span>

<script>
const text = document.getElementById("dummytxt").innerText;
const time2read = document.getElementById("time2read");

var ttr = new TimeToRead();
time2read.innerText = ttr.TimeToRead(text,"slow");
</script>
```
**speed**
* slow = 125 rpm
* average = 300 rpm
* fast = 450 rpm
