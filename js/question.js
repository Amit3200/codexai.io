var quetions=['int main()<br>{<br>printf("%d,%d,%d",sizeof(char*),sizeof(int*),sizeof(float*));;<br>return 0;<br>}','#include <stdio.h><br>int main()<br>\{<br>\int a = -10, b = 20;<br>\if(a > 0 && b < 0)<br>\ a++;<br>else if(a < 0 && b < 0)<br>\ a--;<br>\else if(a < 0 && b > 0)<br>\ b--;<br>\else<br>\ b--;<br>\printf("%d\n",a + b);<br>\return 0;<br>\}','In python 3.0 What does ~~~~~~5 evaluate to?','class comma_operator {<br>\
        public static void main(String args[]) <br>\
        {    <br>\
             int sum = 0;<br>\
             for (int i = 0, j = 0; i < 5 & j < 5; ++i, j = i + 1)<br>\
                 sum += i;<br>\
 	     System.out.println(sum);<br>\
        } <br>\
    }'];

var answers=['8,8,8','10','5','5']
document.getElementById("qu1").innerHTML=quetions[0];
document.getElementById("qu2").innerHTML=quetions[1];
document.getElementById("qu3").innerHTML=quetions[2];
document.getElementById("qu4").innerHTML=quetions[3];
score=0;

function mine()
{
    var name=document.getElementById("name1").value;
    var w=document.getElementById("r1").value;
    var x=document.getElementById("r2").value;
    var y=document.getElementById("r3").value;
    var z=document.getElementById("r4").value;
    if(w===answers[0])
        {
            score+=1;
         
        }
        if(x===answers[1])
        {
            score+=1;
        }
        if(y===answers[2])
        {
            score+=1;
        }
        if(z===answers[3])
        {
            score+=1;
        }
    if (name=="" || name==" ")
        {
            swal({
  title: "Error",
  text: "No Name Found Try Re Test",
  icon: "warning",
        });}
                 else{
    swal({
  title: "Test Complete",
  text: "Hey "+name+"! You Scored "+score,
  icon: "success",
});
}
}