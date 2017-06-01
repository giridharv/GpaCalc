/**
 * Created by giridhar on 5/30/17.
 */
$(document).ready(function() {
    var dropDownArray =['#gradeDropDown1','#gradeDropDown2','#gradeDropDown3']
    var count =3;
    $('#formsubmit').click(function ()
    {
      var valarray = new Array();
            for(var i=0;i<dropDownArray.length;i++)
            {
                  var temp = $(dropDownArray[i]).val()
                  valarray.push(temp)
            }
            console.log(valarray)
            calculateGpa(valarray)


    });
    $('#addMore').click(function () {
       generateNewDropDown()


    });
    function generateNewDropDown()
    {
        var elem= document.getElementById("resultplaceholder");
        elem.style.backgroundColor="#FFFFFF";
        elem.innerHTML="";
        count =count +1;
        var newDropDownId = '#gradeDropDown'+count;
        dropDownArray.push(newDropDownId);
        var idForSelect = 'gradeDropDown'+count;
        var newselect ='<select title="Your Grade" id="x"><option value="none">none</option><option value="A">A</option><option value="A-">A-</option><option value="B+">B+</option><option value="B">B</option><option value="C+">C+</option><option value="C">C</option><option value="C-">C-</option><option value="D+">D+</option><option value="D">D</option><option value="D-">D-</option><option value="F">F</option></select><br ><br >';
        newselect= newselect.replace("x",idForSelect)
        $("#divcontainer").append(newselect);

    }

    function calculateGpa(arg) {
        var total = 0;
        for (var i = 0; i < arg.length; i++) {
            total += getGrade(arg[i])
        }

        var gpa = (total / arg.length);
        gpa =gpa.toFixed(2)
        var element = document.getElementById("resultplaceholder");
        if (gpa <= 2)
        {
            element.style.backgroundColor = "#ff0000";
            element.innerHTML="Here is your GPA : " + "\n" +gpa;

        }
        else if(gpa<=3 && gpa>2)
        {
            element.style.backgroundColor = "#FF6347";
            element.innerHTML="Here is your GPA : " + "\n" +gpa;

        }
        else
        {
            element.style.backgroundColor="#00FF7F"
            element.innerHTML="Here is your GPA : " + "\n" +gpa;
        }
    }
    function getGrade(arg)
    {
        switch(arg)
        {
            case 'A': return 4;
                      break;
            case 'A-' :return 3.7;
                       break;
            case 'B+' :return 3.3;
                       break;
            case 'B':  return 3;
                       break;
            case 'B-': return 2.7;
                       break;
            case 'C+' :return 2.3;
                       break;
            case 'C' : return 2;
                       break;
            case 'C-' :return 1.7;
                       break;
            case 'D+' :return 1.3;
                       break;
            case 'D' : return 1;
                       break;
            case 'D-' :return 0.7;
                       break;
            case 'F' : return 0;
                       break;
            default:   return 0;
                       break
        }
    }
});


