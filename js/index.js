var data = []
$(document).ready(function () {
    drawCanvas();
    a = document.getElementsByTagName("a")[0];
    $('body').on('change', $('form option:selected'), function () {
        var val = {};
        val["name"] = event.srcElement.name;
        val["value"] = event.srcElement.value;
        data.push(val);
        console.log(data[0].value);
    });


    $('body').on('submit', $('form'), function () {
        event.preventDefault();
        k = Number(data[0].value);
        l = Number(data[1].value);
        m = Number(data[2].value);
        sum = (k + l + m);
        sum_avg = (sum / 3).toFixed(2);
        avg = (sum / 3 * 100).toFixed(2);
        $('.circle.first').circleProgress({
            value: k,
            size: 100,
            fill: {
                gradient: ["#273582", "#6bd0ef"]
            }
        }).find('strong').text((k * 100) + '%');
        $('.circle.second').circleProgress({
            value: l,
            size: 100,
            fill: {
                gradient: ["#273582", "#6bd0ef"]
            }
        }).find('strong').text((l * 100) + '%');
        $('.circle.third').circleProgress({
            value: m,
            size: 100,
            fill: {
                gradient: ["#273582", "#6bd0ef"]
            }
        }).find('strong').text((m * 100) + '%');
        $('.circle.avg').circleProgress({
            value: sum_avg,
            size: 100,
            fill: {
                gradient: ["#273582", "#6bd0ef"]
            }
        }).find('strong').text(avg + '%');
        /* Download object as txt
         var formData = JSON.stringify(data, null, 2);
         a.download = "formData-" + new Date().getTime();
         // create a text file
         a.href = "data:text/plain," + encodeURIComponent(formData);
         // save `formData` locally as file with timestamp appended to file name
         a.click();*/

    });

    function drawCanvas() {
        // 1:2
        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(420, 100, 28, 0, Math.PI * 2, true);
        ctx.arc(120, 100, 20, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#f39c12";
        ctx.closePath();
        ctx.fill();


        //1:3
        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#f4f900";
        ctx.fillRect(100, 100, 50, 50);
        ctx.fillRect(380, 100, 111, 111);
        ctx.fill();


        // 1:4

        var c = document.getElementById("myCanvas3");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(420, 100, 56, 0, Math.PI * 2, true);
        ctx.arc(120, 100, 28, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#f82023";
        ctx.closePath();
        ctx.fill();

    }
});
